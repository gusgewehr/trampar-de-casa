import { useEffect, useState } from 'react'
import { ChevronUpIcon } from 'lucide-react'
import clsx from 'clsx'

export default function ScrollToTopButton() {
  const [backToTop, setBackToTop] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  function handleScroll() {
    if (window.scrollY > 600) {
      setBackToTop(true)
    } else {
      setBackToTop(false)
    }
  }

  function scrollUp() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <button
      onClick={scrollUp}
      aria-label="Go to Top"
      role="button"
      className={clsx(
        'fixed right-6 p-2 text-5xl focus:ring focus:ring-indigo-300 bg-indigo-600 hover:bg-indigo-700 transition-all duration-300 rounded-lg shadow text-slate-100 border-slate-100 border',
        [
          { 'bottom-6 opacity-80': backToTop },
          { '-bottom-20 opacity-0': !backToTop },
        ]
      )}
    >
      <ChevronUpIcon />
    </button>
  )
}
