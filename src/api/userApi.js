import axios from "axios";
import { URL } from "../constVar";

export const getUsers = async () => {
  try {
    const res = await axios({
      method: "get",
      url: `${URL}/users`,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const getUserTask = async (id) => {
  try {
    const res = await axios({
      method: "get",
      url: `${URL}/users/${id}/todos`,
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
      url: `${URL}/users/${id}`,
    });
    return res.data;
  } catch (error) {
    return error.response.data;
  }
};

export const updateTaskStatus = async (id) => {
  try {
    // make axios post request
    const res = await axios({
      method: "patch",
      url: `${URL}/todos/${id}`,
      data: { completed: true },
    });

    return res.data;
  } catch (error) {
    return error.response.data;
  }
};
