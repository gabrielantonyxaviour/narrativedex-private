import { gql, useQuery } from '@apollo/client'
import NotificationIcon from '@components/Notification/Icon'
import { Disclosure } from '@headlessui/react'
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import isStaff from '@lib/isStaff'
import clsx from 'clsx'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useAppPersistStore } from 'src/store/app'

import MenuItems from './MenuItems'

// const NewPostModal = dynamic(() => import('../../Post/NewPost/Modal'))

const PING_QUERY = gql`
  query Ping {
    ping
  }
`

const Navbar = () => {
  const { isAuthenticated, currentUser, staffMode } = useAppPersistStore()
  const { data: pingData } = useQuery(PING_QUERY, {
    pollInterval: 3000,
    skip: !currentUser
  })

  const NavItem = ({ url, name, current }) => {
    return (
      <Link href={url}>
        <a href={url} aria-current={current ? 'page' : undefined}>
          <Disclosure.Button
            className={clsx(
              'w-full text-left px-2 md:px-3 py-1 rounded-md font-black cursor-pointer text-sm tracking-wide',
              {
                'text-black dark:text-white bg-gray-200 dark:bg-gray-800':
                  current,
                'text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-800':
                  !current
              }
            )}
          >
            {name}
          </Disclosure.Button>
        </a>
      </Link>
    )
  }

  const NavItems = () => {
    const { pathname } = useRouter()

    return (
      <>
        <NavItem url="/" name="Home" current={pathname == '/'} />
        <NavItem
          url="/explore"
          name="Explore"
          current={pathname == '/explore'}
        />
      </>
    )
  }

  return (
    <Disclosure
      as="nav"
      className="sticky top-0 z-10 w-full bg-white border-b dark:bg-gray-900 dark:border-b-gray-700/80"
    >
      {({ open }) => (
        <>
          <div className="container px-5 mx-auto max-w-screen-xl">
            <div className="flex relative justify-between items-center h-14 sm:h-16">
              <div className="flex justify-start items-center">
                <Disclosure.Button className="inline-flex justify-center items-center mr-4 text-gray-500 rounded-md sm:hidden focus:outline-none">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block w-6 h-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block w-6 h-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
                <Link href="/">
                  <a href="/">
                    <div className="text-3xl font-black">
                      <img
                        className="w-8 h-8"
                        height={32}
                        width={32}
                        src="https://cdn-icons-png.flaticon.com/512/223/223203.png"
                        alt="Logo"
                      />
                    </div>
                  </a>
                </Link>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex items-center space-x-4">
                    <NavItems />
                  </div>
                </div>
              </div>
              <div className="flex gap-8 items-center">
                {/* {isAuthenticated && currentUser && <NewPostModal />} */}
                {isAuthenticated && currentUser && <NotificationIcon />}
                <MenuItems pingData={pingData} />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="flex flex-col p-3 space-y-2">
              <NavItems />
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}

export default Navbar
