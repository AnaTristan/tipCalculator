import { formatCurrency } from "../helpers";
import { MenuItem, orderItem } from "../types";

type OrderContentprops = {
  order: orderItem[];
  deleteItem: (item: MenuItem) => void;
};

const OrderContents = ({ order, deleteItem }: OrderContentprops) => {
  return (
    <div>
      <h2 className="text-center text-4xl font-black ">Consumo</h2>

      <div className="space-y-3 mt-6">
        {order.length === 0 ? (
          <p className="text-center">"La orden esta vacia"</p>
        ) : (
          order.map((item) => (
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
                onClick={() => deleteItem(item)}
              >
                X
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default OrderContents;
