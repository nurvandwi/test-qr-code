/* eslint-disable */
import axios from "axios";
import { SET_CARTV } from "./mutations";

export function getProducts({ commit }, { outlet_id, token }) {
  console.log(this);
  axios
    .get(`${process.env.VUE_APP_URL}list-produk-hadiah`, {
      params: {
        outlet_id,
      },
      headers: {
        token,
      },
    })
    .then((response) => {
      commit("SET_PRODUCTS", response.data.data);
    });
}

export function getPoin({ commit }, { outlet_id, token }) {
  console.log(this);
  console.log(outlet_id);
  // commit("SET_POIN", Poin);
  axios
    .get(`${process.env.VUE_APP_URL}status-poin-rebate`, {
      params: {
        outlet_id,
      },
      headers: {
        token,
      },
    })
    .then((response) => {
      commit("SET_POIN", response.data.data);
    });
}
export function resetCart({ commit }) {
  commit("RESET_CART");
}
export function resetCartEwallet({ commit }) {
  commit("RESET_EWALLET");
}
export function resetCartRebate({ commit }) {
  commit("RESET_CARTREBATE");
}

export function resetCartPoinCash({ commit }) {
  commit("RESET_CARTPOINCASH");
}
export function resetCartPulsa({ commit }) {
  commit("RESET_CARTPULSA");
}
export function getEwallets({ commit }) {
  console.log(this);
  axios
    .get("http://shayna-backend.belajarkoding.com/api/products")
    .then((response) => {
      commit("SET_EWALLETS", response.data.data.data);
    });
}

export function getPoinCashs({ commit }, { outlet_id, token }) {
  console.log(this);
  axios
    .get(`${process.env.VUE_APP_URL}list-pointocash-hadiah`, {
      params: {
        outlet_id,
      },
      headers: {
        token,
      },
    })
    .then((response) => {
      commit("SET_POINCASHS", response.data.data);
    });
}

export function getRebates({ commit }, { outlet_id, token }) {
  console.log(this);
  axios
    .get(`${process.env.VUE_APP_URL}list-rebate-hadiah`, {
      params: {
        outlet_id,
      },
      headers: {
        token,
      },
    })
    .then((response) => {
      commit("SET_REBATES", response.data.data);
    });
}

export function getProduct({ commit }, { id }) {
  console.log(this);
  axios
    .get("http://shayna-backend.belajarkoding.com/api/products", {
      params: {
        id,
      },
    })
    .then((response) => {
      commit("SET_PRODUCT", response.data.data);
    });
}

export function checkOutCartItems({ commit }, { outlet_id, token }) {
  axios
    .get(`${process.env.VUE_APP_URL}post-produk-hadiah`, {
      headers: {
        "content-type": "application/json",
        token,
      },
    })
    .then((response) => {
      commit("SET_CARTV2", response.data);
    });
  console.log(SET_CARTV2);
}

export function addProductToCart(
  { commit },
  { product, quantity, poin, cartTotalPrice, pointItem }
) {
  commit("ADD_TO_CART", {
    product,
    quantity,
    poin,
    cartTotalPrice,
    pointItem,
  });
}

export function addPulsaToCart(
  { commit },
  { no_hp, poin, poin_text, nominal, kd_produk, quantity }
) {
  commit("ADD_TO_PULSA", {
    no_hp,
    nominal,
    kd_produk,
    quantity,
    poin,
    poin_text,
  });
}

export function addEwalletToCart(
  { commit },
  {
    no_hp,
    poin,
    ewallet,
    nominal,
    kd_produk,
    quantity,
    cartTotalPrice,
    pointItem,
  }
) {
  commit("ADD_TO_EWALLET", {
    no_hp,
    kd_produk,
    quantity,
    nominal,
    ewallet,
    poin,
    cartTotalPrice,
    pointItem,
  });
}

export function addPoinCashToCart(
  { commit },
  { poincash, quantity, poin, pointItem, cartPoincashPrice }
) {
  commit("ADD_TO_POINCASH", {
    poincash,
    quantity,
    poin,
    pointItem,
    cartPoincashPrice,
  });
}

export function checkOutCart({ state }, { outlet_id, token }) {
  console.log(outlet_id, token);
  let data = {
    outlet_id: outlet_id,
    data: state.cart.map(function(x) {
      return { kd_produk: x.product.kd_produk, quantity: x.quantity };
    }),
  };

  console.log(data);
  axios.post(`${process.env.VUE_APP_URL}post-produk-hadiah`, data, {
    headers: {
      token,
      "content-type": "application/json",
    },
  });
  return (
    (state.cartEwallet = []),
    (state.cart = []),
    (state.cartRebate = []),
    (state.cartPoincash = []),
    (state.cartPulsa = [])
  );
}

export function checkOutRebate({ state }, { outlet_id, token }) {
  console.log(outlet_id, token);
  let data = {
    outlet_id: outlet_id,
    data: state.cartRebate.map(function(x) {
      return { periode: x.rebate.periode, quantity: x.quantity };
    }),
  };

  console.log(data);
  axios.post(`${process.env.VUE_APP_URL}post-rebate-hadiah`, data, {
    headers: {
      "content-type": "application/json",
      token,
    },
  });
  return (
    (state.cartEwallet = []),
    (state.cart = []),
    (state.cartRebate = []),
    (state.cartPoincash = []),
    (state.cartPulsa = [])
  );
}

