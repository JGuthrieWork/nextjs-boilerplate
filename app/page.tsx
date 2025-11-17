// app/page.tsx
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* HERO SECTION */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1920&auto=format&fit=crop"
            alt="Luxury Car Detail"
            fill
            className="object-cover"
            priority
          />
          {/* Gradient Overlay to ensure text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-20 mix-blend-overlay" /> {/* Optional Texture */}
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 backdrop-blur-md">
            <span className="text-blue-300 text-xs font-semibold tracking-widest uppercase">Premium Auto Care</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 text-white">
            Experience the <br />
            <span className="text-gradient">Showroom Shine.</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            We don't just clean cars; we preserve automotive art. Specializing in paint correction, ceramic coating, and high-end restoration.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/schedule" className="group relative px-8 py-4 bg-blue-600 text-white font-bold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(37,99,235,0.5)]">
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></div>
              <span>Book Your Service</span>
            </Link>
            <Link href="/gallery" className="px-8 py-4 text-white border border-white/20 rounded-full font-semibold hover:bg-white/10 hover:border-white/40 transition-all backdrop-blur-sm">
              View Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="relative py-24 bg-black">
        {/* Ambient Background Glow */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-900/20 rounded-full blur-[128px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 rounded-full blur-[128px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Exquisite Services</h2>
            <p className="text-gray-400">Tailored treatments for your vehicle.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { 
                title: "Exterior Detail", 
                price: "Starts at $150", 
                desc: "Multi-stage hand wash, clay bar decontamination, iron removal, and sealant application.",
                icon: "I"
              },
              { 
                title: "Paint Correction", 
                price: "Starts at $400", 
                desc: "Machine polishing to remove swirl marks, scratches, and oxidation for mirror-like reflections.",
                icon: "II"
              },
              { 
                title: "Ceramic Coating", 
                price: "Starts at $800", 
                desc: "The ultimate protection. 5-year guarantee liquid glass shield against UV, chemicals, and dirt.",
                icon: "III"
              },
            ].map((service, i) => (
              <div key={i} className="glass-panel p-8 rounded-3xl group hover:-translate-y-2 transition-all duration-500 hover:border-blue-500/30 hover:shadow-[0_0_30px_-5px_rgba(59,130,246,0.15)]">
                <div className="text-4xl mb-6 bg-blue-500/10 w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold mb-2 text-white">{service.title}</h3>
                <p className="text-blue-400 font-medium mb-4">{service.price}</p>
                <p className="text-gray-400 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 border-t border-white/5 bg-neutral-950">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready for a transformation?</h2>
          <p className="text-gray-400 mb-8">Slots fill up quickly. Secure your appointment today.</p>
          <Link href="/schedule" className="inline-block px-12 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors">
            Schedule Now
          </Link>
        </div>
      </section>
    </div>
  );
}