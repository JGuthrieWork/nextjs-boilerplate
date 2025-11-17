// app/schedule/page.tsx
'use client';

import { useState } from 'react';

export default function Schedule() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');
    // Simulate network request
    setTimeout(() => setStatus('success'), 1500);
  }

  if (status === 'success') {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-4">Appointment Requested!</h2>
        <p className="text-gray-600 dark:text-gray-400">We will contact you shortly to confirm your slot.</p>
        <button 
          onClick={() => setStatus('idle')}
          className="mt-8 text-blue-600 hover:underline"
        >
          Book another vehicle
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Book Your Detail</h1>
      <form onSubmit={handleSubmit} className="space-y-6 bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 shadow-sm">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input required type="text" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800" placeholder="John Doe" />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Email</label>
            <input required type="email" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800" placeholder="john@example.com" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Vehicle Make & Model</label>
          <input required type="text" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800" placeholder="e.g. 2023 Tesla Model Y" />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Service Package</label>
          <select className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800">
            <option>Exterior Detail</option>
            <option>Interior Detail</option>
            <option>Full Detail Package</option>
            <option>Ceramic Coating</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Preferred Date</label>
          <input required type="date" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800" />
        </div>

        <button 
          disabled={status === 'submitting'}
          type="submit" 
          className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-all disabled:opacity-50"
        >
          {status === 'submitting' ? 'Processing...' : 'Confirm Booking'}
        </button>
      </form>
    </div>
  );
}