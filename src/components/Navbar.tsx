import { useState } from "react";
import { FiSun, FiMoon, FiInfo } from "react-icons/fi";
import { HiWifi } from "react-icons/hi";
import AboutModal from "./AboutModal";

interface NavbarProps {
  darkMode: boolean;
  onToggleDark: () => void;
}

export default function Navbar({ darkMode, onToggleDark }: NavbarProps) {
  const [aboutOpen, setAboutOpen] = useState(false);

  return (
    <>
      <header className="flex-shrink-0 z-50 border-b border-sand-400/60 dark:border-coffee-700 bg-sand-200/80 dark:bg-coffee-900/95 backdrop-blur-md">
        <div className="max-w-xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center shadow-md shadow-orange-900/20">
              <HiWifi size={19} className="text-white" />
            </div>
            <div className="leading-tight">
              <span className="font-bold text-base bg-gradient-to-l from-orange-600 to-amber-700 bg-clip-text text-transparent">
                FreeNet
              </span>
              <p className="hidden sm:block text-xs text-coffee-600 dark:text-sand-300/50 font-normal">
                راهنمای اینترنت آزاد
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setAboutOpen(true)}
              aria-label="درباره پروژه"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 bg-sand-100/80 dark:bg-coffee-800 hover:bg-sand-50 dark:hover:bg-coffee-700 text-coffee-700 dark:text-sand-200 border border-sand-400/50 dark:border-coffee-700 cursor-pointer">
              <FiInfo size={16} />
            </button>

            <button
              onClick={onToggleDark}
              aria-label="تغییر پوسته"
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200 bg-sand-100/80 dark:bg-coffee-800 hover:bg-sand-50 dark:hover:bg-coffee-700 text-coffee-700 dark:text-sand-200 border border-sand-400/50 dark:border-coffee-700 cursor-pointer">
              {darkMode ? <FiSun size={16} /> : <FiMoon size={16} />}
            </button>
          </div>
        </div>
      </header>

      {aboutOpen && <AboutModal onClose={() => setAboutOpen(false)} />}
    </>
  );
}
