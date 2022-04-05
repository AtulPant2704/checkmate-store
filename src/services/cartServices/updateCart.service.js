import axios from "axios";

const updateCartService = (_id, actionType, token) => {
  return axios.post(
    `/api/user/cart/${_id}`,
    { action: { type: actionType } },
    { headers: { authorization: token } }
  );
};

export { updateCartService };
