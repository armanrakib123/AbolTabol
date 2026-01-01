import React from "react";
import { motion } from "framer-motion";
import { Stethoscope, Video, Calendar, ShieldCheck, Pill, Sparkles, ArrowRight, Star, PhoneCall, Globe, Menu } from "lucide-react";

// --- Mock data ---
const doctors = [
  { id: 1, name: "Dr. Ayesha Rahman", specialty: "General Physician", rating: 4.9, fee: 700, img: "https://images.unsplash.com/photo-1550831107-1553da8c8464?q=80&w=800&auto=format&fit=crop" },
  { id: 2, name: "Dr. Tanvir Hasan", specialty: "Dermatologist", rating: 4.8, fee: 900, img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?q=80&w=800&auto=format&fit=crop" },
  { id: 3, name: "Dr. Nafisa Alam", specialty: "Pediatrician", rating: 4.7, fee: 850, img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?q=80&w=800&auto=format&fit=crop" },
];

const testimonials = [
  { id: 1, name: "Sadia", text: "৫ মিনিটে ডাক্তার পেলাম, ভিডিও কলে প্রেসক্রিপশনও পেয়ে গেছি!", rating: 5 },
  { id: 2, name: "Zubair", text: "AI symptom checker খুব কাজে দিয়েছে। দ্রুত booking করতে পারলাম।", rating: 5 },
  { id: 3, name: "Mitu", text: "ডিজিটাল প্রেসক্রিপশন ও রিমাইন্ডার ফিচারটা অসাধারণ।", rating: 4.5 },
];

const navItems = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Doctors", href: "#doctors" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function HomePage() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 via-white to-white text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-100">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Stethoscope className="w-6 h-6 text-sky-600" />
            <span className="font-bold text-lg">VirtualDoc <span className="text-sky-600">AI</span></span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="text-sm font-medium text-slate-600 hover:text-slate-900">
                {n.label}
              </a>
            ))}
            <div className="flex items-center gap-3">
              <a href="/auth/sign-in" className="text-sm font-semibold text-slate-700">Log in</a>
              <a
                href="/auth/sign-up"
                className="inline-flex items-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold bg-sky-600 text-white shadow hover:bg-sky-700"
              >
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          <button onClick={() => setOpen((v) => !v)} className="md:hidden p-2 rounded-lg hover:bg-slate-100">
            <Menu className="w-6 h-6" />
          </button>
        </nav>
        {open && (
          <div className="md:hidden border-t border-slate-100 px-4 py-3 space-y-3">
            {navItems.map((n) => (
              <a key={n.label} href={n.href} className="block text-sm font-medium text-slate-700">
                {n.label}
              </a>
            ))}
            <div className="pt-2 flex items-center gap-3">
              <a href="/auth/sign-in" className="text-sm font-semibold">Log in</a>
              <a href="/auth/sign-up" className="inline-flex items-center gap-2 rounded-2xl px-3 py-2 text-sm font-semibold bg-sky-600 text-white">
                Get Started <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(40rem_40rem_at_120%_10%,#bae6fd,transparent_60%)]" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <span className="inline-flex items-center gap-2 text-xs font-semibold rounded-full px-3 py-1 bg-sky-50 text-sky-700 ring-1 ring-sky-200">
              <Sparkles className="w-3.5 h-3.5" /> AI‑Powered Telemedicine
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              See a doctor anytime, anywhere
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600">
              Book instant appointments, consult over secure video, get digital prescriptions, and use AI symptom checker to triage faster.
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a href="/appointments/new" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-sky-600 text-white shadow hover:bg-sky-700">
                Book Appointment <Calendar className="w-4 h-4" />
              </a>
              <a href="/auth/sign-up" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold border border-slate-300 text-slate-800 hover:bg-slate-50">
                Sign Up Free
              </a>
            </div>
            <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2"><ShieldCheck className="w-4 h-4" /> HIPAA-inspired privacy</div>
              <div className="flex items-center gap-2"><PhoneCall className="w-4 h-4" /> 24/7 access</div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-200">
              <img
                src="https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=1600&auto=format&fit=crop"
                alt="Virtual doctor video consultation"
                className="w-full h-[420px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white/90 backdrop-blur rounded-2xl shadow p-4 flex items-center gap-3 ring-1 ring-slate-200">
              <Video className="w-6 h-6 text-sky-600" />
              <div>
                <p className="text-sm font-semibold">Secure HD Video</p>
                <p className="text-xs text-slate-500">Encrypted end‑to‑end</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold">Everything you need to consult online</h2>
          <p className="mt-2 text-slate-600">From quick booking to AI triage and digital prescriptions—built for speed & safety.</p>
        </div>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <FeatureCard icon={<Calendar className="w-5 h-5" />} title="Instant Booking" desc="Find specialists, pick a slot, confirm in seconds." />
          <FeatureCard icon={<Video className="w-5 h-5" />} title="HD Video Call" desc="Stable WebRTC calls with chat & files." />
          <FeatureCard icon={<Pill className="w-5 h-5" />} title="e‑Prescription" desc="Doctor‑signed PDF saved to your account." />
          <FeatureCard icon={<ShieldCheck className="w-5 h-5" />} title="Secure by Design" desc="Auth, audit logs & encrypted storage." />
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">How it works</h2>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-6">
            <StepCard step="01" title="Sign up / Login" desc="Create an account with email, Google or phone OTP." />
            <StepCard step="02" title="Describe symptoms & book" desc="Use AI triage or pick a doctor & time slot." />
            <StepCard step="03" title="Video consult & get Rx" desc="Join the secure call, receive digital prescription." />
          </div>
        </div>
      </section>

      {/* DOCTOR SHOWCASE */}
      <section id="doctors" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-bold">Top Rated Doctors</h2>
            <p className="text-slate-600 mt-1">Verified experts ready to consult now</p>
          </div>
          <a href="/doctors" className="text-sky-700 font-semibold hover:underline">Browse all</a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((d) => (
            <DoctorCard key={d.id} d={d} />
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold">Patients love VirtualDoc</h2>
            <p className="mt-2 text-slate-600">Real stories from real users</p>
          </div>
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} t={t} />
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="rounded-3xl bg-gradient-to-r from-sky-600 to-blue-600 text-white p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <h3 className="text-2xl md:text-3xl font-bold">Ready to consult a doctor?</h3>
            <p className="text-white/90 mt-2">Create a free account and get started in minutes.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href="/auth/sign-up" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold bg-white text-sky-700 shadow">
              Sign Up Free <ArrowRight className="w-4 h-4" />
            </a>
            <a href="/auth/sign-in" className="inline-flex items-center gap-2 rounded-2xl px-5 py-3 text-sm font-semibold ring-2 ring-white/80">
              Log in
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <Stethoscope className="w-5 h-5 text-sky-600" />
              <span className="font-bold">VirtualDoc AI</span>
            </div>
            <p className="mt-3 text-sm text-slate-600">Telemedicine platform with AI triage, e‑prescriptions and secure video.</p>
          </div>
          <FooterCol title="Product" links={[{label:"Features",href:"#features"},{label:"Doctors",href:"/doctors"},{label:"Pricing",href:"/pricing"}]} />
          <FooterCol title="Company" links={[{label:"About",href:"#about"},{label:"Contact",href:"#contact"},{label:"Careers",href:"/careers"}]} />
          <FooterCol title="Legal" links={[{label:"Privacy",href:"/privacy"},{label:"Terms",href:"/terms"},{label:"Consent",href:"/consent"}]} />
        </div>
        <div className="border-t border-slate-100 py-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} VirtualDoc AI — All rights reserved.
        </div>
      </footer>
    </div>
  );
}

function FeatureCard({ icon, title, desc }: { icon: React.ReactNode; title: string; desc: string }) {
  return (
    <div className="rounded-2xl p-5 ring-1 ring-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow">
      <div className="w-10 h-10 rounded-xl bg-sky-50 text-sky-700 flex items-center justify-center mb-3">
        {icon}
      </div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-slate-600 mt-1">{desc}</p>
    </div>
  );
}

function StepCard({ step, title, desc }: { step: string; title: string; desc: string }) {
  return (
    <div className="rounded-2xl p-6 bg-white ring-1 ring-slate-200 shadow-sm">
      <div className="text-xs font-bold text-sky-700">STEP {step}</div>
      <h4 className="mt-1 font-semibold text-lg">{title}</h4>
      <p className="text-sm text-slate-600 mt-1">{desc}</p>
    </div>
  );
}

function DoctorCard({ d }: { d: { id: number; name: string; specialty: string; rating: number; fee: number; img: string } }) {
  return (
    <div className="rounded-2xl overflow-hidden ring-1 ring-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow flex flex-col">
      <img src={d.img} alt={d.name} className="h-44 w-full object-cover" />
      <div className="p-4 flex-1 flex flex-col">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-semibold">{d.name}</h3>
            <p className="text-sm text-slate-600">{d.specialty}</p>
          </div>
          <div className="flex items-center gap-1 text-amber-500">
            <Star className="w-4 h-4" /><span className="text-sm font-medium">{d.rating}</span>
          </div>
        </div>
        <div className="mt-3 text-sm text-slate-600">Fee: ৳{d.fee}</div>
        <div className="mt-4 flex items-center gap-3">
          <a href={`/appointments/new?doctor=${d.id}`} className="inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-semibold bg-sky-600 text-white">
            Book Now
          </a>
          <a href={`/doctors/${d.id}`} className="text-sm font-semibold text-sky-700">View Profile</a>
        </div>
      </div>
    </div>
  );
}

function TestimonialCard({ t }: { t: { id: number; name: string; text: string; rating: number } }) {
  return (
    <div className="rounded-2xl p-6 bg-white ring-1 ring-slate-200 shadow-sm">
      <div className="flex items-center gap-1 text-amber-500">
        {Array.from({ length: Math.floor(t.rating) }).map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-amber-500" />
        ))}
      </div>
      <p className="mt-3 text-slate-700">“{t.text}”</p>
      <div className="mt-4 text-sm font-semibold">— {t.name}</div>
    </div>
  );
}

function FooterCol({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="font-semibold">{title}</h4>
      <ul className="mt-3 space-y-2 text-sm text-slate-600">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="hover:text-slate-900">{l.label}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
