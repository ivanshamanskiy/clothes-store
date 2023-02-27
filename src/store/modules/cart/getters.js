export default {
  getCart(state) {
    return state.cart;
  },
  getCartLength(state) {
    let qty = 0;
    state.cart.forEach((el) => (qty += el.quantity));
    return qty;
  },
  getOrder(state) {
    return state.order;
  },
  isLoading(state) {
    return state.isLoading;
  },
};
