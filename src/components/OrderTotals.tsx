import { useMemo } from "react";
import { orderItem } from "../types";
import { formatCurrency } from "../helpers";

type orderTotalsProps = {
  order: orderItem[];
};

const OrderTotals = ({ order }: orderTotalsProps) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl"> Totales y propina</h2>
        <p>
          Subtotal a pagar: {""}{" "}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina {""} <span className="font-bold">$0</span>
        </p>
        <p>
          Total a pagar {""} <span className="font-bold">$0</span>
        </p>
      </div>

      <button></button>
    </>
  );
};

export default OrderTotals;
