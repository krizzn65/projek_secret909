import React from 'react';

export function Card({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-neutral-800 bg-neutral-900 p-5 shadow">
      {title ? <h3 className="mb-3 text-base font-semibold text-white">{title}</h3> : null}
      <div className="text-neutral-300">{children}</div>
    </section>
  );
}
