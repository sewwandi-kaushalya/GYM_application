const programs = [
  {
    number: '01',
    category: 'BUILD MUSCLE',
    title: 'Strength Training',
    description:
      'Build muscle, increase power, and develop your strength with focused weight training.',
    image:
      './images/hero3.jpg',
    icon: 'bi bi-lightning-charge',
  },
  {
    number: '02',
    category: 'IMPROVE ENDURANCE',
    title: 'Cardio Training',
    description:
      'Improve your stamina, support heart health, and keep your body moving.',
    image:
      './images/hero1.jpg',
    icon: 'bi bi-heart-pulse',
  },
  {
    number: '03',
    category: 'TRAIN WITH PURPOSE',
    title: 'Personal Training',
    description:
      'Get focused guidance and a workout plan designed around your fitness goals.',
    image:
      './images/hero2.jpg',
    icon: 'bi bi-person-arms-up',
  },
];

export default function Programs() {
  return (
    <section
      id="programs"
      className="w-full overflow-hidden bg-neutral-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:px-12"
    >
      <div className="mx-auto w-full max-w-7xl min-w-0">

        {/* Section Heading */}
        <div className="mb-10 flex flex-col items-start gap-6 md:mb-12 md:flex-row md:items-end md:justify-between lg:gap-8">
          <div className="min-w-0 max-w-2xl">
            <p className="mb-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase tracking-[0.16em] text-lime-400 sm:text-sm sm:tracking-[0.2em]">
              <span className="h-0.5 w-8 shrink-0 bg-lime-400 sm:w-10" />
              Find Your Training
            </p>

            <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl xl:text-6xl">
              Choose Your
              <span className="block text-lime-400">Program.</span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base sm:leading-7">
              Every goal needs the right plan. Find your training style
              and take the next step towards a stronger you.
            </p>
          </div>

          <a
            href="#membership"
            className="inline-flex max-w-full shrink-0 items-center justify-center gap-3 border border-white/20 px-4 py-3 text-xs font-bold uppercase transition hover:border-lime-400 hover:text-lime-400 sm:px-6 sm:py-4 sm:text-sm"
          >
            View Membership
            <i className="bi bi-arrow-up-right text-base sm:text-lg" />
          </a>
        </div>

        {/* Responsive Program Cards */}
        <div className="grid min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {programs.map((program) => (
            <article
              key={program.number}
              className="group flex min-w-0 flex-col overflow-hidden border border-white/10 bg-neutral-900 transition duration-300 hover:border-lime-400/60 sm:hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative h-56 shrink-0 overflow-hidden sm:h-64 lg:h-60 xl:h-72">
                <img
                  src={program.image}
                  alt={program.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-105 sm:group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-black/10 to-transparent" />

                <span className="absolute left-4 top-4 border border-white/30 bg-black/60 px-3 py-2 text-xs font-bold text-white sm:left-5 sm:top-5 sm:text-sm">
                  {program.number}
                </span>

                <span className="absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center bg-lime-400 text-lg text-black sm:bottom-5 sm:right-5 sm:h-12 sm:w-12 sm:text-xl rounded-lg">
                  <i className={program.icon} />
                </span>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 sm:p-6 lg:p-5 xl:p-7">
                <p className="text-[10px] font-bold tracking-[0.14em] text-lime-400 sm:text-xs sm:tracking-[0.18em]">
                  {program.category}
                </p>

                <h3 className="mt-3 break-words text-xl font-black uppercase leading-tight sm:text-2xl">
                  {program.title}
                </h3>

                <p className="mt-4 flex-1 text-sm leading-6 text-gray-400">
                  {program.description}
                </p>

                <a
                  href="#membership"
                  className="mt-6 inline-flex w-fit max-w-full items-center gap-2 border-t border-white/10 pt-5 text-xs font-bold uppercase transition hover:text-lime-400 sm:gap-3 sm:text-sm"
                >
                  Explore Program
                  <i className="bi bi-arrow-right transition-transform group-hover:translate-x-2" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 flex flex-col items-start gap-5 border border-lime-400/20 bg-lime-400/5 p-5 sm:mt-10 sm:p-6 md:flex-row md:items-center md:justify-between md:px-8 md:py-6">
          <div className="min-w-0">
            <p className="text-base font-bold sm:text-lg">
              Ready to push your limits?
            </p>
            <p className="mt-2 text-sm leading-6 text-gray-400">
              Your next level starts with your next workout.
            </p>
          </div>

          <a
            href="#membership"
            className="inline-flex w-full items-center justify-center gap-3 bg-lime-400 px-5 py-3 text-sm font-bold uppercase text-black transition hover:bg-lime-300 sm:w-auto sm:px-6 rounded-lg"
          >
            Get Started
            <i className="bi bi-arrow-right" />
          </a>
        </div>

      </div>
    </section>
  )
}
