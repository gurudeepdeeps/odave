import { useState } from 'react'
import { Navigation, Thumbs } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/thumbs'

export default function ProductImageSlider({ images, title }) {
  const [thumbsSwiper, setThumbsSwiper] = useState(null)
  const [zoomedImage, setZoomedImage] = useState('')

  return (
    <div>
      <Swiper
        modules={[Navigation, Thumbs]}
        navigation
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        className="border border-od-border"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`${title}-${index}`}>
            <button onClick={() => setZoomedImage(image)} className="block w-full">
              <img src={image} alt={`${title} ${index + 1}`} className="h-[560px] w-full object-cover" />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        modules={[Thumbs]}
        watchSlidesProgress
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={5}
        className="mt-4"
      >
        {images.map((image, index) => (
          <SwiperSlide key={`thumb-${title}-${index}`}>
            <img src={image} alt={`Thumbnail ${index + 1}`} className="h-24 w-full border border-od-border object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>

      {zoomedImage && (
        <button
          className="fixed inset-0 z-[90] bg-black/85 p-8"
          onClick={() => setZoomedImage('')}
          aria-label="Close image zoom"
        >
          <img src={zoomedImage} alt="Zoomed" className="mx-auto h-full max-h-[90vh] w-auto max-w-[90vw] object-contain" />
        </button>
      )}
    </div>
  )
}
