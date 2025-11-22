import { useState } from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu, X, ChevronDown } from 'lucide-react'

function NavLink({ href, children }) {
  return (
    <a href={href} className="px-3 py-2 text-slate-700 hover:text-blue-700 transition-colors">
      {children}
    </a>
  )
}

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-md bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center text-white font-bold shadow-sm">T</div>
            <div className="font-semibold text-slate-900">Tadeemco</div>
          </a>

          <nav className="hidden md:flex items-center">
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#about">About</NavLink>
            <NavLink href="#clients">Clients</NavLink>
            <NavLink href="#contact">Contact</NavLink>
            <DropdownMenu.Root>
              <DropdownMenu.Trigger asChild>
                <button className="ml-2 inline-flex items-center px-3 py-2 rounded-md text-slate-700 hover:text-blue-700 focus:outline-none">
                  Company <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </DropdownMenu.Trigger>
              <DropdownMenu.Portal>
                <DropdownMenu.Content align="end" sideOffset={8} className="min-w-[180px] rounded-lg border border-slate-200 bg-white p-1 shadow-md">
                  <DropdownMenu.Item className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50 cursor-pointer" asChild>
                    <a href="#about">Who We Are</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50 cursor-pointer" asChild>
                    <a href="#projects">Case Studies</a>
                  </DropdownMenu.Item>
                  <DropdownMenu.Item className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-slate-50 cursor-pointer" asChild>
                    <a href="#clients">Partners</a>
                  </DropdownMenu.Item>
                </DropdownMenu.Content>
              </DropdownMenu.Portal>
            </DropdownMenu.Root>
          </nav>

          <div className="md:hidden">
            <button onClick={() => setOpen(!open)} className="p-2 text-slate-700 hover:text-blue-700">
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="px-4 py-3 space-y-2">
            <a href="#services" className="block px-2 py-2 text-slate-700 hover:text-blue-700">Services</a>
            <a href="#projects" className="block px-2 py-2 text-slate-700 hover:text-blue-700">Projects</a>
            <a href="#about" className="block px-2 py-2 text-slate-700 hover:text-blue-700">About</a>
            <a href="#clients" className="block px-2 py-2 text-slate-700 hover:text-blue-700">Clients</a>
            <a href="#contact" className="block px-2 py-2 text-slate-700 hover:text-blue-700">Contact</a>
          </div>
        </div>
      )}
    </header>
  )
}
