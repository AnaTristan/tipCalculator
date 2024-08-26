import { Dispatch } from "react";
import { formatCurrency } from "../helpers";
import { orderState, orderActions } from "../reducers/orderReducer";

type OrderContentprops = {
  state: orderState;
  dispatch: Dispatch<orderActions>;
};

const OrderContents = ({ state, dispatch }: OrderContentprops) => {
  return (
    <div>
      <h2 className="text-center text-4xl font-black ">Consumo</h2>

      <div className="space-y-3 mt-6">
        {state.order.map((item) => (
          <div
            key={item.id}
            className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b items-center"
          >
            <div>
              <p className="text-lg">
                {item.name} - {formatCurrency(item.price)}
              </p>
              <p className="font-black">
                Cantidad: {item.quantity} -{" "}
                {formatCurrency(item.price * item.quantity)}
              </p>
            </div>
            <button
              className="bg-red-600 w-8 h-8 rounded-full text-white font-black"
              onClick={() =>
                dispatch({ type: "delete-item", payload: { id: item.id } })
              }
            >
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderContents;
