import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import { Sun, Moon } from 'lucide-react' // Using Lucide for the icons
import './App.css'
import { useTheme } from './context/ThemeContext.jsx'

function App() {
  const [count, setCount] = useState(0)
  const { isDark, toggleTheme } = useTheme();

  return (
    <div className="min-h-screen bg-background text-title transition-colors duration-300">
      <header className="flex justify-end p-6">
        {/* Theme Toggle Button */}
        <button 
          onClick={toggleTheme} 
          className="p-3 rounded-xl bg-sidebar border border-stroke hover:bg-primary-lite transition-all shadow-sm"
        >
          {isDark ? <Sun size={20} className="text-secondary" /> : <Moon size={20} className="text-primary" />}
        </button>
      </header>

      <section id="center" className="flex flex-col items-center justify-center py-12">
        <div className="hero relative mb-8">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework absolute -bottom-4 -right-4 w-12" alt="React logo" />
          <img src={viteLogo} className="vite absolute -top-4 -left-4 w-12" alt="Vite logo" />
        </div>

        <div className="text-center">
          <h1 className="text-4xl font-bold mb-2">Get started</h1>
          <p className="text-subtitle mb-6">
            Edit <code className="bg-primary-lite px-2 py-1 rounded">src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>

        <button
          type="button"
          className="bg-primary text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-primary/20 hover:scale-105 transition-transform"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section>

      <div className="border-t border-stroke my-8"></div>

      <section id="next-steps" className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-6 pb-20">
        {/* Docs Card */}
        <div className="bg-sidebar p-8 rounded-2xl border border-stroke backdrop-blur-md">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
             Documentation
          </h2>
          <p className="text-subtitle mb-4">Your questions, answered</p>
          <div className="flex gap-4">
            <a href="https://vite.dev/" target="_blank" className="text-primary hover:underline">Explore Vite</a>
            <a href="https://react.dev/" target="_blank" className="text-primary hover:underline">Learn React</a>
          </div>
        </div>

        {/* Community Card */}
        <div className="bg-sidebar p-8 rounded-2xl border border-stroke backdrop-blur-md">
          <h2 className="text-xl font-bold mb-4">Connect with us</h2>
          <p className="text-subtitle mb-4">Join the community</p>
          <div className="flex flex-wrap gap-4 text-primary">
            <a href="https://github.com/vitejs/vite" className="hover:text-primary-lite">GitHub</a>
            <a href="https://chat.vite.dev/" className="hover:text-primary-lite">Discord</a>
            <a href="https://x.com/vite_js" className="hover:text-primary-lite">X.com</a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App