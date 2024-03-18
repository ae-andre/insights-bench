import { useQuery } from '@apollo/client';
import { Link, useParams } from "react-router-dom";

import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import {
  CodeBracketIcon,
  EllipsisVerticalIcon,
  FlagIcon,
  StarIcon,
} from "@heroicons/react/20/solid";

import Auth from '../utils/auth';
import { GET_USER_BY_ID } from '../utils/queries';


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const items = [
  { id: 1 },
  // More items...
];

const Bench = () => {
  // const { _id: userParam } = useParams()

  const testUser = "65f7c7286342369c28dfe964"

  const { loading, data } = useQuery(GET_USER_BY_ID, {
    variables: { userId: testUser }
  })

  const user = data?.user || {};

  console.log(user)

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ul role="list" className="flex-col w-96 m-auto mt-10 place-content-center space-y-3">
      <div className="border-b border-gray-200 bg-white px-4 py-5 sm:px-6">
        <h3 className="text-2xl font-semibold leading-6 text-gray-900">
          Welcome {`${user.username}`}!
        </h3>
        <h3 className="text-base my-2 font-semibold leading-6 text-gray-900">
          Here is your bench
        </h3>
      </div>
      {items.map((item) => (
        <li
          key={item.id}
          className="overflow-hidden rounded-md bg-white px-6 py-4 shadow"
        >
          {/* Your content */}
          <Link to="/Conversation">
            <div className="bg-white px-4 py-5 sm:px-6 rounded">
              <div className="flex space-x-3 ">
                <div className="flex-shrink-0">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                    alt=""
                  />
                </div>
                <div className="min-w-0 flex-1 ">
                  <p className="text-sm font-semibold text-gray-900">
                    {/* Bereavement Advice */}
                    {user.conversation ? user.conversation.conversationTitle : "No Conversation Title"}
                  </p>

                  <p className="text-sm text-gray-500">
                    Conversation with agnostic elephant
                    {/* Conversation with {`$user.buddy`} */}
                  </p>
                </div>
                <div className="flex flex-shrink-0 self-center">
                  <Menu as="div" className="relative inline-block text-left">
                    <div>
                      <Menu.Button className="-m-2 flex items-center rounded-full p-2 text-gray-400 hover:text-gray-600">
                        <span className="sr-only">Open options</span>
                        <EllipsisVerticalIcon
                          className="h-5 w-5"
                          aria-hidden="true"
                        />
                      </Menu.Button>
                    </div>

                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "flex px-4 py-2 text-sm"
                                )}
                              >
                                <StarIcon
                                  className="mr-3 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span>Add to favorites</span>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "flex px-4 py-2 text-sm"
                                )}
                              >
                                <CodeBracketIcon
                                  className="mr-3 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span>Embed</span>
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="#"
                                className={classNames(
                                  active
                                    ? "bg-gray-100 text-gray-900"
                                    : "text-gray-700",
                                  "flex px-4 py-2 text-sm"
                                )}
                              >
                                <FlagIcon
                                  className="mr-3 h-5 w-5 text-gray-400"
                                  aria-hidden="true"
                                />
                                <span>Report content</span>
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>
          </Link>{" "}
        </li>
      ))}
    </ul>
  );
}

export default Bench;