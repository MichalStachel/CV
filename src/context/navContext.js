import createDataContext from "./createDataContext";

const navReducer = (state, action) => {
  switch (action.type) {
    case "do_staf":
      break;

    default:
      break;
  }
};

export const { Provider, Context } = createDataContext(
  navReducer
  //   { methods },
  //   { state }
);
