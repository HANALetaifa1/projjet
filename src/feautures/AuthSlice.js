// import React from 'react';
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import { signup, signin } from "../Services/Authservice";
// import Swal from 'sweetalert2';
// import WithReactContent from "sweetalert2-react-content";

// const MySwal = WithReactContent(Swal);

// export const register = createAsyncThunk(
//     "register",
//     async (user, thunkAPI) => {
//         const { rejectWithValue } = thunkAPI;
//         try {
//             const res = await signup(user);
//             if (!res.data.success) throw res.data.message;
//             return res.data;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// export const login = createAsyncThunk(
//     "login",
//     async (user, thunkAPI) => {
//         const { rejectWithValue } = thunkAPI;
//         try {
//             const res = await signin(user);
//             if (!res.data.success) throw res.data.message;
//             return res.data;
//         } catch (error) {
//             return rejectWithValue(error.message);
//         }
//     }
// );

// export const logout = createAsyncThunk("/logout", () => {
//     localStorage.removeItem("CC_Token");
//     localStorage.removeItem("refresh_token");
// });

// export const authSlice = createSlice({
//     name: "auth",
//     initialState: {
//         user: null,
//         isLoading: false,
//         isSuccess: false,
//         isError: false,
//         errorMessage: '',
//         isLoggedIn: false,
//     },
//     reducers: {
//         reset: (state) => {
//             state.isLoading = false;
//             state.isSuccess = false;
//             state.isError = false;
//             state.errorMessage = '';
//             state.isLoggedIn = false;
//         }
//     },
//     extraReducers: (builder) => {
//         builder
//             .addCase(register.pending, (state) => {
//                 state.isSuccess = false;
//                 state.isError = false;
//                 state.errorMessage = new String();
//                 state.isLoading = true;
//             })
//             .addCase(register.fulfilled, (state, action) => {
//                 state.user = action.payload;
//                 state.isLoading = false;
//                 state.isSuccess = true;
//             })
//             .addCase(register.rejected, (state, action) => {
//                 state.isLoading = false;
//                 state.isError = true;
//                 state.errorMessage = action.payload;
//                 state.user = null;
//             })
//             .addCase(login.pending, (state) => {
//                 state.isSuccess = false;
//                 state.isError = false;
//                 state.errorMessage = '';
//                 state.isLoading = true;
//             })
//             .addCase(login.fulfilled, (state, action) => {
//                 state.isLoggedIn = true;
//                 state.user = action.payload.user;
//                 localStorage.setItem("CC_Token", action.payload.token)
//                 localStorage.setItem('refresh_token', action.payload.refreshToken);
//                 MySwal.fire({
//                     title: 'Connection was successful',
//                 })
//                 state.isSuccess = true;
//             })
//             .addCase(login.rejected, (state, action) => {
//                 state.isLoggedIn = false;
//                 state.user = null;
//                 state.isError = true;
//                 state.errorMessage = action.payload;
//             })
//             .addCase(logout.fulfilled, (state) => {
//                 state.isLoggedIn = false;
//                 state.user = null;
//             })
//     }
// });


// export const { reset } = authSlice.actions;
// export default authSlice.reducer;


// authSlice.js

// import { createSlice } from "@reduxjs/toolkit";

// import axios from "axios";

// export const authSlice = createSlice({
//   name: "auth",
//   initialState: {
//     isLoggedIn: false,
//     user: null,
//     isError: false,
//     errorMessage: "",
//   },
//   reducers: {
//     loginSuccess: (state, action) => {
//       state.isLoggedIn = true;
//       state.user = action.payload;
//       state.isError = false;
//       state.errorMessage = "";
//     },
//     loginFailure: (state, action) => {
//       state.isLoggedIn = false;
//       state.user = null;
//       state.isError = true;
//       state.errorMessage = action.payload;
//     },
//   },
// });

// export const { loginSuccess, loginFailure } = authSlice.actions;
// export const register = (userData) => async (dispatch) => {
//     try {
//       const response = await axios.post("http://localhost:5000/api/register", userData); // Envoyer la demande au backend
//       dispatch(registerSuccess(response.data.user)); // Dispatch l'action registerSuccess si l'enregistrement réussit
//       // Peut-être rediriger l'utilisateur vers une autre page après l'enregistrement réussi
//     } catch (error) {
//       dispatch(registerFailure(error.response.data.message)); // Dispatch l'action registerFailure si l'enregistrement échoue
//     }
//   };
  

// export const login = (userData) => async (dispatch) => {
//   try {
//     const response = await axios.post("http://localhost:5000/api/user/login", userData); // Envoyer la demande au backend
//     dispatch(loginSuccess(response.data.user)); // Dispatch l'action loginSuccess si l'authentification réussit
//   } catch (error) {
//     dispatch(loginFailure(error.response.data.message)); // Dispatch l'action loginFailure si l'authentification échoue
//   }
// };

// export const selectAuth = (state) => state.auth;

// export default authSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    user: null,
    isError: false,
    errorMessage: "",
  },
  reducers: {
    loginSuccess: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      state.isError = false;
      state.errorMessage = "";
    },
    loginFailure: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isError = true;
      state.errorMessage = action.payload;
    },
    registerSuccess: (state, action) => {
      state.isLoggedIn = true; // Vous pouvez choisir de connecter automatiquement l'utilisateur après l'inscription réussie si vous le souhaitez
      state.user = action.payload;
      state.isError = false;
      state.errorMessage = "";
    },
    registerFailure: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
      state.isError = true;
      state.errorMessage = action.payload;
    },
//     logout: (state) => {
//         state.isLoggedIn = false;
//         state.user = null;
//         state.isError = false;
//         state.errorMessage = "";
//       },
},
});

export const { loginSuccess, loginFailure, registerSuccess, registerFailure } = authSlice.actions;

export const register = (userData) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/api/user/register", userData);
    dispatch(registerSuccess(response.data.user));
  } catch (error) {
    dispatch(registerFailure(error.response.data.message));
  }
};

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post("http://localhost:5000/api/user/login", userData);
    dispatch(loginSuccess(response.data.user));
  } catch (error) {
    dispatch(loginFailure(error.response.data.message));
  }
  
};

export const selectAuth = (state) => state.auth;

export default authSlice.reducer;

