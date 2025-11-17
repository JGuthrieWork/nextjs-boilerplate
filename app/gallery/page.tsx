// app/gallery/page.tsx
import Image from "next/image";

const works = [
  { src: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800&auto=format&fit=crop&q=60", alt: "Shiny Car Hood" },
  { src: "https://images.unsplash.com/photo-1563720223185-11003d516935?w=800&auto=format&fit=crop&q=60", alt: "Interior Cleaning" },
  { src: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800&auto=format&fit=crop&q=60", alt: "Foam Wash" },
  { src: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800&auto=format&fit=crop&q=60", alt: "Mustang Detail" },
  { src: "https://images.unsplash.com/photo-1552930294-6b595f4c2974?w=800&auto=format&fit=crop&q=60", alt: "Ceramic Coating Application" },
  { src: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&auto=format&fit=crop&q=60", alt: "Wheel Cleaning" },
];

export default function Gallery() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Work</h1>
        <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          Take a look at some of the vehicles we've transformed. From daily drivers to exotic supercars, we treat every vehicle with the utmost care.
        </p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {works.map((work, index) => (
          <div key={index} className="relative aspect-square group overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
            <Image
              src={work.src}
              alt={work.alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
          </div>
        ))}
      </div>
    </div>
  );
}