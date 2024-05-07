import { useState } from "react"
import DesktopGallary from "./DesktopGallary"
import FullScreenGallary from "./FullScreenGallary"
import MobileGallary from "./MobileGallary"
import ProductInfo from "./ProductInfo"

const ProductPage = ({productData, setOrders, addCents, currentImage, setCurrentImage}) => {

  const [isDesktopFullScreen, setIsDesktopFullScreen] = useState(false)

  return (
    <section className="w-full h-full product-section xl:pl-12 grid place-content-start grid-cols-2 max-md:grid-cols-1 lg:gap-24 md:gap-12">
      <h2 className="sr-only">Product Page</h2>
      <MobileGallary 
        currentImage = {currentImage}
        setCurrentImage = {setCurrentImage} />
      <DesktopGallary 
        currentImage = {currentImage}
        setCurrentImage = {setCurrentImage}
        setIsDesktopFullScreen = {setIsDesktopFullScreen} />
      {isDesktopFullScreen &&
      <div className="overlay h-screen p-8 flex items-center justify-center max-md:hidden">
          <FullScreenGallary
            setIsDesktopFullScreen = {setIsDesktopFullScreen} />
      </div>}
      <ProductInfo
        productData = {productData} 
        setOrders = {setOrders}
        addCents = {addCents} />
    </section>
  )
}

export default ProductPage