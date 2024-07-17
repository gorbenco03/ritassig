import React, { useState, Fragment, ReactNode } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XMarkIcon, Bars3CenterLeftIcon } from '@heroicons/react/24/outline';
import { HomeIcon, DocumentChartBarIcon, CogIcon } from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Home', href: '/dashboard', icon: HomeIcon },
  { name: 'Reports', href: '/reports', icon: DocumentChartBarIcon },
];

const secondaryNavigation = [{ name: 'Settings', href: '#', icon: CogIcon }];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}

interface LayoutProps {
  current: string;
  children: ReactNode;  // Add this line to include children prop
}

const Layout: React.FC<LayoutProps> = ({ children, current }) => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-full">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog as="div" className="relative z-40 lg:hidden" onClose={setSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>

          <div className="fixed inset-0 z-40 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative flex w-full max-w-xs flex-1 flex-col bg-cyan-700 pb-4 pt-5">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute right-0 top-0 -mr-12 pt-2">
                    <button
                      type="button"
                      className="relative ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6 text-white" aria-hidden="true" />
                    </button>
                  </div>
                </Transition.Child>
                <nav className="mt-5 h-full flex-shrink-0 divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
                  <div className="space-y-1 px-2">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.name === current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:bg-cyan-600 hover:text-white',
                          'group flex items-center rounded-md px-2 py-2 text-base font-medium'
                        )}
                      >
                        <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 pt-6">
                    <div className="space-y-1 px-2">
                      {secondaryNavigation.map((item) => (
                        <a
                          key={item.name}
                          href={item.href}
                          className="group flex items-center rounded-md px-2 py-2 text-base font-medium text-cyan-100 hover:bg-cyan-600 hover:text-white"
                        >
                          <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                          {item.name}
                        </a>
                      ))}
                    </div>
                  </div>
                </nav>
              </Dialog.Panel>
            </Transition.Child>
            <div className="w-14 flex-shrink-0" aria-hidden="true"></div>
          </div>
        </Dialog>
      </Transition.Root>

      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto bg-cyan-700 pb-4 pt-5">
          <nav className="mt-5 flex flex-1 flex-col divide-y divide-cyan-800 overflow-y-auto" aria-label="Sidebar">
            <div className="space-y-1 px-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.name === current ? 'bg-cyan-800 text-white' : 'text-cyan-100 hover:bg-cyan-600 hover:text-white',
                    'group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6'
                  )}
                >
                  <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                  {item.name}
                </a>
              ))}
            </div>
            <div className="mt-6 pt-6">
              <div className="space-y-1 px-2">
                {secondaryNavigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="group flex items-center rounded-md px-2 py-2 text-sm font-medium leading-6 text-cyan-100 hover:bg-cyan-600 hover:text-white"
                  >
                    <item.icon className="mr-4 h-6 w-6 flex-shrink-0 text-cyan-200" aria-hidden="true" />
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </nav>
        </div>
      </div>

      <div className="flex flex-1 flex-col lg:pl-64">
        <div className="flex h-16 flex-shrink-0 border-b border-gray-200 bg-white lg:border-none">
          <button
            type="button"
            className="border-r border-gray-200 px-4 text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-500 lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <Bars3CenterLeftIcon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <main className="flex-1 pb-8">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
