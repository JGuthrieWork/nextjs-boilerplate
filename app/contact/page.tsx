export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="text-4xl font-bold mb-12 text-center">Get in Touch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800">
          <h2 className="text-2xl font-semibold mb-4">Visit Us</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            1600 Pennsylvania Avenue NW<br />
            Washington, DC 20500
          </p>
          <h2 className="text-2xl font-semibold mb-4">Hours</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Mon-Fri: 8:00 AM - 6:00 PM<br />
            Sat: 9:00 AM - 4:00 PM<br />
            Sun: Closed
          </p>
        </div>
        <div className="bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 flex flex-col">
          <h2 className="text-2xl font-semibold mb-4">Contact Info</h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2">Phone: (555) 123-4567</p>
          <p className="text-gray-600 dark:text-gray-400 mb-6">Email: hello@sparkledetail.com</p>
          
          {/* Updated Map Section */}
          <div className="flex-grow min-h-[200px] w-full rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700 relative">
            <iframe 
              width="100%" 
              height="100%" 
              className="absolute inset-0"
              frameBorder="0" 
              title="map" 
              marginHeight={0} 
              marginWidth={0} 
              scrolling="no" 
              src="https://maps.google.com/maps?q=The+White+House, Washington DC&t=&z=15&ie=UTF8&iwloc=&output=embed"
              style={{ filter: "grayscale(0.5) opacity(0.9)" }}
            >
            </iframe>
          </div>
        </div>
      </div>
    </div>
  );
}