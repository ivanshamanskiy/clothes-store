export default {
  setUser(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.cartId = payload.cartId;
    state.isAuthenticated = true;
    state.didAutoLogout = false;
  },
  logOut(state, payload) {
    state.token = payload.token;
    state.userId = payload.userId;
    state.tokenExpiration = payload.tokenExpiration;
    state.isAuthenticated = true;
  },
  setAutoLogout(state) {
    state.didAutoLogout = true;
  },
};
