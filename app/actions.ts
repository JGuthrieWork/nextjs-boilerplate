'use server';

import { Resend } from 'resend'; // Import is missing

// Initialize the client
const resend = new Resend(process.env.RESEND_API_KEY);

export async function submitBooking(prevState: any, formData: FormData) {
  const booking = {
    name: formData.get('name'),
    email: formData.get('email'),
    vehicle: formData.get('vehicle'),
    servicePackage: formData.get('servicePackage'),
    date: formData.get('date'),
  };

  console.log('Server received booking:', booking);

  try {
    await resend.emails.send({
      from: 'Sparkle Detail <jguthriewrk@gmail.com>',
      to: 'jguthriewrk@gmail.com',
      subject: 'New Booking Request',
      text: `New booking from ${booking.name} (\n${booking.email}) for a ${booking.vehicle}.\nService: ${booking.servicePackage}\nDate: ${booking.date}`
    });

    return { 
      success: true, 
      message: 'Booking received! We will contact you shortly.' 
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: 'Failed to send booking request. Please try again.'
    };
  }
}