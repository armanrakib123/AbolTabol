"use client";
import { useRouter } from 'next/navigation';
import React from 'react'
import { MdDelete } from 'react-icons/md'

export default function DeleteBooking({id}) {
    const router = useRouter();
    const handleDelete = async (id) => {
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_BASE_URL}/api/doctor/${id}`,
            {
                method: "DELETE",
            }
        );
        const data = await res.json();
        console.log(data);
        router.refresh();
    };
    return (
        <div>
            <MdDelete onClick={() => handleDelete(id)} className="h-8 w-8 font-bold"></MdDelete>
        </div>
    )
}
