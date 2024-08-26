import { menuItems } from "../data/db";
import { MenuItem, orderItem } from "../types";

// Acciones de reducer
export type orderActions =
  | { type: "add-item"; payload: { item: MenuItem } }
  | { type: "delete-item"; payload: { item: MenuItem } }
  | { type: "place-order" }
  | { type: "add-tip"; payload: { value: number } };

// Definicion de estado inicial

type orderState = {
  data: MenuItem[];
  order: orderItem[];
  tip: number;
};

export const InitialState: orderState = {
  data: menuItems,
  order: [],
  tip: 0,
};

// Reducer

export const orderReducer = (
  state: orderState = InitialState,
  action: orderActions
) => {
  if (action.type === "add-item") {
  }

  if (action.type === "delete-item") {
  }

  if (action.type === "place-order") {
  }

  if (action.type === "add-tip") {
  }

  return state;
};
