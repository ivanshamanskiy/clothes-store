// importing
import mutations from "./mutations.js";
import getters from "./getters.js";
import actions from "./actions.js";

export default {
  namespaced: true,
  state() {
    return {
      userId: null,
      token: null,
      isAuthenticated: false,
      didAutoLogout: false,
    };
  },
  mutations,
  getters,
  actions,
};
