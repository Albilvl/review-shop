let defaultState = {
    userInfo: { username: "" , token: ""},
  };
  
  let userReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "LOGGED_IN": {
        let newState = { ...state };
  
        if (action.payload.loggedIn) {
          console.log("LOGGED_IN");
  
          newState.userInfo = {
            username: action.payload.username,
            token: action.payload.token,
          };
        } else {
          console.log("LOGGED_OUT");
          newState.userInfo = {
            username: action.payload.username,
            token: action.payload.token
          };
        }
        console.log(newState);
        return newState;
      }
  
      default:
        return state;
    }
  };
  
  export default userReducer;