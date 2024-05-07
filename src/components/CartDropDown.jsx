import * as thumbnails from '../../public/product-0-thumbnails'

const CartDropDown = ({products = [], orders, setOrders, addCents}) => {

  return (

    // animate-[dropDown_700ms_ease-in-out]
    <section className="cart-drop-down z-10 absolute top-full-1 right-32 translate-x-1/2 max-md:top-20 max-md:left-1/2 max-md:-translate-x-1/2 max-w-96 w-96 max-sm:w-11/12 min-h-36 flex flex-col rounded-lg shadow-xl shadow-gray-300 bg-white animate-[fade_500ms_ease-in]">
      <h2 className="font-bold text-slate-900 my-4 ml-4">Cart</h2>
      <hr />
      <div className="min-h-48 p-4 my-auto flex flex-col items-center justify-center gap-6">
      { orders.length === 0 || products.length === 0 ?
        <p className="font-bold text-slate-600">Your cart is empty.</p>
        :
        <div className="flex flex-col gap-6 w-full">
          { orders.map((order) => (
            <div className="product-in-cart flex gap-4 justify-between items-center" key={order['id']}>
              <img src={thumbnails['product_thumbnail_1']} alt="product-image" className="w-16 rounded-md" />
              <div className="text-slate-500 text-md">
                <p className="product-name capitalize">{ (products[order['id']])['name'] }</p>
                <p className="price">${addCents((products[order['id']])['current-price'])} x {order['quantity']}
                  <span className="total-price font-bold text-slate-900"> ${addCents((products[order['id']])['current-price'] * order['quantity'])}</span>
                </p>
              </div>
              <button className="delete w-8 aspect-square grid place-content-center fill-current text-gray-400 hover:text-slate-800" aria-label="delete order" onClick={() => setOrders(orders.length - 1 > 0 ? orders.filter(o => o!== order) : [])}>
                <svg width={14} height={16} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                  <defs>
                    <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a" />
                  </defs>
                  <use fillRule="nonzero" xlinkHref="#a" />
                </svg>
              </button>
            </div>
          ))}
          <button className="bg-orange-500 hover:bg-orange-300 primary-btn rounded-lg text-white font-bold tra" onClick={() => {setOrders([])}}>Check Out</button>
        </div>
        }
      </div>
    </section>
  )
}

export default CartDropDown