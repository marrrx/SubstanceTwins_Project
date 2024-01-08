import useStore from "../hooks/useStore"
import Order_review from "./order_review";
import { FormatMoney } from "../helpers";


export default function cart_sidebar() {

  const { order, total } = useStore();
  const testOrder = () =>order.length === 0;

  return (
    <>

      <div className="container"> 
        <h5>Here you can see all the products added to your cart.</h5>
<hr></hr>

        <div className="mt-4 mb-4 " style={{ overflowY: "scroll", height: 400 }}>
          {order.length === 0 ? (
            <h2 className="mt-5 text-center">Are not products on your cart yet</h2>
          ) : (
            order.map(product => (
              <Order_review
              key={product.id}
              product={product}
              />
            ))
            )}


        </div>

        <h6 className="">Total: {''}
        {FormatMoney(total)}
        </h6>
      </div>

      <form>
        <div className="mx-auto p-2" >
          <input
            type="submit"
            className={`${testOrder() ? " btn btn-disabled" : "btn btn-warning" } mb-3`}
            aria-label="Close"
            disabled={testOrder()}
            value="Checkout"
          />
        </div>

      </form>

    </>
  )
}
