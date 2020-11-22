export const reducer = (state, action) => {
  switch (action.type) {
    case "changeImg":
      return { ...state, image: action.payload };
    case "activeOn/Off":
      return { ...state, active: action.payload };
    case "changeWidth":
      return { ...state, width: action.payload };
    case "changeDisplay":
      return { ...state, display: action.payload };
    default:
      break;
  }
  throw new Error("no matching action type");
};
