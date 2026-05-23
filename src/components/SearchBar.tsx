import { FiSearch, FiX } from 'react-icons/fi';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  return (
    <div className="flex-shrink-0 py-3 bg-sand-200/70 dark:bg-coffee-900/80 backdrop-blur-sm border-b border-sand-400/50 dark:border-coffee-700">
      <div className="max-w-xl mx-auto px-4">
        <div className="relative">
          <FiSearch
            size={16}
            className="absolute right-3.5 top-1/2 -translate-y-1/2 text-coffee-500 dark:text-coffee-500 pointer-events-none"
          />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="جستجو در روش‌ها…"
            className="
              w-full pr-10 pl-10 py-2.5 rounded-xl text-sm
              bg-sand-50 dark:bg-coffee-800
              border border-sand-300 dark:border-coffee-700
              text-coffee-800 dark:text-sand-100
              placeholder:text-coffee-500/60 dark:placeholder:text-coffee-600
              focus:outline-none focus:ring-2 focus:ring-orange-400/30 focus:border-orange-400/70
              dark:focus:ring-orange-900/40 dark:focus:border-orange-800/60
              transition-all duration-200 shadow-sm shadow-coffee-900/10
            "
          />
          {value && (
            <button
              onClick={() => onChange('')}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-coffee-500 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              aria-label="پاک کردن جستجو"
            >
              <FiX size={15} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
