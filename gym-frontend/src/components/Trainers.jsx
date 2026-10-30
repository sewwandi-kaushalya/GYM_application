import React from 'react'

const trainers = [
  {
    name: 'Alex Morgan',
    role: 'Strength Coach',
    experience: '8 YEARS EXPERIENCE',
    image:
      './public/images/strenght.jpg',
    specialty: 'Strength & Muscle Building',
  },
  {
    name: 'Sarah Williams',
    role: 'Fitness Coach',
    experience: '6 YEARS EXPERIENCE',
    image:
      './public/images/cordinator.jpg',
    specialty: 'Cardio & Conditioning',
  },
  {
    name: 'Daniel Carter',
    role: 'Personal Trainer',
    experience: '10 YEARS EXPERIENCE',
    image:
      './public/images/fitness.jpg',
    specialty: 'Personal Fitness Plans',
  },
];

export default function Trainers() {
  return (
    <section
      id="trainers"
      className="w-full overflow-hidden bg-neutral-900 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10 flex flex-col gap-5 md:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-lime-400 sm:text-sm">
              <span className="h-0.5 w-8 bg-lime-400 sm:w-10" />
              Meet The Team
            </p>

            <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl xl:text-6xl">
              Experts Who
              <span className="block text-lime-400">Push You Further.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
              Train with passionate fitness professionals who help you
              stay focused, build confidence, and work towards your goals.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 border border-white/20 px-5 py-3 text-xs font-bold uppercase transition hover:border-lime-400 hover:text-lime-400 sm:px-6 sm:py-4 sm:text-sm"
          >
            Meet Our Team
            <i className="bi bi-arrow-up-right text-lg" />
          </a>
        </div>

        {/* Trainer Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {trainers.map((trainer, index) => (
            <article
              key={trainer.name}
              className="group min-w-0 overflow-hidden border border-white/10 bg-neutral-950 transition duration-300 hover:border-lime-400/50"
            >
              {/* Trainer Image */}
              <div className="relative h-80 overflow-hidden sm:h-96">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-center transition duration-700 group-hover:scale-105"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-black/10" />

                <span className="absolute left-4 top-4 border border-white/20 bg-black/60 px-3 py-2 text-xs font-bold tracking-wider text-lime-400">
                  {trainer.experience}
                </span>

                <div className="absolute bottom-4 left-5 right-5">
                  <p className="text-xs font-bold uppercase tracking-widest text-lime-400">
                    {trainer.role}
                  </p>

                  <h3 className="mt-2 text-2xl font-black uppercase sm:text-3xl">
                    {trainer.name}
                  </h3>
                </div>
              </div>

              {/* Trainer Details */}
              <div className="flex items-center justify-between gap-4 p-5 sm:p-6">
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-gray-500">
                    Specialty
                  </p>

                  <p className="mt-2 break-words text-sm font-medium text-gray-300">
                    {trainer.specialty}
                  </p>
                </div>

                <a
                  href="#contact"
                  aria-label={`Contact ${trainer.name}`}
                  className="flex h-11 w-11 shrink-0 items-center justify-center border border-white/20 text-lg transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
                >
                  <i className="bi bi-arrow-up-right" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-10 flex flex-col gap-4 border border-white/10 bg-black/30 p-5 sm:p-7 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-lg font-bold sm:text-xl">
              Your goals. Our guidance.
            </h3>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Take the first step and find the right coach for your journey.
            </p>
          </div>

          <a
            href="#membership"
            className="inline-flex items-center justify-center gap-3 bg-lime-400 px-6 py-3 font-bold uppercase text-black transition hover:bg-lime-300 rounded-lg"
          >
            Start Training
            <i className="bi bi-arrow-right" />
          </a>
        </div>

      </div>
    </section>
  )
}
