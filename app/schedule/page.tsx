// app/schedule/page.tsx
'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { submitBooking } from '../actions'; // Import the server action

// Helper component to handle the loading state automatically
function SubmitButton() {
  const { pending } = useFormStatus();
  
  return (
    <button 
      disabled={pending}
      type="submit" 
      className="w-full p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-gray-500 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all"
    >
      {pending ? 'Submitting Request...' : 'Confirm Booking'}
    </button>
  );
}

export default function Schedule() {
  const [state, formAction] = useActionState(submitBooking, { success: false, message: '' });

  if (state.success) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="text-3xl font-bold text-green-500 mb-4">Success!</h2>
        <p className="text-gray-600 dark:text-gray-400 mb-8">{state.message}</p>
        <a href="/schedule" className="text-blue-600 hover:underline">
          Book another vehicle
        </a>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 pb-16">
      <h1 className="text-4xl font-bold mb-8 text-center">Book Your Detail</h1>
      
      {/* The action attribute points to our Server Action wrapper */}
      <form action={formAction} className="space-y-6 glass-panel p-8 md:p-10 rounded-3xl shadow-2xl backdrop-blur-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
            <input name="name" id="name" required type="text" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800" placeholder="John Doe" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
            <input name="email" id="email" required type="email" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800" placeholder="john@example.com" />
          </div>
        </div>

        <div>
          <label htmlFor="vehicle" className="block text-sm font-medium mb-2">Vehicle Make & Model</label>
          <input name="vehicle" id="vehicle" required type="text" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800" placeholder="e.g. 2023 Tesla Model Y" />
        </div>

        <div>
          <label htmlFor="servicePackage" className="block text-sm font-medium mb-2">Service Package</label>
          <select name="servicePackage" id="servicePackage" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800">
            <option value="Exterior Detail">Exterior Detail</option>
            <option value="Interior Detail">Interior Detail</option>
            <option value="Full Detail Package">Full Detail Package</option>
            <option value="Ceramic Coating">Ceramic Coating</option>
          </select>
        </div>

        <div>
          <label htmlFor="date" className="block text-sm font-medium mb-2">Preferred Date</label>
          <input name="date" id="date" required type="date" className="w-full p-3 rounded-lg border border-gray-300 dark:border-gray-700 dark:bg-gray-800" />
        </div>

        <SubmitButton />
      </form>
    </div>
  );
}