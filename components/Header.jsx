import React from 'react'

export default function Header() {
  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <a href="#" className="text-xl font-semibold text-slate-900">AlkaTrip</a>
            </div>

            <nav className="hidden sm:flex items-center gap-6 text-sm text-slate-700">
              <a href="#" className="hover:text-slate-900">Home</a>
              <a href="#" className="hover:text-slate-900">Destinations</a>
              <a href="#" className="hover:text-slate-900">Activities</a>
              <a href="#" className="hover:text-slate-900">Contact</a>
            </nav>

            <div className="flex items-center gap-3">
              <a href="#" className="px-3 py-1 rounded-md text-sm border border-slate-200 hover:bg-slate-50">Log in</a>
              <a href="#" className="px-3 py-1 rounded-md bg-slate-900 text-white text-sm hover:bg-slate-800">Sign up</a>
            </div>
          </div>
        </div>
      </header>

      <div aria-hidden="true">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16" />
        </div>
      </div>
    </>
  )
}
