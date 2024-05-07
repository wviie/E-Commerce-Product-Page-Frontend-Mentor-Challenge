import './css/style.css'
import Header from './components/Header'
import ProductPage from './components/ProductPage'
import { useState, useEffect } from 'react'

function App() {

  const id = 0 //in a real world application would do useParams

  const [products, setProducts] = useState([
    {
      //backup data since deployment site isn't fetching the json file
      id: 0,
      name: 'Fall Limited Edition Sneakers',
      description: 'These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.',
      'original-price': 250.00,
      discount: 50,
      'current-price': 125.00
    }
  ])
  const [productData, setProductData] = useState([])
  const [orders, setOrders] = useState([])
  const [currentImage, setCurrentImage] = useState(0);

  const getData = async () => {
    try {
    const res = await fetch('../public/productData.json')
    const data = await res.json();
    if (data.length === 0) throw 'Empty'
    setProducts(data);
    setProductData(products[id]); 
    } catch(error) {
      console.log('Error fetching data: ' + Error)
    } 
    finally {setProductData(products[id]);} 
  }

  const addCents = (price = 0) => {
    const priceString = price.toString();
    if (priceString.indexOf('.') === -1) { return priceString + '.00'; }
    else {
      const priceArray = priceString.split('.');
      if (priceArray[1].length === 1) {
        return priceString + '0';
      }
      else return priceString;
    }
  }
  
  useEffect(()=>{
    getData()
  },[])

  return (
    <div>
      <div className="fm-p min-h-screen flex justify-center">
        <div className="page-container lg:w-9/12 md:w-11/12 bg-white">
          <Header
            products = {products}
            orders = {orders}
            setOrders = {setOrders}
            addCents = {addCents} />
          <main>
            <ProductPage
              productData = {productData} 
              setOrders = {setOrders}
              addCents = {addCents}
              currentImage = {currentImage}
              setCurrentImage = {setCurrentImage} />
          </main>
          <style dangerouslySetInnerHTML={{__html: "\n    .attribution {\n      font-size: 11px;\n      text-align: center;\n    }\n\n    .attribution a {\n      color: hsl(228, 45%, 44%);\n    }\n  " }} />
          <div className="attribution font-bold my-12">
            Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" className="text-orange-500">Frontend Mentor</a>.
            Coded by <a href="#" className="text-orange-500 hover:text-orange-500">wviie</a>.
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