export function checkOutPoinCash({ state }, { outlet_id, token }) {
  console.log(outlet_id, token);
  let data = {
    outlet_id: outlet_id,
    data: state.cartPoincash.map(function(x) {
      return { kd_produk: x.poincash.kd_produk, quantity: x.quantity };
    }),
  };

  console.log(data);
  axios.post(`${process.env.VUE_APP_URL}post-pointocash-hadiah`, data, {
    headers: {
      token,
      "content-type": "application/json",
    },
  });
  return (
    (state.cartEwallet = []),
    (state.cart = []),
    (state.cartRebate = []),
    (state.cartPoincash = []),
    (state.cartPulsa = [])
  );
}

export function checkOutPulsa({ state }, { outlet_id, token }) {
  console.log(outlet_id, token);
  let data = {
    outlet_id: outlet_id,
    data: state.cartPulsa.map(function(x) {
      return { kd_produk: x.kd_produk, quantity: 1, no_hp: x.no_hp };
    }),
  };

  console.log(data);
  axios.post(`${process.env.VUE_APP_URL}post-pulsa-hadiah`, data, {
    headers: {
      token,
      "content-type": "application/json",
    },
  });
  return (
    (state.cartEwallet = []),
    (state.cart = []),
    (state.cartRebate = []),
    (state.cartPoincash = []),
    (state.cartPulsa = [])
  );
}

export function checkOutEwallet({ state }, { outlet_id, token }) {
  console.log(outlet_id, token);
  let data = {
    outlet_id: outlet_id,
    data: state.cartEwallet.map(function(x) {
      return { kd_produk: x.kd_produk, quantity: 1, no_hp: x.no_hp };
    }),
  };

  console.log(data);
  axios.post(`${process.env.VUE_APP_URL}post-ewallet-hadiah`, data, {
    headers: {
      token,
      "content-type": "application/json",
    },
  });
  return (
    (state.cartEwallet = []),
    (state.cart = []),
    (state.cartRebate = []),
    (state.cartPoincash = []),
    (state.cartPulsa = [])
  );
}

export function addEwalletToCartw({ commit }, { ewallet, quantity }) {
  commit("ADD_TO_EWALLET", {
    ewallet,
    quantity,
  });
  axios.post("http://shayna-backend.belajarkoding.com/api/cart", {
    ewallet_id: ewallet.id,
    quantity,
  });
}

export function addRebateToCart({ commit }, { rebate, quantity }) {
  commit("ADD_TO_REBATE", {
    rebate,
    quantity,
  });
  axios.post("http://shayna-backend.belajarkoding.com/api/cart", {
    rebate_id: rebate.id,
    quantity,
  });
}

export function getCartItems({ commit }) {
  axios
    .get("http://shayna-backend.belajarkoding.com/api/cart")
    .then((response) => {
      commit("SET_CART", response.data);
    });
}

export function getEwalletItems({ commit }) {
  axios
    .get("http://shayna-backend.belajarkoding.com/api/cart")
    .then((response) => {
      commit("SET_EWALLET", response.data);
    });
}

export function getPoincashItems({ commit }) {
  axios
    .get("http://shayna-backend.belajarkoding.com/api/cart")
    .then((response) => {
      commit("SET_POINCASH", response.data);
    });
}

export function getRebateItems({ commit }) {
  axios
    .get("http://shayna-backend.belajarkoding.com/api/cart")
    .then((response) => {
      commit("SET_REBATE", response.data);
    });
}

export function removeProductFromCart({ commit }, product) {
  commit("REMOVE_PRODUCT_FROM_CART", product);
  axios.delete(
    `http://shayna-backend.belajarkoding.com/api/cart/${product.id}`,
    {}
  );
}

export function removeRebateFromCart({ commit }, rebate) {
  commit("REMOVE_REBATE_FROM_CART", rebate);
  axios.delete(
    `http://shayna-backend.belajarkoding.com/api/cart/${rebate.id}`,
    {}
  );
}

export function removePoincashFromCart({ commit }, poincash) {
  commit("REMOVE_POINCASH_FROM_CART", poincash);
  axios.delete(
    `http://shayna-backend.belajarkoding.com/api/cart/${poincash.id}`,
    {}
  );
}

export function removePulsaFromCart({ commit }) {
  commit("REMOVE_PULSA_FROM_CART");
}

export function removeEwalletFromCart({ commit }) {
  commit("REMOVE_EWALLET_FROM_CART");
}

export function clearCartItems({ commit }) {
  commit("CLEAR_CART_ITEMS");
  axios.delete("http://shayna-backend.belajarkoding.com/api/cart");
}

export function getDataSalesman({ commit }, { outlet_id, token, thisBulan }) {
  axios
    .get(`${process.env.VUE_APP_URL}dashboard-outlet-mtm`, {
      headers: {
        token: localStorage.token,
      },
      params: {
        outlet_id: outlet_id,
        bulan: thisBulan,
      },
    })
    .then((response) => {
      commit("GET_DATA_SALESMAN", response.data);
    })
    .catch((error) => {
      console.log(error);
    });
}
