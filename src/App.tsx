import { useState, useEffect, useMemo } from "react";
import { methods } from "./data/methods";
import Navbar from "./components/Navbar";
import SearchBar from "./components/SearchBar";
// import FilterChips from './components/FilterChips';
import MethodAccordion from "./components/MethodAccordion";
import Footer from "./components/Footer";

function useDarkMode() {
  const [dark, setDark] = useState<boolean>(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  return { dark, toggle: () => setDark((d) => !d) };
}

export default function App() {
  const { dark, toggle } = useDarkMode();
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    if (!search.trim()) return methods;
    const q = search.trim().toLowerCase();
    return methods.filter(
      (m) =>
        m.title.toLowerCase().includes(q) || m.links.some((l) => l.label.toLowerCase().includes(q)),
    );
  }, [search]);

  return (
    <div className="h-screen flex flex-col overflow-hidden bg-sand-300 dark:bg-coffee-950 transition-colors duration-300 bg-dot-pattern">
      <Navbar darkMode={dark} onToggleDark={toggle} />
      <SearchBar value={search} onChange={setSearch} />

      {/* <FilterChips
        methods={methods}
        selected={activeFilters}
        onToggle={toggleFilter}
        onClearAll={clearFilters}
      /> */}

      <main className="flex-1 overflow-y-auto my-3">
        <div className="max-w-xl mx-auto px-4">
          {filtered.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center">
              <div className="w-16 h-16 rounded-2xl bg-sand-100 dark:bg-coffee-800 flex items-center justify-center mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <p className="text-coffee-700 dark:text-sand-200 font-medium">نتیجه‌ای یافت نشد</p>
              <p className="text-coffee-600/70 dark:text-sand-300/60 text-sm mt-1">
                جستجو را تغییر دهید
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {filtered.map((method) => (
                <MethodAccordion key={method.id} method={method} />
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
