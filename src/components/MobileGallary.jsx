import { useState } from 'react'
import * as images from '../../public/product-0-images'

const MobileGallary = () => {
  const [currentImage, setCurrentImage] = useState(0);
  return (
    <section className="product-gallery-mobile md:hidden flex items-start relative mb-6 max-h-96 overflow-hidden">
      <h3 className="sr-only">Product Gallery</h3>
      {Object.keys(images).map((image, index) => (
        <img src={images[image]} key={index} alt={image}
             className= {`${index !== currentImage ? 'hidden' : 'animate-[fade_500ms_ease-in]'}`} />
      ))}
      <button aria-label="next picture" className="aspect-square w-12 max-md:w-10 absolute bottom-1/2 translate-y-1/2 right-10 translate-x-1/2 bg-white text-slate-900 hover:text-orange-500 stroke-current rounded-full" 
              onClick={() => {(currentImage < Object.keys(images).length - 1) ? setCurrentImage(currentImage + 1) : setCurrentImage(0)}}>
        <svg className="aspect-square mx-auto" width={13} height={18} xmlns="http://www.w3.org/2000/svg">
          <path d="m2 1 8 8-8 8" strokeWidth={3} fill="none" fillRule="evenodd" />
        </svg>
      </button>
      <button aria-label="previous picture" className="aspect-square w-12 max-md:w-10 absolute bottom-1/2 translate-y-1/2 left-10 -translate-x-1/2 bg-white text-slate-900 hover:text-orange-500 stroke-current rounded-full"
              onClick={() => {(currentImage !== 0) ? setCurrentImage(currentImage - 1) : setCurrentImage(Object.keys(images).length - 1)}}>
        <svg className="aspect-square mx-auto" width={12} height={18} xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1 3 9l8 8" strokeWidth={3} fill="none" fillRule="evenodd" />
        </svg>
      </button>
    </section>
  )
}

export default MobileGallary