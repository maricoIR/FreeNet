interface FooterProps {
  onContribute: () => void;
}

export default function Footer({ onContribute }: FooterProps) {
  return (
    <footer className="flex-shrink-0 h-10 flex items-center justify-center border-t border-[#c4a47a]/30 dark:border-coffee-700 bg-[#c8a870]/70 dark:bg-[#1a0e06]/80 backdrop-blur-md">
      <button
        onClick={onContribute}
        className="text-xs text-coffee-600/70 dark:text-sand-300/70 hover:text-orange-500 dark:hover:text-orange-400 transition-colors cursor-pointer underline-offset-2 hover:underline"
      >
        مشارکت در بهبود پروژه
      </button>
    </footer>
  );
}
