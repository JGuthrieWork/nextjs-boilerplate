// app/actions.ts
'use server';

// This directive is crucial. It tells Next.js this function runs on the server.

export async function submitBooking(prevState: any, formData: FormData) {
  // 1. Extract the data
  const booking = {
    name: formData.get('name'),
    email: formData.get('email'),
    vehicle: formData.get('vehicle'),
    servicePackage: formData.get('servicePackage'),
    date: formData.get('date'),
  };

  console.log('Server received booking:', booking);

  // 2. Simulate a database/email delay (Remove this in production)
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // 3. TODO: Integrate Real Email Sending
  // To make this truly "live", you would install an SDK like 'resend' here.
  // Example:
  // await resend.emails.send({
  //   from: 'Sparkle Detail <onboarding@resend.dev>',
  //   to: 'your-email@gmail.com',
  //   subject: 'New Booking Request',
  //   text: `New booking from ${booking.name} for a ${booking.vehicle}.`
  // });

  // 4. Return state to the client
  return { 
    success: true, 
    message: 'Booking received! We will contact you shortly.' 
  };
}