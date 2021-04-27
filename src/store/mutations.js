// import { cartPoincashCount } from "./getters";

export const SET_PRODUCTS = (state, products) => {
  state.products = products;
};
export const SET_POIN = (state, points) => {
  state.points = points;
  console.log(points);
};
export const RESET_CART = (state) => {
  state.cart = [];
};
export const RESET_EWALLET = (state) => {
  state.cartEwallet = [];
};
export const RESET_CARTPOINCASH = (state) => {
  state.cartPoincash = [];
};
export const RESET_CARTREBATE = (state) => {
  state.cartRebate = [];
};
export const RESET_CARTPULSA = (state) => {
  state.cartPulsa = [];
};
export const SET_EWALLETS = (state, ewallets) => {
  state.ewallets = ewallets;
};
export const SET_POINCASHS = (state, poincashs) => {
  state.poincashs = poincashs;
};
export const SET_REBATES = (state, rebates) => {
  state.rebates = rebates;
};
export const SET_PRODUCT = (state, product) => {
  state.product = product;
};

export function ADD_TO_CART(
  state,
  { product, quantity, cartTotalPrice, pointItem }
) {
  let productInCart = state.cart.find((item) => {
    return item.product.id === product.id;
  });
  if ((cartTotalPrice != 0, productInCart)) {
    state.points.Poin -= pointItem.toFixed(2);
    productInCart.quantity += quantity;
    return;
  } else {
    state.points.Poin -= pointItem.toFixed(2);
  }
  state.cart.push({
    product,
    quantity,
  });

  // console.log(pointItem.toFixed(2));
  // console.log(cartTotalPrice);
}

export function ADD_TO_PULSA(
  state,
  { no_hp, nominal, poin, poin_text, kd_produk, quantity }
) {
  let pulsaInCart = state.cartPulsa.find((item) => {
    return item.no_hp.id === no_hp.id;
  });
  if (pulsaInCart) {
    pulsaInCart.no_hp != no_hp;
    alert("Cart kamu masih berisi, silahkan check out terlebih dahulu.");
    return;
  }
  state.cartPulsa.push({
    no_hp,
    nominal,
    kd_produk,
    quantity,
    poin,
    poin_text,
  });
  // console.log(state.cartPulsa)
}

export function ADD_TO_EWALLET(
  state,
  { ewallet, poin, no_hp, kd_produk, nominal, quantity }
) {
  let ewalletInCart = state.cartEwallet.find((item) => {
    return item.no_hp.id === no_hp.id;
  });
  if (ewalletInCart) {
    ewalletInCart.kd_produk += kd_produk;
    return;
  }
  state.cartEwallet.push({
    no_hp,
    kd_produk,
    quantity,
    nominal,
    ewallet,
    poin,
  });
  // console.log(state.cartPulsa)
}

export function CHECKOUT_CART(state, { product, quantity }) {
  let productInCart = state.cart.find((item) => {
    return item.product.id === product.id;
  });
  if (productInCart) {
    productInCart.quantity += quantity;
    return;
  }
  state.cart.push({
    product,
    quantity,
  });
  console.log("hai");
  console.log(productInCart);
  // return state.cart=[]
}
export const ADD_TO_EWALLEWT = (state, { ewallet, quantity }) => {
  let ewalletInCart = state.cartEwallet.find((item) => {
    return item.ewallet.id === ewallet.id;
  });
  if (ewalletInCart) {
    ewalletInCart.quantity += quantity;
    return;
  }
  state.cartEwallet.push({
    ewallet,
    quantity,
  });
};

export const ADD_TO_POINCASH = (
  state,
  { poincash, quantity, cartPoincashPrice, pointItem }
) => {
  let poincashInCart = state.cartPoincash.find((item) => {
    return item.poincash.kd_produk === poincash.kd_produk;
  });
  if ((cartPoincashPrice != 0, poincashInCart)) {
    state.points.Poin -= pointItem.toFixed(2);
    poincashInCart.quantity += quantity;
    return;
  } else {
    state.points.Poin -= pointItem.toFixed(2);
  }
  state.cartPoincash.push({
    poincash,
    quantity,
  });
  console.log(pointItem.toFixed(2));
  console.log(cartPoincashPrice);
};
export const ADD_TO_REBATE = (state, { rebate, quantity }) => {
  let rebateInCart = state.cartRebate.find((item) => {
    return item.rebate.periode === rebate.periode;
  });
  if (rebateInCart) {
    rebateInCart.quantity != quantity;
    alert("Tidak bisa lebih dari 1 kali");
    return;
  }

  state.cartRebate.push({
    rebate,
    quantity,
  });
};
export const SET_CART = (state, cartItems) => {
  state.cart = cartItems;
};
export const SET_EWALLET = (state, ewalletItems) => {
  state.ewalletItems = ewalletItems;
};
export const SET_POINCASH = (state, poincashItems) => {
  state.poincashItems = poincashItems;
};
export const SET_REBATE = (state, rebateItems) => {
  state.rebate = rebateItems;
};
export const REMOVE_PRODUCT_FROM_CART = (state, product) => {
  state.cart = state.cart.filter((item) => {
    return item.product.id !== product.id;
  });
};
export const REMOVE_REBATE_FROM_CART = (state, rebate) => {
  state.cartRebate = state.cartRebate.filter((item) => {
    return item.rebate.id !== rebate.id;
  });
};
export const REMOVE_POINCASH_FROM_CART = (state, poincash) => {
  state.cartPoincash = state.cartPoincash.filter((item) => {
    return item.poincash.id !== poincash.id;
  });
};
export const REMOVE_PULSA_FROM_CART = (state) => {
  state.cartPulsa = state.cartPulsa.filter((item) => {
    return item.id !== item.id;
  });
};
export const REMOVE_EWALLET_FROM_CART = (state) => {
  state.cartEwallet = state.cartEwallet.filter((item) => {
    return item.id !== item.id;
  });
};
export const CLEAR_CART_ITEMS = (state) => {
  state.cart = [];
};

export const GET_DATA_SALESMAN = (state, tables) => {
  state.tables = tables;
};
