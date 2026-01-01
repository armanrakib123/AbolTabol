import MY_bookings_Table from '@/Components/MY_Bookings/MY_bookings_Table';
import { headers } from 'next/headers';

const fetchMyBookings = async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/doctor`,{
        headers: new Headers(await headers()),
      });
      const d = await res.json();
      return d;
    };

export default async function My_Booking_Page() {
  const data = await fetchMyBookings();

  return (
    <div className='mt-28'>
      <MY_bookings_Table data={data}></MY_bookings_Table>
    </div>
  )
}