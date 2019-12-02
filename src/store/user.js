const user = window.localStorage.getItem('user');
const userSteate = {
  isLogin: false,
  token: '',
  userInfo: {},
  singerInfo: {}
};
let initState;

if (user) {
  initState = JSON.parse(user);
} else {
  initState = userSteate;
}

const setUserState = (state = initState, action) => {
  switch (action.type) {
    case 'login':
      const newState = {
        ...state,
        isLogin: true,
        token: action.data.token,
        userInfo: action.data.user
      }
      window.localStorage.setItem('user', JSON.stringify(newState));
      return newState;
    case 'logout':
      window.localStorage.removeItem('user');
      return userSteate;
    default:
      return state;
  }
}

export default setUserState;
