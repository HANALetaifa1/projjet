// import Api from '../Axios/Api';
// const USER_API = "/user";

// export const signup = async (user) => {
//   const u = {}
//    for (var pair of user.entries()) {
//        u[pair[0]] = pair[1]
//      }
//     return await Api.post('http://localhost:5000/api/user/register');
// }


// export const signin = async (user) => {
//     try {
//       const response = await Api.post(USER_API + "/login", user);

//       return response.data;
//     } catch (error) {
//       throw new Error(error.response.data.message);
//     }
//   }







// // export const signin = async (user) => {
// //     try {
// //       const response = await Api.post(USER_API + "/login", user);

// //       return response.data;
// //     } catch (error) {
// //       throw new Error(error.response.data.message);
// //     }
// //   }



// import Api from '../Axios/Api';

// const USER_API = "http://localhost:5000/api/user";

// export const signup = async (user) => {
//   try {
//     const response = await Api.post("http://localhost:5000/api/user " + "/register", user);
//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.message);
//   }
// }
// api/auth.js

import axios from "axios";

const API_URL = "http://localhost:5000/api/user";

export const signup = async (formData) => {
  try {
    const response = await axios.post(`${API_URL}/register`, formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};


export const signin = async (user) => {
  try {
    const response = await axios.post("http://localhost:5000/api/user" + "/login", user);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
}
