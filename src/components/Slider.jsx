import { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const Hero = () => {
  const lists=[
    {
      name:"image1",
      path:"image1.jpg",
      buttonUrl:"/image1"
    },
    {
      name:"image2",
      path:"image2.jpg",
      buttonUrl:"/image2"
      
    },
    {
      name:"image3",
      path:"image3.jpg",
      buttonUrl:"/image3"
    },
    {
      name:"image4",
      path:"image4.jpg",
      buttonUrl:"/image4"
    },
  ];
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true})
  const navigate= useNavigate();
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi])


  const handleRoute =(link)=>{
    navigate(link);
  };

  return (
    <div className="embla w-full mx-auto relative">

      <div className="embla__viewport overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {lists.map((list, index) => (
            <div
              className="relative embla__slide flex items-center justify-center text-xl font-bold bg-gray-200 border-2 border-gray-400 h-140"
              key={index}
            >
              <img
              src={list.path}
              alt={list.name}
              className="w-full h-full object-cover"
              />

                    <button
        className="absolute -bottom-0 left-4 -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={()=>handleRoute(list.buttonUrl)}
      >
        
        Buy
        </button>
            </div>
          ))}
        </div>
      </div>

      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={scrollPrev}
      >
        <ChevronLeft size={28} />
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
        onClick={scrollNext}
      >
        <ChevronRight size={28}/>
        </button>

    </div>
  )
}
export default Hero;