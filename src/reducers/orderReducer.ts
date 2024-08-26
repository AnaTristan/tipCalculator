import { useMemo } from "react";
import { MenuItem, orderItem } from "../types";

// Acciones de reducer
export type orderActions =
  | { type: "add-item"; payload: { item: MenuItem } }
  | { type: "delete-item"; payload: { id: MenuItem["id"] } }
  | { type: "place-order" }
  | { type: "add-tip"; payload: { value: number } };

// Definicion de estado inicial

export type orderState = {
  order: orderItem[];
  tip: number;
};

export const InitialState: orderState = {
  order: [],
  tip: 0,
};

// Reducer

export const orderReducer = (
  state: orderState = InitialState,
  action: orderActions
) => {
  if (action.type === "add-item") {
    const itemExists = state.order.find(
      (orderItem) => orderItem.id === action.payload.item.id
    );

    let order: orderItem[] = [];

    if (itemExists) {
      order = state.order.map((orderItem) =>
        orderItem.id === action.payload.item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );
    } else {
      const newItem: orderItem = { ...action.payload.item, quantity: 1 };
      order = [...state.order, newItem];
    }

    return {
      ...state,
      order,
    };
  }

  if (action.type === "delete-item") {
    let order = state.order.filter((item) => item.id !== action.payload.id);
    return {
      ...state,
      order,
    };
  }

  if (action.type === "place-order") {
    return {
      ...state,
    };
  }

  if (action.type === "add-tip") {
    const tip = action.payload.value;

    return {
      ...state,
      tip,
    };
  }

  return state;
};
