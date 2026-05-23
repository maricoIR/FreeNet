import { useEffect } from "react";
import { FiX, FiHeart } from "react-icons/fi";

interface SupportModalProps {
  onClose: () => void;
}

export default function SupportModal({ onClose }: SupportModalProps) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="absolute inset-0 bg-coffee-950/60 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-sm rounded-2xl border border-orange-200 dark:border-coffee-600 bg-sand-50 dark:bg-coffee-800 shadow-xl shadow-coffee-950/30 p-6"
        onClick={(e) => e.stopPropagation()}>
        <button
          onClick={onClose}
          className="absolute left-4 top-4 w-7 h-7 rounded-lg flex items-center justify-center text-coffee-500 dark:text-coffee-500 hover:bg-orange-100 dark:hover:bg-coffee-700 transition-colors"
          aria-label="بستن">
          <FiX size={16} />
        </button>

        <div className="flex flex-col items-center text-center gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-coffee-700 flex items-center justify-center">
            <FiHeart size={22} className="text-orange-500 dark:text-orange-400" />
          </div>

          <div>
            <h2 className="font-bold text-base text-coffee-800 dark:text-sand-100 mb-2">
              از سازندگان حمایت کنید
            </h2>
            <p className="text-sm text-coffee-600 dark:text-sand-200/80 leading-7">
              تمام روش‌هایی که در این مجموعه مشاهده می‌کنید توسط افراد دلسوز و زحمتکش جامعه ایرانی
              تهیه، آموزش داده و به‌رایگان به اشتراک گذاشته شده‌اند.
            </p>
            <p className="text-sm text-coffee-600 dark:text-sand-200/80 leading-7 mt-2">
              اگر این محتوا برایتان مفید بوده، لطفاً از سازندگان حمایت کنید تا انگیزه‌شان برای ادامه
              کار حفظ شود.
            </p>
          </div>

          <button
            onClick={onClose}
            className="w-full cursor-pointer py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors">
            متوجه شدم، ممنون
          </button>
        </div>
      </div>
    </div>
  );
}
