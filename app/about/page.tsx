// app/about/page.tsx
import Image from "next/image";

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 text-white tracking-tight">
            Obsessed with <span className="text-gradient">Perfection</span>.
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            We don't view detailing as a chore. We view it as the art of restoring a machine to its purest form.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] w-full rounded-3xl overflow-hidden border border-white/10">
            <Image 
              src="https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=1000&auto=format&fit=crop"
              alt="Detailing in progress"
              fill
              className="object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          <div className="space-y-8">
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-white">The Philosophy</h3>
              <p className="text-gray-400 leading-relaxed">
                Founded in 2020, Sparkle Detail started with a simple mission: eliminate swirl marks and restore depth. We believe that every car, whether a daily driver or a weekend exotic, deserves to look showroom new.
              </p>
            </div>
            
            <div className="glass-panel p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4 text-white">The Process</h3>
              <p className="text-gray-400 leading-relaxed">
                We reject high-volume, low-quality car washes. We use pH-neutral shampoos, filtered water to prevent spotting, and single-use microfiber towels to ensure no dirt is ever dragged across your paint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}