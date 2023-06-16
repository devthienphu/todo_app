import axios from "axios";
import { URL } from "../constVar";

export const getUsers = async () => {
  try {
    const res = await axios({
      method: "get",
      url: `${URL}/Students`,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getUser = async (id) => {
  try {
    const res = await axios({
      method: "get",
      url: `${URL}/Students/${id}`,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const createUser = async (form) => {
  try {
    const res = await axios({
      method: "post",
      url: `${URL}/Students`,
      data: {
        studentID: 0,
        name: form.studentName,
        contact: +form.contact,
        age: +form.age
      },
      headers: { 
        Accept: 'application/json',
        "Content-Type": "application/json",
        },
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};



// export const updateTaskStatus = async (id) => {
//   try {
//     // make axios post request
//     const res = await axios({
//       method: "patch",
//       url: `${URL}/todos/${id}`,
//       data: { completed: true },
//     });

//     return res.data;
//   } catch (error) {
//     return error.response.data;
//   }
// };
