import { WORK, CONTACT } from './routeConstants'
import { Fragment } from 'react';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';
// import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'work', Link: WORK, current: true },
  // { name: 'book', href: BOOK, current: false },
  { name: 'contact', href: CONTACT, current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Nav = () => {
  return (
    <Disclosure as="nav" className="bg-white-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl h-16">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <Disclosure.Button className="flex flex-col inline-flex items-center justify-center rounded-md p-2 text-gray-400 bg-transparent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    <h2 class="text-lg font-bold text-gray-900 aria-hidden=true sm:hidden">
                      menu
                    </h2>
                  </Disclosure.Button>
                </div>
                <div className="hidden sm:ml-6 sm:flex justify-between align-center w-full">
                  <div className="flex space-x-4 justify-between align-center py-6">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.name}
                        className={classNames(
                          item.current
                            ? 'text-yellow-500'
                            : 'text-black-300 hover:text-yellow-500',
                          'px-3 py-2 rounded-md text-sm font-medium h-10 '
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                  <h1 className="my-8 text-xl">
                    <Link to={'/'} className={classNames('text-black')}>
                      Matthew Anderson
                    </Link>
                  </h1>
                </div>
              </div>

              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="relative ml-3">
                  <div></div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">

                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="!#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Settings
                          </a>
                        )}
                      </Menu.Item>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href="!#"
                            className={classNames(
                              active ? 'bg-gray-100' : '',
                              'block px-4 py-2 text-sm text-gray-700'
                            )}
                          >
                            Sign out
                          </a>
                        )}
                      </Menu.Item>
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3 flex flex-col">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.name}
                  className={classNames(
                    item.current
                      ? 'text-yellow-500 w-24'
                      : 'text-black-300 hover:text-yellow-500',
                    'px-3 py-2 rounded-md text-lg font-medium h-10 mx-auto'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>

          <h1 className="sm:hidden my-8 text-2xl">
            <a href={'/'} className={classNames('text-black')}>
              Matthew Anderson
            </a>
          </h1>
        </>
      )}
    </Disclosure>
  );
};
export default Nav;
