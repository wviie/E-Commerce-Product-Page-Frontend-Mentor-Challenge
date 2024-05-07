import { useState } from "react"

const ProductInfo = ({productData = [], setOrders, addCents}) => {

  const [amount, setAmount] = useState(0)

  return (
    <section className="product-information px-6 flex flex-col justify-center gap-8 max-md:gap-4">
      <span className="company text-orange-600 tracking-widest uppercase text-xs font-bold">Sneaker Company</span>
      <h1 className="product-name font-bold text-5xl max-md:text-3xl capitalize text-slate-900">
        {productData['name']}
      </h1>
      <p className="product-description text-base text-slate-500">
        {productData['description']}
      </p>
      <section className="max-md:flex max-md:justify-between max-md:items-center">
        <h2 className="current-price flex items-center mb-1 font-bold text-3xl text-slate-900">
          <span className="sr-only">Current Price</span>${addCents(productData['current-price'])}
          <span className="bg-orange-100 ml-3 p-1 rounded-md text-orange-600 text-lg">{productData['discount']}%<span className="sr-only">Discount</span></span>
        </h2>
        <p className="original-price font-bold text-slate-400 line-through">
          <span className="sr-only">Original Price</span>${addCents(productData['original-price'])}
        </p>
      </section>
      <div className="w-full flex gap-6 max-md:grid max-md:gap-4">
        <div className="amount-container primary-btn md:w-2/5 font-bold flex justify-between items-center px-4 rounded-lg bg-slate-100">
          <button className="w-8 aspect-square grid place-content-center text-orange-500 hover:text-orange-300 fill-current" aria-label="remove item" onClick={() => {if(amount > 0) setAmount(amount - 1)}}>
            <svg width={12} height={4} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <path d="M11.357 3.332A.641.641 0 0 0 12 2.69V.643A.641.641 0 0 0 11.357 0H.643A.641.641 0 0 0 0 .643v2.046c0 .357.287.643.643.643h10.714Z" id="a" />
              </defs>
              <use fillRule="nonzero" xlinkHref="#a" />
            </svg>
          </button>
          <p className="amount"><span className="sr-only">Adding</span>{amount}<span className="sr-only">items</span></p>
          <button className="w-8 aspect-square grid place-content-center text-orange-500 hover:text-orange-300 fill-current" aria-label="add item" onClick={() => setAmount(amount + 1)}>
            <svg width={12} height={12} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <defs>
                <path d="M12 7.023V4.977a.641.641 0 0 0-.643-.643h-3.69V.643A.641.641 0 0 0 7.022 0H4.977a.641.641 0 0 0-.643.643v3.69H.643A.641.641 0 0 0 0 4.978v2.046c0 .356.287.643.643.643h3.69v3.691c0 .356.288.643.644.643h2.046a.641.641 0 0 0 .643-.643v-3.69h3.691A.641.641 0 0 0 12 7.022Z" id="b" />
              </defs>
            <use fillRule="nonzero" xlinkHref="#b" />
            </svg>
          </button>
        </div>
        <button className="add-to-cart primary-btn md:w-3/5 flex justify-center items-center font-bold text-sm max-md:text-base shadow-xl shadow-orange-200 bg-orange-500 text-white fill-current hover:bg-orange-300 rounded-lg" 
          onClick={() => {
            if(amount === 0) return
            setOrders(prevOrders => [...prevOrders, { id: productData['id'], quantity: amount }])
            setAmount(0)
          }}>
        <svg className="mr-4" width={22} height={20} xmlns="http://www.w3.org/2000/svg">
          <path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z" fillRule="nonzero" />
        </svg>
        Add to cart
        </button>
      </div>
    </section>
  )
}

export default ProductInfo