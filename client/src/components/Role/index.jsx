import React from 'react';

export default function Example() {
    return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 items-center">
      <div className="bg-white shadow sm:rounded-lg">
        <div className="px-4 py-5 sm:p-6 text-center">
          <h3 className="text-base font-semibold leading-6 text-gray-900">Choose a seat on the bench!</h3>
          <div className="mt-2 text-sm text-gray-500 text-center">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae
              nam.
            </p>
          </div>
          <div className="mt-5">
            <button
              type="button"
              className="inline-flex mx-6 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Listener
            </button>
            <button
              type="button"
              className="inline-flex mx-6 items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Sharer
            </button>
          </div>
        </div>
      </div>
    </div>
    )
  }