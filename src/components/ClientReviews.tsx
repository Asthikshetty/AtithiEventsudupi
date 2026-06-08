import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star, Quote } from "lucide-react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

interface ReviewItem {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
}

const reviewsData: ReviewItem[] = [
  {
    id: 1,
    name: "Aditi Rao",
    location: "Manipal, Udupi",
    rating: 5,
    text: "We hired Atithi Events for my sister's wedding at Manipal. The catering was absolutely phenomenal! Guests are still talking about the Kundapura Chicken Ghee Roast and the traditional Udupi Veg meals. The stage decorations were cinematic, and the live streaming was seamless. Highly recommended!",
  },
  {
    id: 2,
    name: "Sharan Shetty",
    location: "Kundapura",
    rating: 5,
    text: "Best event planners in the region. The team managed our housewarming ceremony and reception with total perfection. The German tent was sturdy and premium, the DJ sound was top-notch, and the flower decoration exceeded our expectations. Extremely professional!",
  },
  {
    id: 3,
    name: "Dr. Vikram Kamath",
    location: "Indrali, Udupi",
    rating: 5,
    text: "Excellent food, outstanding hospitality, and very cooperative management. Karthik and Hemaraj ensured everything ran on time. The traditional Pili Vesha troupe they arranged for our sangeet entry was the highlight of the night. A 10/10 service!",
  },
  {
    id: 4,
    name: "Prerana Poojary",
    location: "Brahmavara, Udupi",
    rating: 5,
    text: "Their catering is out of this world! The seafood live counters (fish fry) and traditional payasam were highlights. The makeup artist they provided did an outstanding job, and the pre-wedding shoot on Kapu beach turned out magical. Truly a reliable partner.",
  },
  {
    id: 5,
    name: "Gautham Hegde",
    location: "Koteshwara, Kundapura",
    rating: 5,
    text: "Atithi Events and Caters made our corporate conference look like a premium affair. The LED screen setup was crystal clear, sound system was crisp, and the veg buffet catering was top-tier. Very clean and hygienic handling. Udupi's best!",
  },
];

export const ClientReviews: React.FC = () => {
  return (
    <section id="reviews" className="w-full overflow-x-hidden py-16 sm:py-24 bg-transparent relative border-b border-gold/15">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-maroon/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center mb-16">
          <span className="text-maroon font-semibold uppercase tracking-[0.3em] text-xs block mb-3">
            Client Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-maroon-dark">
            Client <span className="text-gold-gradient">Reviews</span>
          </h2>
          <div className="h-[2px] w-24 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mt-4" />
        </div>

        {/* Auto-sliding reviews carousel */}
        <div className="relative">
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={24}
            slidesPerView={1}
            autoplay={{
              delay: 4500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="pb-16"
          >
            {reviewsData.map((review) => (
              <SwiperSlide key={review.id}>
                <div className="glass-card p-8 rounded-xl border border-gold/15 relative h-full flex flex-col justify-between hover:border-gold/30 transition-all duration-300">
                  
                  {/* Quote decoration */}
                  <div className="absolute top-6 right-6 text-gold/20">
                    <Quote className="w-16 h-16 transform rotate-180" />
                  </div>

                  <div>
                    {/* Stars Rating */}
                    <div className="flex items-center gap-1 mb-5">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-current" />
                      ))}
                    </div>

                    {/* Testimonial text */}
                    <p className="text-gray-700 font-sans text-sm sm:text-base font-light italic leading-relaxed mb-8 relative z-10">
                      "{review.text}"
                    </p>
                  </div>

                  {/* Reviewer Details */}
                  <div className="flex items-center gap-3 border-t border-gold/10 pt-4">
                    <div className="w-10 h-10 rounded-full bg-maroon text-white border border-gold/50 flex items-center justify-center font-serif font-bold text-lg">
                      {review.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-serif font-bold text-maroon-dark tracking-wide">
                        {review.name}
                      </h4>
                      <p className="text-xs text-gold-dark font-medium">{review.location}</p>
                    </div>
                  </div>

                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};
