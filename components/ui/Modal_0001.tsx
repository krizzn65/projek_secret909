import React, { useEffect, useRef } from 'react';

export function Modal({ isOpen, onClose, title, children }: {
  isOpen: boolean; onClose: () => void; title: string; children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isOpen, onClose]);
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4" role="dialog" aria-modal="true">
      <div ref={ref} className="w-full max-w-lg rounded-2xl bg-neutral-900 p-6">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
        <div className="mt-4 text-neutral-300">{children}</div>
      </div>
    </div>
  );
}
