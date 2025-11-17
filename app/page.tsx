// app/page.tsx
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-black z-0" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            Showroom Shine, <br/> Every Time.
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
            Premier auto detailing services specializing in paint correction, ceramic coating, and deep interior cleaning.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/schedule" className="px-8 py-4 bg-blue-600 rounded-full font-semibold hover:bg-blue-500 transition-all">
              Schedule Appointment
            </Link>
            <Link href="/gallery" className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full font-semibold hover:bg-white/20 transition-all">
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Exterior Detail", price: "$150+", desc: "Hand wash, clay bar, wax, and tire dressing." },
            { title: "Interior Restoration", price: "$200+", desc: "Deep vacuum, leather conditioning, and steam cleaning." },
            { title: "Ceramic Coating", price: "$800+", desc: "Long-term paint protection and extreme gloss." },
          ].map((service, i) => (
            <div key={i} className="p-6 rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-blue-600 font-bold mb-4">{service.price}</p>
              <p className="text-gray-600 dark:text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}