import { useState } from "react";
import { FiChevronDown, FiInfo } from "react-icons/fi";
import type { Method } from "../data/methods";
import LinkButton from "./LinkButton";
import SupportModal from "./SupportModal";

interface MethodAccordionProps {
  method: Method;
}

export default function MethodAccordion({ method }: MethodAccordionProps) {
  const [open, setOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <div
        className={`
          rounded-2xl border transition-all duration-300 backdrop-blur-sm
          ${
            open
              ? "bg-sand-50 dark:bg-coffee-800 border-orange-400/50 dark:border-coffee-600 shadow-lg shadow-coffee-900/15 dark:shadow-coffee-950/50"
              : "bg-sand-50/90 dark:bg-coffee-900/90 border-sand-300/80 dark:border-coffee-700 hover:border-sand-400 dark:hover:border-coffee-600 hover:shadow-md hover:shadow-coffee-900/10"
          }
        `}>
        <button
          onClick={() => setOpen(!open)}
          className="w-full flex items-center justify-between px-5 py-4 text-right group cursor-pointer"
          aria-expanded={open}>
          <span
            className={`
              font-semibold text-base transition-colors duration-200
              ${
                open
                  ? "text-orange-600 dark:text-orange-400"
                  : "text-coffee-800 dark:text-sand-100 group-hover:text-orange-600 dark:group-hover:text-orange-400"
              }
            `}>
            {method.title}
          </span>
          <span
            className={`
              flex-shrink-0 mr-3 transition-all duration-300
              ${open ? "rotate-180 text-orange-500 dark:text-orange-400" : "text-coffee-500 dark:text-coffee-600"}
            `}>
            <FiChevronDown size={20} />
          </span>
        </button>

        <div
          className={`
            overflow-hidden transition-all duration-300 ease-in-out
            ${open ? "max-h-[800px] opacity-100" : "max-h-0 opacity-0"}
          `}>
          <div className="px-5 pb-5 space-y-4">
            <div className="h-px bg-sand-200 dark:bg-coffee-700" />

            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-coffee-500/70 dark:text-coffee-500 mb-3">
                لینک‌ها
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {method.links.map((link, i) => (
                  <LinkButton key={i} label={link.label} url={link.url} platform={link.platform} />
                ))}
              </div>
            </div>

            {method.credits.length > 0 && (
              <div className="rounded-xl border border-orange-200 dark:border-coffee-600/60 bg-orange-50 dark:bg-coffee-700/30 px-4 py-3">
                <div className="flex items-center justify-between mb-2.5">
                  <h3 className="text-xs font-semibold text-orange-600/80 dark:text-sand-300/70">
                    صاحبین اثر
                  </h3>
                  <button
                    onClick={() => setModalOpen(true)}
                    className="flex items-center gap-1 text-orange-400 dark:text-sand-300/50 hover:text-orange-600 dark:hover:text-sand-200 transition-colors cursor-pointer"
                    aria-label="اطلاعات بیشتر">
                    <FiInfo size={15} />
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {method.credits.map((credit, i) =>
                    credit.url ? (
                      <a
                        key={i}
                        href={credit.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-3 py-1.5 rounded-lg text-sm bg-orange-100 dark:bg-coffee-600/40 text-orange-700 dark:text-sand-200 hover:bg-orange-200 dark:hover:bg-coffee-600/60 border border-orange-200 dark:border-coffee-600/50 transition-colors font-medium cursor-pointer">
                        {credit.name}
                      </a>
                    ) : (
                      <span
                        key={i}
                        className="px-3 py-1.5 rounded-lg text-sm bg-orange-100 dark:bg-coffee-600/40 text-orange-700 dark:text-sand-200 border border-orange-200 dark:border-coffee-600/50">
                        {credit.name}
                      </span>
                    ),
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {modalOpen && <SupportModal onClose={() => setModalOpen(false)} />}
    </>
  );
}
