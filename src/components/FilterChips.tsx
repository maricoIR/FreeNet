import type { Method } from '../data/methods';

interface FilterChipsProps {
  methods: Method[];
  selected: string[];
  onToggle: (id: string) => void;
  onClearAll: () => void;
}

export default function FilterChips({ methods, selected, onToggle, onClearAll }: FilterChipsProps) {
  return (
    <div className="flex-shrink-0 border-b border-orange-200/60 dark:border-coffee-700 bg-cream-100/70 dark:bg-coffee-900/70 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto px-4 py-2.5">
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-0.5">
          {selected.length > 0 && (
            <button
              onClick={onClearAll}
              className="flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 bg-rose-50 dark:bg-rose-900/20 text-rose-500 dark:text-rose-400 hover:bg-rose-100 dark:hover:bg-rose-800/30 border border-rose-200 dark:border-rose-700/30"
            >
              پاک کردن
            </button>
          )}
          {methods.map((method) => {
            const active = selected.includes(method.id);
            return (
              <button
                key={method.id}
                onClick={() => onToggle(method.id)}
                className={`
                  flex-shrink-0 px-3.5 py-1.5 rounded-full text-xs font-medium
                  transition-all duration-200 border whitespace-nowrap
                  ${
                    active
                      ? 'bg-orange-500 text-white border-orange-500 shadow-sm shadow-orange-400/25'
                      : 'bg-cream-100 dark:bg-coffee-800 text-amber-900 dark:text-cream-300 border-orange-200 dark:border-coffee-700 hover:border-orange-400 dark:hover:border-coffee-600 hover:text-orange-600 dark:hover:text-orange-400'
                  }
                `}
              >
                {method.title}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
