export default {
  async addToCart(context, payload) {
    let present;

    const showError = function (res) {
      if (!res.ok) {
        const error = new Error(res.message || "Something went wrong. Try to authenticate");
        throw error;
      }
    };

    for (const el of context.getters.getCart) {
      if (el.product === payload.product) {
        const incremented = el.quantity + 1;
        const response = await fetch(`https://clothes-store-3205a-default-rtdb.europe-west1.firebasedatabase.app/cart/${payload.userId}/${payload.product}.json?auth=${payload.token}`, {
          method: "PATCH",
          body: JSON.stringify({
            product: payload.product,
            quantity: incremented,
          }),
        });
        present = true;

        showError(response);
      }
    }

    if (!present) {
      const response = await fetch(`https://clothes-store-3205a-default-rtdb.europe-west1.firebasedatabase.app/cart/${payload.userId}/${payload.product}.json?auth=${payload.token}`, {
        method: "PATCH",
        body: JSON.stringify({
          product: payload.product,
          quantity: 1,
        }),
      });

      showError(response);
    }

    context.commit("addToCart", {
      product: payload.product,
      // quantity: quantity
      quantity: 1,
    });
  },
  async getCart({ commit }, payload) {
    commit("loadingOn");

    const response = await fetch(`https://clothes-store-3205a-default-rtdb.europe-west1.firebasedatabase.app/cart/${payload.userId}.json?auth=${payload.token}`);

    commit("loadingOff");

    const responseData = await response.json();

    if (!response.ok) {
      const error = new Error(responseData.message);
      throw error;
    }

    const cart = [];

    for (const [, value] of Object.entries(responseData)) {
      cart.push({
        product: value.product,
        quantity: value.quantity,
      });
    }

    commit("setCart", {
      cart,
    });
  },
  async increment(context, payload) {
    console.log("started");
    const selected = context.getters.getCart.find((el) => el.product === payload.title);
    const incremented = payload.qty + 1;
    await fetch(`https://clothes-store-3205a-default-rtdb.europe-west1.firebasedatabase.app/cart/${payload.userId}/${payload.title}.json?auth=${payload.token}`, {
      method: "PUT",
      body: JSON.stringify({
        product: payload.title,
        quantity: incremented,
      }),
    });

    await context.commit("increment", selected);
  },
  async decrement(context, payload) {
    const selected = context.getters.getCart.find((el) => el.product === payload.title);
    const decremented = payload.qty - 1;
    if (payload.qty > 1) {
      const response = await fetch(`https://clothes-store-3205a-default-rtdb.europe-west1.firebasedatabase.app/cart/${payload.userId}/${payload.title}.json?auth=${payload.token}`, {
        method: "PUT",
        body: JSON.stringify({
          product: payload.title,
          quantity: decremented,
        }),
      });

      if (!response) {
        const error = new Error(response.error.message);
        throw error;
      }
    } else {
      const response = await fetch(`https://clothes-store-3205a-default-rtdb.europe-west1.firebasedatabase.app/cart/${payload.userId}.json?auth=${payload.token}`, {
        method: "PATCH",
        body: JSON.stringify({
          [payload.title]: null,
        }),
      });

      if (!response) {
        const error = new Error(response.error.message);
        throw error;
      }
    }

    context.commit("decrement", selected);
  },
  async sendOrder(context, payload) {
    const response = await fetch(`https://clothes-store-3205a-default-rtdb.europe-west1.firebasedatabase.app/orders/${payload.userId}.json?auth=${payload.token}`, {
      method: "POST",
      body: JSON.stringify({
        cart: payload.cart,
        details: payload.details,
      }),
    });

    if (!response) {
      const error = new Error(response.error.message);
      throw error;
    }

    context.commit("setOrder", payload);

    context.dispatch("clearCart", payload);
  },
  async clearCart(context, payload) {
    const response = await fetch(`https://clothes-store-3205a-default-rtdb.europe-west1.firebasedatabase.app/cart.json?auth=${payload.token}`, {
      method: "PATCH",
      body: JSON.stringify({
        [payload.userId]: null,
      }),
    });

    if (!response) {
      const error = new Error(response.error.message);
      throw error;
    }

    context.commit("clearCart");
  },

};
