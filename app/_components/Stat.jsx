import React from 'react'

function Stat() {
  return (
    <div>
        <section className="bg-white">
  <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="text-3xl font-bold text-primary sm:text-4xl">Trusted AI Mocker Interview App</h2>

      <p className="mt-4 text-gray-500 sm:text-xl">
      Trusted by working professionals and students worldwide to master the art of cracking interviews.
      </p>
    </div>

    <div className="mt-8 sm:mt-12">
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Total Interviews</dt>

          <dd className="text-4xl font-extrabold text-primary md:text-5xl">1000+</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">College Participant</dt>

          <dd className="text-4xl font-extrabold text-primary md:text-5xl">20+</dd>
        </div>

        <div className="flex flex-col rounded-lg border border-gray-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-gray-500">Selected</dt>

          <dd className="text-4xl font-extrabold text-primary md:text-5xl">200+</dd>
        </div>
      </dl>
    </div>
  </div>
</section>
    </div>
  )
}

export default Stat