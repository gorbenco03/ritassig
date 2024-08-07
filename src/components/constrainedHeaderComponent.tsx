import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Bars3Icon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'ACASA', href: '/' },
  { name: 'SOLICITA ASIGURARE', href: '/insurance'}, 
  { name: 'DESPRE ASIGURARI', href: '/persFiz' },
  { name: 'CONTACT', href: '/contact' },
 
]

export default function ConstrainedHeaderComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

  const handleAdminLogin = () => {
    navigate('/loginPage')
  }

  return (
    <header className="bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900">
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button onClick={handleAdminLogin} className="text-sm font-semibold leading-6 text-gray-900">
            Log in as admin <span aria-hidden="true">&rarr;</span>
          </button>
        </div>
      </nav>
    </header>
  )
}
