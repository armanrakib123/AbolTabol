"use client";
import React, { useState } from 'react'
import {
  User,
  Calendar,
  Stethoscope,
  CreditCard,
  Star,
  LogOut,
  Menu
} from 'lucide-react'

const NAV_ITEMS = [
  { id: 'profile', label: 'My Profile', icon: User },
  { id: 'appointments', label: 'My Appointments', icon: Calendar },
  { id: 'specialists', label: 'My Specialists', icon: Stethoscope },
  { id: 'payments', label: 'My Payments', icon: CreditCard },
  { id: 'reviews', label: 'Reviews', icon: Star },
  { id: 'logout', label: 'Log out', icon: LogOut }
]

export default function PatientDashboard() {
  const [active, setActive] = useState('profile')
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-50 via-white to-indigo-100">
      <div className="mx-auto p-4">
        <header className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-semibold text-indigo-700">Patient Dashboard</h1>
          <button
            className="md:hidden p-2 rounded-md bg-white shadow"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            <Menu className="w-6 h-auto text-indigo-600" />
          </button>
        </header>

        <div className="flex gap-6">
          {/* Sidebar */}
          <aside
            className={`bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-4 w-72 transition-all duration-300 ${
              mobileOpen ? 'block' : 'hidden md:block'
            }`}
          >
            <nav className="space-y-2">
              {NAV_ITEMS.map((item) => {
                const Icon = item.icon
                const isActive = active === item.id
                const itemClasses = `flex items-center gap-3 px-4 py-2 rounded-xl cursor-pointer font-medium text-sm transition-all ${
                  isActive
                    ? 'bg-gradient-to-r from-indigo-600 to-blue-500 text-white shadow-md'
                    : 'text-slate-700 hover:bg-indigo-50'
                }`
                return (
                  <div
                    key={item.id}
                    className={itemClasses}
                    onClick={() => {
                      if (item.id === 'logout') {
                        alert('Logged out (placeholder)')
                      } else {
                        setActive(item.id)
                        setMobileOpen(false)
                      }
                    }}
                  >
                    <Icon className={`w-5 h-auto ${isActive ? 'text-white' : 'text-indigo-500'}`} />
                    <span>{item.label}</span>
                  </div>
                )
              })}
            </nav>

            {/* <div className="border-t mt-4 pt-3 text-xs text-slate-500 text-center">
              Version 1.0 • Synced: {new Date().toLocaleString()}
            </div> */}

          </aside>


          <main className="flex-1">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg p-6 min-h-[60vh]">
              <SectionRenderer active={active} />
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}

function SectionRenderer({ active }) {
  switch (active) {
    case 'profile':
      return <ProfileSection />
    case 'appointments':
      return <AppointmentsSection />
    case 'specialists':
      return <SpecialistsSection />
    case 'payments':
      return <PaymentsSection />
    case 'reviews':
      return <ReviewsSection />
    default:
      return <div>Select a section</div>
  }
}

// ---------------- Sections -----------------

function ProfileSection() {
  return (
    <div >
      <h2 className="text-xl font-semibold text-indigo-700 mb-4">My Profile</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm text-slate-600">Name</label>
          <input className="w-full border rounded-lg p-2" defaultValue="Rafi Ahmed" />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-600">Age</label>
          <input className="w-full border rounded-lg p-2" defaultValue="28" />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-600">Gender</label>
          <input className="w-full border rounded-lg p-2" defaultValue="Male" />
        </div>
        <div className="space-y-2">
          <label className="text-sm text-slate-600">Blood Group</label>
          <input className="w-full border rounded-lg p-2" defaultValue="B+" />
        </div>
      </div>
      <div className="mt-4">
        <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition">
          Save Profile
        </button>
      </div>
    </div>
  )
}

function AppointmentsSection() {
  const appointments = [
    { id: 1, doctor: 'Dr. Jane Doe', date: '2025-11-12 10:00', status: 'Upcoming' },
    { id: 2, doctor: 'Dr. Hasan Ali', date: '2025-10-25 09:30', status: 'Completed' }
  ]

  return (
    <div>
      <h2 className="text-xl font-semibold text-indigo-700 mb-4">My Appointments</h2>
      <div className="space-y-3">
        {appointments.map((a) => (
          <div
            key={a.id}
            className="p-4 border rounded-xl bg-gradient-to-r from-white to-indigo-50 flex justify-between items-center"
          >
            <div>
              <div className="font-medium text-slate-800">{a.doctor}</div>
              <div className="text-sm text-slate-500">{a.date}</div>
            </div>
            <div
              className={`text-sm px-3 py-1 rounded-full ${
                a.status === 'Upcoming' ? 'bg-green-100 text-green-700' : 'bg-slate-100 text-slate-600'
              }`}
            >
              {a.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SpecialistsSection() {
  const doctors = [
    { id: 1, name: 'Dr. Jane Doe', specialty: 'Cardiologist', rating: 5 },
    { id: 2, name: 'Dr. Kamal Hossain', specialty: 'Dermatologist', rating: 4 }
  ]
  return (
    <div>
      <h2 className="text-xl font-semibold text-indigo-700 mb-4">My Specialists</h2>
      <div className="grid gap-3">
        {doctors.map((d) => (
          <div key={d.id} className="p-4 border rounded-xl flex justify-between bg-gradient-to-r from-blue-50 to-indigo-50">
            <div>
              <div className="font-medium">{d.name}</div>
              <div className="text-sm text-slate-500">{d.specialty}</div>
            </div>
            <div className="text-yellow-500 text-sm">
              {'★'.repeat(d.rating)}{'☆'.repeat(5 - d.rating)}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function PaymentsSection() {
  return (
    <div>
      <h2 className="text-xl font-semibold text-indigo-700 mb-4">My Payments</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
        <div className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-xl border">
          <p className="text-slate-600 text-sm">Last Payment</p>
          <p className="text-xl font-semibold text-green-700">৳2,000</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl border">
          <p className="text-slate-600 text-sm">This Month</p>
          <p className="text-xl font-semibold text-blue-700">৳8,000</p>
        </div>
        <div className="p-4 bg-gradient-to-br from-indigo-50 to-indigo-100 rounded-xl border">
          <p className="text-slate-600 text-sm">Total Paid</p>
          <p className="text-xl font-semibold text-indigo-700">৳65,000</p>
        </div>
      </div>
    </div>
  )
}

function ReviewsSection() {
  const reviews = [
    { id: 1, doctor: 'Dr. Jane Doe', rating: 5, comment: 'Very kind and patient.' },
    { id: 2, doctor: 'Dr. Hasan Ali', rating: 4, comment: 'Helpful advice.' }
  ]
  return (
    <div>
      <h2 className="text-xl font-semibold text-indigo-700 mb-4">Reviews</h2>
      <div className="space-y-3">
        {reviews.map((r) => (
          <div key={r.id} className="p-4 border rounded-xl bg-white shadow-sm">
            <div className="flex justify-between items-center mb-1">
              <div className="font-medium">{r.doctor}</div>
              <div className="text-yellow-500">{'★'.repeat(r.rating)}</div>
            </div>
            <div className="text-slate-600 text-sm">{r.comment}</div>
          </div>
        ))}
      </div>
    </div>
  )
}
