import type { ReactNode } from 'react';
import { FaYoutube, FaGithub, FaTelegram, FaLink } from 'react-icons/fa';
import type { Platform } from '../data/methods';

interface LinkButtonProps {
  label: string;
  url: string;
  platform: Platform;
}

const platformConfig: Record<
  Platform,
  { bg: string; hover: string; icon: ReactNode; name: string }
> = {
  youtube: {
    bg: 'bg-[#FF0000]',
    hover: 'hover:bg-[#cc0000]',
    icon: <FaYoutube size={15} />,
    name: 'یوتیوب',
  },
  github: {
    bg: 'bg-[#24292e]',
    hover: 'hover:bg-[#1a1f24]',
    icon: <FaGithub size={15} />,
    name: 'گیت‌هاب',
  },
  telegram: {
    bg: 'bg-[#0088cc]',
    hover: 'hover:bg-[#006fa3]',
    icon: <FaTelegram size={15} />,
    name: 'تلگرام',
  },
  other: {
    bg: 'bg-slate-600',
    hover: 'hover:bg-slate-500',
    icon: <FaLink size={13} />,
    name: 'لینک',
  },
};

export default function LinkButton({ label, url, platform }: LinkButtonProps) {
  const config = platformConfig[platform];

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center gap-2 w-full px-3 py-2.5 rounded-xl text-white text-sm font-medium
        ${config.bg} ${config.hover}
        transition-all duration-200 hover:brightness-110 hover:shadow-md
        select-none cursor-pointer
      `}
    >
      <span className="flex-shrink-0 opacity-90">{config.icon}</span>
      <span className="flex-shrink-0 text-xs opacity-70 border-l border-white/20 pl-2 pr-0">{config.name}</span>
      <span className="leading-snug">{label}</span>
    </a>
  );
}
