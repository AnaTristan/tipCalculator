import { useReducer } from "react";
import { menuItems } from "./data/db";
import useOrder from "./hook/useOrder";
import MenuItem from "./components/MenuItem";
import OrderContents from "./components/OrderContents";
import OrderTotals from "./components/OrderTotals";
import TipPercentForm from "./components/TipPercentForm";
import { InitialState, orderReducer } from "./reducers/orderReducer";

function App() {
  const { order, tip, setTip, addItem, deleteItem, placeOrder } = useOrder();

  const [state, dispatch] = useReducer(orderReducer, InitialState);

  return (
    <>
      <header className="bg-teal-400 py-5">
        <h1 className="text-center text-4xl font-black">
          Calculadora de Propinas y Consumo
        </h1>
      </header>

      <main className="max-w-7xl mx-auto pt-20 grid md:grid-cols-2">
        <div className="p-5">
          <h2 className="text-center text-4xl font-black ">Menu</h2>

          <div className="space-y-3 mt-6">
            {menuItems.map((item) => (
              <MenuItem key={item.id} item={item} addItem={addItem} />
            ))}
          </div>
        </div>

        <div className="p-5 border border-dashed border-slate-300 rounded-lg space-y-10">
          {order.length > 0 ? (
            <>
              <OrderContents order={order} deleteItem={deleteItem} />
              <TipPercentForm setTip={setTip} tip={tip} />
              <OrderTotals order={order} tip={tip} placeOrder={placeOrder} />
            </>
          ) : (
            <p className="text-center">La orden esta vacia</p>
          )}
        </div>
      </main>
    </>
  );
}

export default App;
