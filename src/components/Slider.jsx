import { useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const lists = [
    {
      name: "image1",
      path: "image1.jpg",
      buttonUrl: "/image1"
    },
    {
      name: "image2",
      path: "image2.jpg",
      buttonUrl: "/image2"
    },
    {
      name: "image3",
      path: "image3.jpg",
      buttonUrl: "/image3"
    },
    {
      name: "image4",
      path: "image4.jpg",
      buttonUrl: "/image4"
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const navigate = useNavigate();

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  const handleRoute = (link) => {
    navigate(link);
  };

  return (
    <div className="embla w-full">
      <div className="embla__viewport overflow-hidden shadow-lg" ref={emblaRef}>
        <div className="embla__container flex">
          {lists.map((list, index) => (
            <div
              className="relative embla__slide min-w-full h-[600px] bg-white"
              key={index}
            >
              <img
                src={list.path}
                alt={list.name}
                className="w-full h-full object-cover"
              />

              <div className="absolute bottom-6 left-6">
                <button
                  className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
                  onClick={() => handleRoute(list.buttonUrl)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        className="absolute top-1/2 left-4 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-blue-100 transition"
        onClick={scrollPrev}
      >
        <ChevronLeft className="text-blue-600" size={28} />
      </button>
      <button
        className="absolute top-1/2 right-4 -translate-y-1/2 bg-white shadow-md rounded-full p-2 hover:bg-blue-100 transition"
        onClick={scrollNext}
      >
        <ChevronRight className="text-blue-600" size={28} />
      </button>
    </div>
  );
};

export default Hero;
