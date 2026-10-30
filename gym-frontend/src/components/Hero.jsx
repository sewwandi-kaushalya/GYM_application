import { useState } from 'react'

 const slides = [
    {
      category: 'STRENGTH TRAINING',
      title: 'Build Your Strength',
      description: 'Train with purpose and make every rep count.',
      image:
        './images/hero1.jpg',
    },
    {
      category: 'PERSONAL TRAINING',
      title: 'Train With Experts',
      description: 'Get guidance and support from experienced trainers.',
      image:
        './images/hero2.jpg',
    },
    {
      category: 'FITNESS PROGRAMS',
      title: 'Move With Purpose',
      description: 'Find a workout program that fits your goals.',
      image:
        './images/hero3.jpg',
    },
  ]

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0)
  const getSlideIndex = (offset) =>
    (activeIndex + offset + slides.length) % slides.length
  const previousSlide = () => setActiveIndex(getSlideIndex(-1))
  const nextSlide = () => setActiveIndex(getSlideIndex(1))

  return (
    <section
      id="home"
      className="relative flex min-h-[650px] items-center overflow-hidden bg-neutral-950 text-white sm:min-h-[700px]"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('./images/Hero.jpg')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />

      {/* Decorative Accent */}
      <div className="absolute -right-20 top-20 h-72 w-72 rounded-full bg-lime-400/10 blur-3xl sm:h-96 sm:w-96" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:px-12">
        <div className="max-w-3xl">

          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 border border-lime-400/40 bg-lime-400/10 px-4 py-2">
            <span className="animate-pulse rounded-full text-lime-400">
            <i className="bi bi-fire" /> </span>
            <span className="text-xs font-medium tracking-[0.2em] text-lime-400 sm:text-sm">
              Next-Gen Fitness Experience
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl font-black uppercase leading-[1.05] tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
            Transform Your
            <br />
            Stay <span className="text-lime-400">Body</span><span>, Elevate</span>
            <br />
            Your Life
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-7 text-gray-300 sm:text-lg sm:leading-8">
            Empower your fitness journey with AI-driven meal planning, custom interval workout routines, certified elite trainers, and hyper-personalized tracking tools.
          </p>

          {/* Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a
              href="#membership"
              className="inline-flex items-center justify-center gap-3 bg-lime-400 px-7 py-3 font-bold uppercase tracking-wide text-black transition hover:bg-lime-300 rounded-lg"
            >
              Explore Programs
              <i className="bi bi-arrow-up-right text-lg" />
            </a>

            <a
              href="#programs"
              className="inline-flex items-center justify-center gap-3 border border-white/40 px-7 py-3 font-bold uppercase tracking-wide text-white transition hover:border-lime-400 hover:text-lime-400 rounded-lg"
            >
              Calculate BMI
              <i className="bi bi-calendar3" />
            </a>
          </div>

          {/* Statistics */}
          <div className="mt-10 grid max-w-xl grid-cols-3 gap-4 border-t border-white/20 pt-6 sm:gap-8">
            <div>
              <p className="text-2xl font-black sm:text-3xl">
                500<span className="text-lime-400">+</span>
              </p>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                Active Members
              </p>
            </div>

            <div>
              <p className="text-2xl font-black sm:text-3xl">
                15<span className="text-lime-400">+</span>
              </p>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                Expert Trainers
              </p>
            </div>

            <div>
              <p className="text-2xl font-black sm:text-3xl">
                20<span className="text-lime-400">+</span>
              </p>
              <p className="mt-2 text-xs text-gray-400 sm:text-sm">
                Programs
              </p>
            </div>
          </div>

        </div>
   
   {/* RIGHT SIDE - IMAGE SLIDER */}
        <div className="relative mx-auto w-full max-w-xl hidden lg:block">
          <div className="relative h-[420px] sm:h-[500px]">

            {/* PREVIOUS CARD */}
            <div
              className="absolute left-0 top-12 z-0 h-[330px] w-[65%] -rotate-6 overflow-hidden border border-lime-400/50 bg-neutral-900 opacity-60 transition-all duration-700 sm:top-14 sm:h-[390px]"
            >
              <img
                src={slides[getSlideIndex(-1)].image}
                alt={slides[getSlideIndex(-1)].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            {/* NEXT CARD */}
            <div
              className="absolute right-0 top-12 z-0 h-[330px] w-[65%] rotate-6 overflow-hidden border border-lime-400/50 bg-neutral-900 opacity-60 transition-all duration-700 sm:top-14 sm:h-[390px]"
            >
              <img
                src={slides[getSlideIndex(1)].image}
                alt={slides[getSlideIndex(1)].title}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
            </div>

            {/* ACTIVE CENTER CARD */}
            <div
              key={activeIndex}
              className="absolute left-1/2 top-0 z-10 h-[370px] w-[76%] -translate-x-1/2 overflow-hidden border border-lime-400/70 bg-neutral-900 shadow-2xl shadow-lime-400/10 transition-all duration-700 sm:h-[440px]"
            >
              <img
                src={slides[activeIndex].image}
                alt={slides[activeIndex].title}
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
                <p className="mb-3 text-xs font-bold tracking-[0.15em] text-lime-400 sm:text-sm">
                  <span className="mr-2">—</span>
                  {slides[activeIndex].category}
                </p>

                <h2 className="text-2xl font-black uppercase leading-tight sm:text-3xl">
                  {slides[activeIndex].title}
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-300">
                  {slides[activeIndex].description}
                </p>

                <a
                  href="#programs"
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold uppercase text-lime-400 transition hover:text-white"
                >
                  Discover More
                  <i className="bi bi-arrow-up-right" />
                </a>
              </div>
            </div>
          </div>

          {/* SLIDER CONTROLS */}
          <div className="mt-2 flex items-center justify-center gap-5">
            <button
              type="button"
              onClick={previousSlide}
              aria-label="Previous slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
            >
              <i className="bi bi-arrow-left text-lg" />
            </button>

            <div className="flex items-center gap-3">
              {slides.map((slide, index) => (
                <button
                  key={slide.category}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeIndex === index ? 'true' : undefined}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    activeIndex === index
                      ? 'w-8 bg-lime-400'
                      : 'w-2.5 bg-gray-600 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={nextSlide}
              aria-label="Next slide"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
            >
              <i className="bi bi-arrow-right text-lg" />
            </button>
          </div>

        </div>
      </div>

      {/* Side Label */}
      <div className="absolute bottom-10 right-6 hidden -rotate-90 origin-right text-xs font-bold uppercase tracking-[0.3em] text-white/50 lg:block">
        No Excuses. Just Results.
      </div>
    </section>
  )
}
