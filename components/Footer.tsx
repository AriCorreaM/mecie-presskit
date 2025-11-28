'use client';

import { artist } from '@/data/artist';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-[var(--background)] py-8">
      <div className="mx-auto max-w-6xl px-6 text-center">
        <p className="text-sm text-[var(--text-secondary)]">
          &copy; {currentYear} {artist.name}. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-[var(--text-secondary)]/60">
          {artist.role} &bull; {artist.location}
        </p>
      </div>
    </footer>
  );
}
