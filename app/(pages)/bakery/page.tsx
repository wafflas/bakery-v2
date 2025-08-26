import Navbar from '@/app/components/Navbar'
import Footer from '@/app/components/Footer'
import React from 'react'
import { Flame, Heart, Users, Sparkles } from 'lucide-react'
import Banner from '@/app/components/Banner'

const page = () => {


  const milestones = [
{ year: "1916", title: "Ίδρυση", text: "Ο Νικόλαος Κουγιουμουτζάκης ανοίγει τον πρώτο φούρνο.", img: "/images/1916.webp" },
{ year: "1954", title: "Δεύτερη γενιά", text: "Ο Ιάκωβος και ο Γιώργος συνεχίζουν και ο φούρνος γίνεται σημείο αναφοράς.", img: "/images/1954.webp" },
{ year: "1984", title: "Παράδοση & ανάπτυξη", text: "Γιάννης, Γιώργος και Σπύρος αναλαμβάνουν με μεράκι.", img: "/images/1984.webp" },
{ year: "Σήμερα", title: "4η γενιά", text: "Ιδέες και καινοτομίες στο εργαστήριο.", img: "/images/today.webp" },
];


const values = [
{ icon: Flame, title: "Υψηλή ποιότητα", text: "Καθαρές πρώτες ύλες, καθημερινή ζύμη." },
{ icon: Heart, title: "Αγάπη & φροντίδα", text: "Σεβασμός στην τέχνη του ψωμιού." },
{ icon: Users, title: "Κοινότητα", text: "Συνεργασία με τοπικούς παραγωγούς." },
{ icon: Sparkles, title: "Καινοτομία", text: "Νέες τεχνικές με παράδοση." },
];
  return (
    <div>
      <Navbar />
      <Banner
        title="Φούρνος"
        backgroundImage="/images/banners/topswmi.jpg"
        breadcrumbs="Φούρνος"
        objectPosition="object-[center_0%] lg:object-[center_51%] md:object-[center_40%]"
      />
      <section className="mx-auto max-w-6xl px-4 py-16">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">
            Ιστορία & Αποστολή
          </h2>
          <p className="mt-2 text-lg text-gray-600">
            Τέσσερις γενιές ζυμώνουμε με αγάπη και σεβασμό στην παράδοση της
            Ιεράπετρας.
          </p>
        </header>

        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {/* Timeline */}
          <ol className="space-y-6">
            {milestones.map((m) => (
              <li key={m.year} className="relative pl-6">
                <span
                  className="absolute left-0 top-1 h-3 w-3 rounded-full bg-gray-800"
                  aria-hidden
                />
                <time className="block text-sm font-medium text-gray-500">
                  {m.year}
                </time>
                <h3 className="text-xl font-semibold">{m.title}</h3>
                <p className="text-gray-700">{m.text}</p>
              </li>
            ))}
          </ol>

          {/* Feature image / team */}
          <div className="aspect-video w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm">
            {/* Replace with Next/Image */}
            <img
              src="/images/mizes2.jpg"
              alt="Ζύμωμα στο εργαστήριο"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>

        {/* Values */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-2xl border p-5 shadow-sm">
              <Icon className="h-6 w-6" aria-hidden />
              <h4 className="mt-3 text-lg font-semibold">{title}</h4>
              <p className="text-gray-700">{text}</p>
            </div>
          ))}
        </div>

        {/* CTA bar */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-amber-50 p-6">
          <p className="text-gray-800">
            Ψωμί ζεστό όλη μέρα — περάστε από το φούρνο μας.
          </p>
          <div className="flex gap-2">
            <a href="#hours" className="rounded-xl border px-4 py-2">
              Ώρες & Χάρτης
            </a>
            <a href="tel:+30xxxxxxxxxx" className="rounded-xl border px-4 py-2">
              Τηλέφωνο
            </a>
            <a
              href="#order"
              className="rounded-xl bg-gray-900 px-4 py-2 text-white"
            >
              Παραγγελία
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default page