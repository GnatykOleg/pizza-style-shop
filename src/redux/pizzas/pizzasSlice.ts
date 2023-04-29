import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IPizzasSliceState } from "../../types/redux/redux-types";

import { REDUX_STATE } from "../../helpers/constants/redux-constants";

import { products } from "../../db/products";

const { CART, PIZZAS } = REDUX_STATE;

// Initial state
const initialState: IPizzasSliceState = {
  [PIZZAS]: products,
  [CART]: [] as Array<{ id: number; quantity: number }>,
};

const pizzasSlice = createSlice({
  name: PIZZAS,

  initialState,

  reducers: {
    // Add pizza to localStorage with id and quantity.
    addPizzaToCart(state, { payload }: PayloadAction<number>) {
      state.cart = [...state.cart, { id: payload, quantity: 1 }];
    },

    // Remove pizza from localStorage with id and quantity.
    removePizzaFromCart(state, { payload }: PayloadAction<number>) {
      state.cart = state.cart.filter(({ id }) => id !== payload);
    },

    // Completely empty the basket
    clearCart(state) {
      state.cart = [];
    },

    // Incremeant the quantity of pizza
    incremeantPizza(state, { payload }: PayloadAction<number>) {
      // Look for the pizza index in the shopping cart.
      const pizzaIndex = state.cart.findIndex((pizza) => pizza.id === payload);

      // If there is such a pizza in the cart, increase the quantity values ​​by one.
      if (pizzaIndex !== -1) state.cart[pizzaIndex].quantity += 1;
    },

    // Decremeant pizza quantity
    decremeantPizza(state, { payload }: PayloadAction<number>) {
      // Look for the pizza index in the shopping cart.
      const pizzaIndex = state.cart.findIndex((pizza) => pizza.id === payload);

      // If there is such a pizza in the cart AND the quantity of this pizza is GREATER than zero.
      // Then subtract one from the quantity.
      if (pizzaIndex !== -1 && state.cart[pizzaIndex].quantity > 0)
        state.cart[pizzaIndex].quantity -= 1;

      // If the quantity of the pizza in the cart IS zero.
      // Then remove this product from the cart.
      if (state.cart[pizzaIndex].quantity === 0)
        state.cart = state.cart.filter(({ id }) => id !== payload);
    },
  },
});

export const {
  addPizzaToCart,
  incremeantPizza,
  decremeantPizza,
  clearCart,
  removePizzaFromCart,
} = pizzasSlice.actions;

export default pizzasSlice.reducer;
