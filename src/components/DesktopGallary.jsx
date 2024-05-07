import * as images from '../../public/product-0-images'
import * as thumbnails from '../../public/product-0-thumbnails'

const DesktopGallary = ({currentImage, setCurrentImage, setIsDesktopFullScreen}) => {
  return (
    <section className="product-gallery-desktop max-lg:max-w-md flex items-center justify-center flex-col gap-7 max-md:hidden">
        <h3 className="sr-only">Product Gallery</h3>
        <div className="hero-image">
          <button className='rounded-2xl overflow-hidden hover:outline outline-2 outline-orange-500' onClick={() => {setIsDesktopFullScreen(true)}}>
            {Object.keys(images).map((image, index) => (
              <img src={images[image]} key={index} alt={image}
              className={`${index != currentImage ? 'hidden' : 'animate-[fade_500ms_ease-in]'} ${index === currentImage + 1 ? 'animate-fadeOut' : ''}`} />
            ))}
          </button>
        </div>
        <div className="images-preview flex gap-7">
          { Object.keys(thumbnails).map((thumbnail, index) => (
            <button className={`${index === currentImage ? 'active-img' : ''} w-1/4 focus:outline outline-2 outline-orange-500 rounded-xl after:content-[''] after:absolute relative after:top-0 after:left-0 after:opacity-0 after:bg-white focus:after:opacity-70 hover:after:opacity-50 after:w-full after:h-full overflow-hidden`} onClick={() => {setCurrentImage(index)}} key={index}><img src={thumbnails[thumbnail]} alt={thumbnail} /></button>
          ))}
        </div>
    </section>
  )
}

export default DesktopGallary