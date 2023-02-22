export default {
    getUserId(state) {
        return state.userId;
    },
    getToken(state) {
        return state.token;
    },
    isAuthenticated(state) {
        return state.isAuthenticated;
    },
    didAutoLogout(state) {
        return state.didAutoLogout;
    }
}