import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import ParticleWeb from "./ParticleWeb";
import { ReactComponent as Logo } from "../img/logo_hexigon.svg";
import SceneRender from "./SceneRender";

const navigation = [
  { name: "Data Visualization", href: "#" },
  { name: "Machine Learning", href: "#" },
  { name: "Supply Chain", href: "#" },
];

export default function Landing() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute">
        <ParticleWeb width={window.innerWidth} height={window.innerHeight} />
      </div>

      <div class="relative z-10 pl-16 pb-8 lg:max-w-full lg:w-full">
        <Popover>
          <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
            <nav
              className="relative flex items-center justify-between sm:h-10 lg:justify-start"
              aria-label="Global"
            >
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Logo</span>
                    <div className="w-8">
                      <Logo />
                    </div>
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="text-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="font-medium font-mono text-white hover:text-yellow"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </nav>
          </div>

          <Transition
            as={Fragment}
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-100 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Popover.Panel
              focus
              className="absolute z-10 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div className="w-6">
                    <Logo />
                  </div>
                  <div className="-mr-2">
                    <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                      <span className="sr-only">Close main menu</span>
                      <XIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
      </div>

      <div className="max-w-full mx-auto px-16">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-64">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-semibold font-sans text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block text-white xl:inline">Hi, I'm </span>
                <span className="block text-yellow xl:inline">Robert</span>
              </h1>
              <p className="mt-3 text-white sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I'm a data scientist and web developer currently working in the
                chemical industry as a supply chain consultant.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md">
                  <a
                    href="https://github.com/RobertLeePrice"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full flex items-center justify-center px-6 py-3 border-none text-base font-medium rounded-md text-dark-gray bg-yellow hover:bg-yellow-dark md:py-3 md:text-lg md:px-6"
                  >
                    Contact
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://github.com/RobertLeePrice"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="w-full flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-transparent hover:bg-white hover:text-dark-gray md:py-3 md:text-lg md:px-6"
                  >
                    Github
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <SceneRender />
      </div>
    </div>
  );
}
