import React from 'react'

const plans = [
  {
    name: 'Basic',
    price: '5,000',
    description: 'A great start for your fitness journey.',
    features: [
      'Gym Access',
      'Basic Workout Equipment',
      'Locker Room Access',
      'General Fitness Support',
    ],
    popular: false,
  },
  {
    name: 'Pro',
    price: '8,500',
    description: 'For those ready to push their limits.',
    features: [
      'Everything in Basic',
      'Group Fitness Classes',
      'Personal Workout Plan',
      'Progress Tracking',
      'Priority Equipment Access',
    ],
    popular: true,
  },
  {
    name: 'Elite',
    price: '12,500',
    description: 'A premium, personalized experience.',
    features: [
      'Everything in Pro',
      'Personal Training Sessions',
      'Nutrition Guidance',
      'Monthly Fitness Assessment',
      'Priority Trainer Support',
    ],
    popular: false,
  },
];

export default function Membership() {
  return (
    <section
      id="membership"
      className="w-full overflow-hidden bg-neutral-950 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24 xl:px-12"
    >
      <div className="mx-auto w-full max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <p className="mb-4 flex items-center justify-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-lime-400 sm:text-sm">
            <span className="h-0.5 w-8 bg-lime-400" />
            Membership Plans
            <span className="h-0.5 w-8 bg-lime-400" />
          </p>

          <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
            Invest In
            <span className="block text-lime-400">Your Strength.</span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-400 sm:text-base sm:leading-7">
            Choose a plan that fits your goals. Start where you are
            and build towards the strongest version of yourself.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-7">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex min-w-0 flex-col border p-6 transition duration-300 hover:-translate-y-1 sm:p-8 ${
                plan.popular
                  ? 'border-lime-400 bg-lime-400/[0.06] shadow-xl shadow-lime-400/5'
                  : 'border-white/10 bg-neutral-900 hover:border-white/30'
              }`}
            >
              {plan.popular && (
                <span className="absolute right-4 top-4 bg-lime-400 px-3 py-2 text-[10px] font-black uppercase tracking-wider text-black sm:right-6 sm:top-6 sm:text-xs">
                  Most Popular
                </span>
              )}

              <p className="text-sm font-bold uppercase tracking-[0.2em] text-lime-400">
                {plan.name} Plan
              </p>

              <p className="mt-4 max-w-xs text-sm leading-6 text-gray-400">
                {plan.description}
              </p>

              <div className="mt-7 flex flex-wrap items-baseline gap-2">
                <span className="text-sm font-bold text-gray-400">LKR</span>
                <span className="text-4xl font-black sm:text-5xl">
                  {plan.price}
                </span>
                <span className="text-sm text-gray-500">/ month</span>
              </div>

              <div className="my-7 border-t border-white/10" />

              <p className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-300">
                What's Included
              </p>

              <ul className="flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-sm leading-5 text-gray-300"
                  >
                    <i className="bi bi-check-circle-fill mt-0.5 shrink-0 text-lime-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`mt-8 inline-flex w-full items-center justify-center gap-3 px-5 py-4 text-sm font-bold uppercase transition ${
                  plan.popular
                    ? 'bg-lime-400 text-black hover:bg-lime-300'
                    : 'border border-white/20 text-white hover:border-lime-400 hover:text-lime-400'
                }`}
              >
                Choose {plan.name}
                <i className="bi bi-arrow-right" />
              </a>
            </article>
          ))}
        </div>

        {/* Note */}
        <p className="mt-8 text-center text-xs leading-5 text-gray-500">
          Membership prices and benefits are sample content and can be
          adjusted to match your gym's actual offerings.
        </p>

      </div>
    </section>
  )
}
