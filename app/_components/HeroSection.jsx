import React from 'react'

function HeroSection() {
  return (
    <div>
      <div className="bg-primary px-4 py-3 text-white">
  <p className="text-center text-sm font-medium">
  Take your interview preparation to next level...
  </p>
</div>
<section
  className="mt-0 my-0 relative bg-[url(https://i.ibb.co/7bFN4Mc/online-learning-concept.png&w)] bg-auto bg-right bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold text-gray-400  sm:text-5xl">
        Ace your Interview Preparation

        <strong className="block font-extrabold text-primary">with MockBot Interview</strong>
      </h1>

      <p className="mt-4 max-w-lg text-primary sm:text-xl/relaxed">
      Your AI partner in perfecting interviews.
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-primary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto hover:scale-110 transition-all"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-primary shadow hover:text-primary focus:outline-none focus:ring active:primary sm:w-auto hover:scale-110 transition-all  "
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</section>
    </div>
  )
}

export default HeroSection