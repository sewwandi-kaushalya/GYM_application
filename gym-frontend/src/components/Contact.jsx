import React from 'react'
const contactDetails = [
  {
    icon: 'bi-geo-alt',
    title: 'Our Location',
    detail: 'No. 25, Peradeniya Road, Kandy, Sri Lanka',
  },
  {
    icon: 'bi-telephone',
    title: 'Call Us',
    detail: '+94 77 123 4567',
  },
  {
    icon: 'bi-envelope',
    title: 'Email Us',
    detail: 'hello@pulsefit.lk',
  },
];
export default function Contact() {
    const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      'Thank you for contacting IRONCORE FITNESS! This is a demo form. Connect a backend to receive messages.'
    );
  };
  return (
    <section
      id="contact"
      className="w-full overflow-hidden bg-neutral-900 px-4 py-16 text-white sm:px-6 sm:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Contact Information */}
        <div className="min-w-0">
          <p className="mb-4 flex items-center gap-3 text-xs font-bold uppercase tracking-[0.18em] text-lime-400 sm:text-sm">
            <span className="h-0.5 w-8 bg-lime-400" />
            Get In Touch
          </p>

          <h2 className="text-3xl font-black uppercase leading-tight sm:text-4xl md:text-5xl">
            Start Your
            <span className="block text-lime-400">Fitness Journey.</span>
          </h2>

          <p className="mt-5 max-w-lg text-sm leading-7 text-gray-400 sm:text-base">
            Have questions about our programs or membership plans?
            Send us a message. We are here to help you take the next
            step towards your fitness goals.
          </p>

          <div className="mt-8 space-y-4">
            {contactDetails.map((item) => (
              <div
                key={item.title}
                className="flex min-w-0 items-start gap-4 border border-white/10 bg-neutral-950 p-4 transition hover:border-lime-400/50 sm:p-5"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center bg-lime-400 text-xl text-black">
                  <i className={`bi ${item.icon}`} />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-bold uppercase tracking-wide">
                    {item.title}
                  </h3>

                  <p className="mt-1 break-words text-sm leading-6 text-gray-400">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className="mt-8">
            <p className="mb-4 text-xs font-bold uppercase tracking-widest text-gray-400">
              Follow Our Journey
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-lg transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <i className="bi bi-facebook" />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-lg transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <i className="bi bi-instagram" />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-11 w-11 items-center justify-center border border-white/15 text-lg transition hover:border-lime-400 hover:bg-lime-400 hover:text-black"
              >
                <i className="bi bi-youtube" />
              </a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="min-w-0 border border-white/10 bg-neutral-950 p-5 sm:p-8 lg:p-10">
          <h3 className="text-xl font-black uppercase sm:text-2xl">
            Send Us A <span className="text-lime-400">Message</span>
          </h3>

          <p className="mt-3 text-sm leading-6 text-gray-400">
            Fill in the details below and let us know how we can help.
          </p>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300"
              >
                Full Name
              </label>

              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
                className="w-full min-w-0 border border-white/10 bg-neutral-900 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-400"
              />
            </div>

            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div className="min-w-0">
                <label
                  htmlFor="contact-email"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300"
                >
                  Email Address
                </label>

                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                  className="w-full min-w-0 border border-white/10 bg-neutral-900 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-400"
                />
              </div>

              <div className="min-w-0">
                <label
                  htmlFor="contact-phone"
                  className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300"
                >
                  Phone Number
                </label>

                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  placeholder="+94..."
                  autoComplete="tel"
                  className="w-full min-w-0 border border-white/10 bg-neutral-900 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-400"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300"
              >
                Subject
              </label>

              <select
                id="contact-subject"
                name="subject"
                required
                defaultValue=""
                className="w-full min-w-0 border border-white/10 bg-neutral-900 px-4 py-3.5 text-sm text-gray-300 outline-none transition focus:border-lime-400"
              >
                <option value="" disabled>
                  Select a subject
                </option>
                <option value="membership">Membership Plans</option>
                <option value="programs">Fitness Programs</option>
                <option value="personal-training">Personal Training</option>
                <option value="other">Other Inquiry</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-xs font-bold uppercase tracking-wider text-gray-300"
              >
                Your Message
              </label>

              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                required
                className="w-full min-w-0 resize-y border border-white/10 bg-neutral-900 px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-gray-600 focus:border-lime-400"
              />
            </div>

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-3 bg-lime-400 px-6 py-4 text-sm font-black uppercase tracking-wide text-black transition hover:bg-lime-300 focus:outline-none focus:ring-2 focus:ring-lime-400 focus:ring-offset-2 focus:ring-offset-neutral-950"
            >
              Send Message
              <i className="bi bi-arrow-right" />
            </button>

            <p className="text-center text-xs leading-5 text-gray-500">
              Demo form only. Messages are not sent to a server yet.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
