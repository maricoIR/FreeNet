import { useEffect, useState } from "react";
import { FiX, FiMessageSquare } from "react-icons/fi";

interface ContactModalProps {
  onClose: () => void;
}

type Status = "idle" | "loading" | "success" | "error";

export default function ContactModal({ onClose }: ContactModalProps) {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, message }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error ?? "خطای ناشناخته");
      }

      setStatus("success");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "خطا در ارسال پیام");
      setStatus("error");
    }
  }

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

        {status === "success" ? (
          <div className="flex flex-col items-center text-center gap-4 py-2">
            <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-coffee-700 flex items-center justify-center">
              <FiMessageSquare size={22} className="text-orange-500 dark:text-orange-400" />
            </div>
            <div className="space-y-2">
              <h2 className="font-bold text-base text-coffee-800 dark:text-sand-100">
                ممنون از پیام شما
              </h2>
              <p className="text-sm text-coffee-600 dark:text-sand-200/80 leading-7">
                پیشنهاد یا انتقاد شما با موفقیت ثبت شد. از مشارکت‌تان سپاسگزاریم.
              </p>
            </div>
            <button
              onClick={onClose}
              className="w-full cursor-pointer py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 text-white text-sm font-medium transition-colors"
            >
              بستن
            </button>
          </div>
        ) : (
          <div className="flex flex-col gap-4" dir="rtl">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-orange-100 dark:bg-coffee-700 flex items-center justify-center shrink-0">
                <FiMessageSquare size={18} className="text-orange-500 dark:text-orange-400" />
              </div>
              <h2 className="font-bold text-base text-coffee-800 dark:text-sand-100">
                پیشنهادات و انتقادات
              </h2>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-coffee-600 dark:text-sand-300">
                  نام
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="نام شما"
                  required
                  className="w-full px-3 py-2 rounded-xl text-sm bg-white dark:bg-coffee-900 border border-orange-200 dark:border-coffee-600 text-coffee-800 dark:text-sand-100 placeholder:text-coffee-400 dark:placeholder:text-sand-400/50 outline-none focus:border-orange-400 dark:focus:border-orange-500 transition-colors"
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xs font-medium text-coffee-600 dark:text-sand-300">
                  پیام
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="پیشنهاد یا انتقاد خود را بنویسید..."
                  required
                  rows={4}
                  className="w-full px-3 py-2 rounded-xl text-sm bg-white dark:bg-coffee-900 border border-orange-200 dark:border-coffee-600 text-coffee-800 dark:text-sand-100 placeholder:text-coffee-400 dark:placeholder:text-sand-400/50 outline-none focus:border-orange-400 dark:focus:border-orange-500 transition-colors resize-none"
                />
              </div>

              {status === "error" && (
                <p className="text-xs text-red-500 dark:text-red-400">{errorMsg}</p>
              )}

              <div className="flex gap-2 mt-1">
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 cursor-pointer py-2.5 rounded-xl border border-orange-200 dark:border-coffee-600 text-coffee-600 dark:text-sand-300 text-sm font-medium hover:bg-orange-50 dark:hover:bg-coffee-700 transition-colors"
                >
                  انصراف
                </button>
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="flex-1 cursor-pointer py-2.5 rounded-xl bg-orange-500 hover:bg-orange-600 disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-medium transition-colors"
                >
                  {status === "loading" ? "در حال ارسال..." : "ارسال"}
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
