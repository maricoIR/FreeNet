import { useEffect } from 'react';
import { FiX } from 'react-icons/fi';
import { HiWifi } from 'react-icons/hi';

interface AboutModalProps {
  onClose: () => void;
}

export default function AboutModal({ onClose }: AboutModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-coffee-950/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-sm rounded-2xl border border-orange-200 dark:border-coffee-600 bg-sand-50 dark:bg-coffee-800 shadow-xl shadow-coffee-950/30 p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute left-4 top-4 w-7 h-7 rounded-lg flex items-center justify-center text-coffee-500 dark:text-sand-300/50 hover:bg-orange-100 dark:hover:bg-coffee-700 transition-colors cursor-pointer"
          aria-label="بستن"
        >
          <FiX size={16} />
        </button>

        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-amber-600 flex items-center justify-center shadow-md shadow-orange-900/20">
            <HiWifi size={24} className="text-white" />
          </div>

          <div className="space-y-3">
            <h2 className="font-bold text-base text-coffee-800 dark:text-sand-100">
              فری‌نت چیست؟
            </h2>

            <p className="text-sm text-coffee-600 dark:text-sand-200/80 leading-7">
              این پروژه با هدف کمک به کاربران ایرانی ساخته شده است تا دسترسی به اینترنت آزاد را آسان‌تر کند. تمام روش‌ها، آموزش‌ها و ابزارهای معرفی‌شده در یک‌جا گردآوری شده‌اند تا دیگر نیازی به جست‌وجوی پراکنده نباشد.
            </p>

            <p className="text-sm text-coffee-600 dark:text-sand-200/80 leading-7">
              این پروژه کاملاً رایگان است و همیشه رایگان خواهد ماند.
            </p>

            <div className="h-px bg-orange-200 dark:bg-coffee-600/60" />

            <p className="text-sm text-coffee-600 dark:text-sand-200/80 leading-7">
              فراهم سازی این پروژه بدون زحمات افرادی که این ابزارها را ساخته‌اند و آموزش‌ها را تهیه کرده‌اند ممکن نبود. از آن‌ها قدردانی و حمایت کنید.
            </p>

            <p className="text-sm font-semibold text-orange-600 dark:text-orange-400 leading-7">
              به امید روزهای روشن
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full cursor-pointer py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors"
          >
            بستن
          </button>
        </div>
      </div>
    </div>
  );
}
