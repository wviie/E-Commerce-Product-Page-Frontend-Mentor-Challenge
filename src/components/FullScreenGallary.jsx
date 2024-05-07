import { useState } from "react";
import * as images from '../../public/product-0-images'
import * as thumbnails from '../../public/product-0-thumbnails'

const FullScreenGallary = ({setIsDesktopFullScreen}) => {

  const [currentImage, setCurrentImage] = useState(0);

  return (
  <section className="product-gallery-desktop w-1/3 flex flex-col gap-4 animate-[fade_500ms_ease-in]">
    <h3 className="sr-only">Full Product Gallery</h3>
    <div className="hero-image relative">
      <div className="hero-image rounded-2xl overflow-hidden">
        {Object.keys(images).map((image, index) => (
          <img src={images[image]} key={index} alt={image}
          className= {`${index != currentImage ? 'hidden' : 'animate-[fade_500ms_ease-in]'}`} />
        ))}
      </div>
      <button aria-label="close gallery" className="absolute right-0 -top-8 text-white hover:text-orange-400 fill-current" onClick={() => setIsDesktopFullScreen(false)}>
        <svg width={14} height={15} xmlns="http://www.w3.org/2000/svg">
          <path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fillRule="evenodd" />
        </svg>
      </button>
      <button aria-label="next picture" className="aspect-square w-12 absolute bottom-1/2 translate-y-1/2 right-0 translate-x-1/2 bg-white text-slate-900 hover:text-orange-500 stroke-current rounded-full"
        onClick={() => {(currentImage < Object.keys(images).length - 1) ? setCurrentImage(currentImage + 1) : setCurrentImage(0)}}>
        <svg className="aspect-square mx-auto" width={13} height={18} xmlns="http://www.w3.org/2000/svg">
          <path d="m2 1 8 8-8 8" strokeWidth={3} fill="none" fillRule="evenodd" />
        </svg>
      </button>
      <button aria-label="previous picture" className="aspect-square w-12 absolute bottom-1/2 translate-y-1/2 left-0 -translate-x-1/2 bg-white text-slate-900 hover:text-orange-500 stroke-current rounded-full"
        onClick={() => {(currentImage !== 0) ? setCurrentImage(currentImage - 1) : setCurrentImage(Object.keys(images).length - 1)}}>
        <svg className="aspect-square mx-auto" width={12} height={18} xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1 3 9l8 8" strokeWidth={3} fill="none" fillRule="evenodd" />
        </svg>
      </button>
    </div>
    <div className="images-preview flex gap-4 px-10">
      { Object.keys(thumbnails).map((thumbnail, index) => (
        <button className={`${index === currentImage ? 'active-img' : ''} w-1/4 focus:outline outline-2 outline-orange-500 rounded-xl after:content-[''] after:absolute relative after:top-0 after:left-0 after:opacity-0 after:bg-white focus:after:opacity-70 hover:after:opacity-50 after:w-full after:h-full overflow-hidden`} onClick={() => {setCurrentImage(index)}} key={index}><img src={thumbnails[thumbnail]} alt={thumbnail} /></button>
        ))}
    </div>
  </section>
  )
}

export default FullScreenGallary