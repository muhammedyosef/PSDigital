export const CateID = (data) => {
    return {
      type: "SET_CAT",
      payload: data,
    };
  };
  export const CartProd = (data) => {
    return {
      type: "SET_PROD",
      payload: data,
    };
  };