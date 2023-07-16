import axios from "axios";
// import { ICurrentUser, ITweet } from "../../types/tweet";
const instanceBacEnd = axios.create({
  baseURL: "https://6449944db88a78a8f00b5309.mockapi.io",
});
const currentUser = 1;

// interface ValidationError {
//   message: string;
//   err: Record<string, string[]>;
// }

// fetch currenUser
const fetchCurrentUsers = async (): Promise<any> => {
  //Promise<ICurrentUser | void | string>
  try {
    const { data } = await instanceBacEnd.get(`/currentUser/${currentUser}`);
    return data;
  } catch (err: unknown) {
    if (axios.isAxiosError<{ err?: { message: string } }>(err)) {
      return err.message;
    } else {
      console.error(err);
      return;
    }
  }
};
// upd followings of currentUser
const updateFollowings = async (
  updatedFollowings: string[]
): Promise<string | void> => {
  try {
    await instanceBacEnd.put(`/currentUser/${currentUser}`, {
      followings: updatedFollowings,
    });
  } catch (err: unknown) {
    if (axios.isAxiosError<{ err?: { message: string } }>(err)) {
      return err.message;
    } else {
      console.error(err);
      return;
    }
  }
};
// upd followers of user
const updateUser = async (
  id: string,
  updatedFollowers: number
): Promise<string | void> => {
  try {
    await instanceBacEnd.put(`/users/${id}`, {
      followers: updatedFollowers,
    });
  } catch (err) {
    if (axios.isAxiosError<{ err?: { message: string } }>(err)) {
      return err.message;
    } else {
      console.error(err);
      return;
    }
  }
};
// fetch all tweets with pagination
const fetchUsers = async (page: number, pageSize: number): Promise<any> => {
  //Promise<string | void | ITweet[]>
  try {
    const { data } = await instanceBacEnd.get(
      `/users?page=${page}&limit=${pageSize}`
    );
    return data;
  } catch (err) {
    if (axios.isAxiosError<{ err?: { message: string } }>(err)) {
      return err.message;
    } else {
      console.error(err);
      return;
    }
  }
};

// fetch all tweets
const fetchAllUsers = async () => {
  try {
    const { data } = await instanceBacEnd.get(`/users`);
    return data;
  } catch (err) {
    if (axios.isAxiosError<{ err?: { message: string } }>(err)) {
      return err.message;
    } else {
      console.error(err);
      return;
    }
  }
};
const queryBackEnd = {
  fetchCurrentUsers,
  fetchUsers,
  updateFollowings,
  fetchAllUsers,
  updateUser,
};

export default queryBackEnd;
