const INITIAL_STATE = {
    cateogry_id:[],
    cartprod:[]
  };

  export default function categoryReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case "SET_CAT":
        return {
          ...state,
          cateogry_id:action.payload
        };
        case "SET_PROD":
        return {
          ...state,
          cartprod:[...state.cartprod,action.payload]
        };
      default:
        return state;
    }
  }