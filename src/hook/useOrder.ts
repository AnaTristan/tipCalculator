import { useState } from "react";
import type { MenuItem, orderItem } from "../types";

export default function useOrder() {
  const [order, setOrder] = useState<orderItem[]>([]);
  const [tip, setTip] = useState(0);

  const addItem = (item: MenuItem) => {
    // console.log("item",item);

    const itemExists = order.find((orderItem) => orderItem.id === item.id);

    if (itemExists) {
      const updatedOrder = order.map((orderItem) =>
        orderItem.id === item.id
          ? { ...orderItem, quantity: orderItem.quantity + 1 }
          : orderItem
      );

      setOrder(updatedOrder);
    } else {
      const newItem: orderItem = { ...item, quantity: 1 };
      setOrder([...order, newItem]);
    }

    // console.log("order", order);
  };

  const deleteItem = (item: MenuItem) => {
    setOrder((prevOrder) => prevOrder.filter((it) => it.id !== item.id));

    // console.log("order", order);
  };

  const placeOrder = () => {
    setOrder([]);
    setTip(0);
  };

  return {
    order,
    tip,
    setTip,
    addItem,
    deleteItem,
    placeOrder,
  };
}
