import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { PlusIcon } from '@heroicons/react/20/solid'
import { Link, useLocation } from 'react-router-dom';
import AuthService from '../../utils/auth';
import './Navbar.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

function Nav() {

  // Get the current location using the useLocation hook
  const location = useLocation();

  // Check if the user is logged in
  const isLoggedIn = AuthService.loggedIn();

  // Handle logout
  const handleLogout = () => {
    AuthService.logout();
    window.relocate("/")
  };

  // Determine the active page based on the current location
  const activePage = location.pathname;


  return (
    <Disclosure as="nav" className="nav-container bg-white shadow">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
            <div className="flex h-16 justify-between">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-shrink-0 items-center">
                  <Link to="/" className="h-8 w-auto" style={{ width: '102px', height: '98%', cursor: 'pointer' }}>
                    <img
                    className="h-8 w-auto"
                    src="https://res.cloudinary.com/dqtpaispt/image/upload/v1711078979/app-logo_yn0hqw.png"
                    alt="Soul Bench logo -- coloured drawing of a brown bench on a hill beside a lamp post in the shape of a conversation bubble"
                    style={{ width: '102px', height: '98%', cursor: 'pointer' }}
                    />
                  </Link>
                </div>
                <div className="hidden md:ml-6 md:flex md:space-x-8">
                  {isLoggedIn ? (
                    <>
                      <Link to="/my-bench"
                      id="my-bench-button"
                      className={classNames(
                        'nav-links inline-flex items-center edu-nsw',
                        activePage === '/my-bench' ? 'active' : ''
                      )}
                      >
                        My Bench
                      </Link>
                      <Link
                      to="/"
                      id="logout-button"
                      onClick={handleLogout}
                      className={classNames(
                        'nav-links inline-flex items-center edu-nsw',
                        activePage === '/login' ? 'active' : ''
                      )}
                    >
                      Logout
                    </Link>
                    </>
                  ) : (
                    <Link
                      to="/login"
                      id="login-button"
                      className={classNames(
                        'nav-links inline-flex items-center edu-nsw',
                        activePage === '/login' ? 'active' : ''
                      )}
                    >
                      Login
                    </Link>
                  )}
                  <Link
                    to="/resources"
                    id="resources-button"
                    className={classNames(
                      'nav-links inline-flex items-center edu-nsw',
                      activePage === '/resources' ? 'active' : ''
                    )}
                  >
                    Resources
                  </Link>
                </div>
              </div>
              </div>
              </div>
              <div className="flex items-center">
            </div>

          <Disclosure.Panel className="md:hidden">
            <div className="flex flex-col justify-center items-center space-y-1 pb-3 pt-2">
              <Disclosure.Button
                as="a"
                href="#"
                className="nav-links sm:pl-5 sm:pr-6"
              >
                My Bench
              </Disclosure.Button>
              {isLoggedIn ? (
                <button onClick={handleLogout} className="nav-links block bg-transparent mr-10 sm:pl-5 sm:pr-6 edu-nsw">
                  Logout 
                </button>
              ) : (
                <Link to="/login" className="nav-links block sm:p-5 sm:pr-6">
                  Login
                </Link>
              )}
              <Disclosure.Button
                as="a"
                href="#"
                className="nav-links block p-1 sm:pl-5 sm: pr-6"
              >
                Resources
              </Disclosure.Button>
            </div>
            <div className="nav-links block sm:pl-5 sm:pr-6">
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}



export default Nav;