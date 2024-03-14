import React from "react";
import { Link } from "react-router-dom";

export default function ConversationsForm() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            What's on your mind?
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <form class="max-w-sm mx-auto w-full whitespace-normal">
                <label
                  for="problem"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Field of Interest:
                </label>
                <select
                  id="problem-area"
                  class="bg-gray-50 border border-gray-300 text-gray-800 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                >
                  <option value="" disabled selected>
                    Select an area you would like to discuss
                  </option>
                  <option value="Financial Problems">Financial</option>
                  <option value="Personal/Relationship Problems">
                    Personal/Relationship Problems
                  </option>
                  <option value="Work/School Problems">
                    Work/School Problems
                  </option>
                </select>
              </form>
            </div>

            <div>
              <label
                htmlFor="conversation-title"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                I would like to talk about:
              </label>
              <div className="mt-2">
                <input
                  id="conversation-title"
                  name="conversation-title"
                  type="text"
                  required
                  placeholder="  Topic of the discussion"
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="conversation-text"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                And some more details...
              </label>
              <div className="mt-2">
                <textarea
                  rows={4}
                  name="conversation-text"
                  id="conversation-text"
                  placeholder="  Your story goes here.."
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={""}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Find a Bench!
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
