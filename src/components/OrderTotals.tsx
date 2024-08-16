import { useMemo } from "react";
import { orderItem } from "../types";
import { formatCurrency } from "../helpers";

type orderTotalsProps = {
  order: orderItem[];
  tip: number;
};

const OrderTotals = ({ order, tip }: orderTotalsProps) => {
  const subTotalAmount = useMemo(
    () => order.reduce((total, item) => total + item.quantity * item.price, 0),
    [order]
  );
  const tipAmount = useMemo(() => subTotalAmount * tip, [tip, order]);
  const totalAmount = useMemo(() => subTotalAmount + tipAmount, [tip, order]);

  return (
    <>
      <div className="space-y-3">
        <h2 className="font-black text-2xl"> Totales y propina</h2>
        <p>
          Subtotal a pagar: {""}
          <span className="font-bold">{formatCurrency(subTotalAmount)}</span>
        </p>
        <p>
          Propina {""}
          <span className="font-bold">{formatCurrency(tipAmount)}</span>
        </p>
        <p>
          Total a pagar {""}
          <span className="font-bold">{formatCurrency(totalAmount)}</span>
        </p>
      </div>

      <button></button>
    </>
  );
};

export default OrderTotals;
