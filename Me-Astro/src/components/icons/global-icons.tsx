// Icons for pages
export function IconHome({ width, height, className }: { width?: number, height?: number, className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={width || 20} height={height || 20} className={className || ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" /></svg>
}

export function IconPerson({ width, height, className }: { width?: number, height?: number, className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={width || 20} height={height || 20} className={className || ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 1 0-16 0" /></svg>
}

export function IconCode({ width, height, className }: { width?: number, height?: number, className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={width || 20} height={height || 20} className={className || ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
}

export function IconShare({ width, height, className }: { width?: number, height?: number, className?: string }) {
  return <svg xmlns="http://www.w3.org/2000/svg" width={width || 20} height={height || 20} className={className || ""} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" /><line x1="8.59" x2="15.42" y1="13.51" y2="17.49" /><line x1="15.41" x2="8.59" y1="6.51" y2="10.49" /></svg>
}
