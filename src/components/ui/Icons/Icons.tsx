import type { SVGProps } from 'react';

interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

// Icon components for tech stack
export function ReactIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M12 13.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm0 1.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0-15C6.48 0 2 4.48 2 10s4.48 10 10 10 10-4.48 10-10S17.52 0 12 0zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
    </svg>
  );
}

export function TypeScriptIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M3 3h18v18H3V3zm10.71 14.86c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.84c-.55-.98-1.32-1.35-2.4-1.35-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8zM14 11H8v1.5h2V20h2v-7.5h2V11z" />
    </svg>
  );
}

export function JavaScriptIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M3 3h18v18H3V3zm4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.75 2.53-2.42v-5.4h-1.75v5.32c0 .79-.32 1-.82 1-.47 0-.67-.26-.89-.66l-1.61.61zm5.04-.24c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.84c-.55-.98-1.32-1.35-2.4-1.35-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z" />
    </svg>
  );
}

export function PythonIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M9.585 11.692h4.83a2.26 2.26 0 0 0 2.26-2.26V5.168a2.36 2.36 0 0 0-2.26-2.36c-1.6-.24-3.25-.35-4.83-.35-1.58 0-3.22.12-4.83.35a2.36 2.36 0 0 0-2.26 2.36v3.11h4.83v1.15H2.175a2.36 2.36 0 0 0-2.36 2.36v4.27a2.36 2.36 0 0 0 2.36 2.36h1.58v-3.11a2.36 2.36 0 0 1 2.36-2.36zm-.29-6.24a.87.87 0 1 1 0-1.74.87.87 0 0 1 0 1.74zm5.33 11.11h-4.83a2.26 2.26 0 0 0-2.26 2.26v4.27a2.36 2.36 0 0 0 2.26 2.36c1.6.24 3.25.35 4.83.35 1.58 0 3.22-.12 4.83-.35a2.36 2.36 0 0 0 2.26-2.36v-3.11h-4.83v-1.15h5.08a2.36 2.36 0 0 0 2.36-2.36v-4.27a2.36 2.36 0 0 0-2.36-2.36h-1.58v3.11a2.36 2.36 0 0 1-2.36 2.36zm.29 6.24a.87.87 0 1 1 0 1.74.87.87 0 0 1 0-1.74z" />
    </svg>
  );
}

export function NodeJsIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.46 1.71.46 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.12-.21V7.71c0-.09.04-.17.12-.21l7.44-4.29c.08-.05.18-.05.26 0l7.44 4.29c.08.04.12.12.12.21v8.58c0 .08-.04.17-.12.21l-7.44 4.29c-.08.05-.18.05-.26 0l-1.9-1.11c-.08-.05-.18-.06-.27-.03-.74.33-.88.37-1.57.56-.17.05-.42.12.09.35l2.48 1.47c.24.14.5.21.78.21s.54-.07.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2z" />
    </svg>
  );
}

export function TailwindIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.11 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.48 6 12 6zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35C8.39 16.85 9.52 18 12 18c2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.48 12 7 12z" />
    </svg>
  );
}

export function PostgreSQLIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M17.128 0c-.66.004-1.37.088-2.086.242-.058.012-.1.02-.124.026l-.023.002c-.675.102-1.397.284-2.144.556-1.162-.72-2.45-.797-3.523-.69-.992.098-1.88.365-2.481.78l-.029.021-.031.018c-.37.226-.72.51-1.022.866-.3.353-.555.78-.728 1.29-.157.46-.26.976-.297 1.585-.037.604-.01 1.307.107 2.123l.008.059.004.032c.223 1.67.694 3.29 1.27 4.67.14.34.29.67.45.97.06.12.14.29.17.36l.02.04c.33.71.95 1.25 1.64 1.44.18.05.36.08.54.09h.07c.22 0 .42-.03.62-.09.1-.03.2-.06.29-.1.38.54.8 1 1.23 1.41.3.28.62.54.95.76.16.11.33.21.5.31l-.05.2c-.1.47-.17.96-.19 1.49-.02.52.01 1.09.16 1.69.15.59.4 1.2.79 1.79.02.03.04.05.06.08l.04.06c.39.54.86.99 1.39 1.33.54.34 1.14.57 1.77.64.62.08 1.27.01 1.9-.2.64-.22 1.26-.57 1.82-1.09l.06-.06c.13-.12.25-.25.37-.4 1.23-.24 2.28-.76 3.14-1.54.68-.62 1.24-1.38 1.68-2.26.22-.44.41-.91.57-1.4.24-.76.42-1.58.55-2.44.27-1.79.35-3.71.35-5.56 0-1.85-.08-3.62-.1-4.93l-.01-.6c0-.03 0-.06-.01-.1-.02-.56-.05-1-.08-1.37-.05-.58-.13-1.03-.24-1.5-.1-.47-.24-.96-.45-1.5-.22-.55-.5-1.15-.9-1.8l-.05-.07-.03-.04a6.31 6.31 0 0 0-1.06-1.14c-.43-.37-.91-.67-1.44-.89-.53-.22-1.1-.37-1.7-.42-.22-.02-.45-.03-.68-.03zm-.1 1.04h.05c.44.03.86.12 1.26.28.4.16.78.39 1.14.69.37.31.69.66.94 1.02.34.52.59 1.03.78 1.5.19.46.31.88.4 1.28.09.4.15.78.19 1.27.03.35.05.76.08 1.28v.07l.01.65c.03 1.3.1 3.04.1 4.85 0 1.82-.08 3.68-.34 5.4-.13.84-.3 1.62-.52 2.32-.15.46-.32.9-.52 1.3-.4.8-.9 1.47-1.5 2.02-.71.65-1.6 1.08-2.6 1.26l-.11.02c.34-.67.54-1.4.58-2.17.04-.71-.04-1.46-.27-2.2-.2-.66-.5-1.31-.9-1.91-.04-.07-.09-.14-.14-.2.16-.17.31-.34.44-.52.55-.73.9-1.59 1-2.54.07-.58.04-1.2-.1-1.84-.13-.63-.37-1.29-.73-1.94-.1-.18-.2-.36-.32-.54.09-.55.16-1.09.2-1.6.05-.6.07-1.14.05-1.62-.01-.5-.05-.93-.13-1.3-.08-.38-.2-.7-.36-1.01l-.02-.03a2.85 2.85 0 0 0-.47-.64 3.1 3.1 0 0 0-.5-.4l.07-.01c.6-.13 1.19-.2 1.73-.2z" />
    </svg>
  );
}

export function MongoDBIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M12.546 1.81c-.196-.47-.496-.912-.796-1.33-.3.418-.6.86-.797 1.33a9.85 9.85 0 0 0-.398.99c-.298.912-.497 1.83-.596 2.75-.1.92-.1 1.84-.05 2.76.05.62.148 1.24.298 1.85.1.41.248.81.447 1.19a2.9 2.9 0 0 0 1.097 1.11c.398.24.846.37 1.295.37.45 0 .897-.13 1.296-.37.398-.23.746-.62 1.046-1.06.249-.37.448-.77.547-1.19.15-.61.248-1.23.298-1.85.05-.92.05-1.84-.05-2.76-.1-.92-.298-1.838-.596-2.75a9.2 9.2 0 0 0-.398-.99zm-.049 14.94c-.05-.62-.1-1.24-.149-1.86-.05-.51-.1-1.03-.199-1.54-.05-.41-.149-.81-.248-1.21a5.3 5.3 0 0 0-.397-.99c-.15-.31-.348-.61-.596-.88a2.42 2.42 0 0 0-.846-.62c-.05.05-.05.1-.05.15-.049.47-.099.95-.099 1.42-.05.82-.05 1.64.05 2.46.05.62.149 1.24.298 1.85.1.41.248.81.447 1.19.15.31.348.58.596.83.2.2.448.37.697.52.2.1.398.21.596.26.05-.26.1-.52.1-.77.05-.51.05-1.03.05-1.54v-.06z" />
    </svg>
  );
}

export function DockerIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M13.98 11.08h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .11.08.19.19.19zm-2.95-5.43h2.12a.19.19 0 0 0 .19-.19V3.58a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .11.09.19.19.19zm0 2.71h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .11.09.19.19.19zm-2.93 0h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19H8.1a.19.19 0 0 0-.19.19v1.88c0 .11.08.19.19.19zm-2.96 0h2.12a.19.19 0 0 0 .19-.19V6.29a.19.19 0 0 0-.19-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .11.08.19.19.19zm5.89 2.72h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19h-2.12a.19.19 0 0 0-.19.19v1.88c0 .11.09.19.19.19zm-2.93 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19H8.1a.19.19 0 0 0-.19.19v1.88c0 .11.08.19.19.19zm-2.96 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19H5.14a.19.19 0 0 0-.19.19v1.88c0 .11.08.19.19.19zm-2.92 0h2.12a.19.19 0 0 0 .19-.19V9.01a.19.19 0 0 0-.19-.19H2.22a.19.19 0 0 0-.19.19v1.88c0 .11.08.19.19.19zm21.54-1.19c-.06-.04-.67-.45-1.95-.45-.3 0-.59.02-.89.07-.34-1.54-1.64-2.29-1.71-2.33l-.34-.2-.23.31c-.29.38-.5.81-.63 1.27-.26.91-.1 1.77.46 2.5-.68.39-1.77.48-2.09.49H.48c-.27 0-.48.22-.48.48 0 1.86.3 3.72 1.07 5.36.86 1.79 2.14 3.11 3.8 3.91 1.85.89 4.87 1.4 8.26 1.4 1.52 0 3.06-.13 4.56-.4 2.07-.37 4.06-1.08 5.76-2.24 1.4-1 2.64-2.29 3.64-3.87.84-1.35 1.35-2.87 1.72-4.38h.15c1.05 0 1.7-.42 2.06-.78.24-.24.42-.53.54-.85l.07-.21-.17-.14z" />
    </svg>
  );
}

export function GitIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M23.546 10.93L13.067.452a1.55 1.55 0 0 0-2.188 0L8.708 2.627l2.76 2.76a1.838 1.838 0 0 1 2.327 2.341l2.658 2.66a1.838 1.838 0 0 1 1.9 3.039 1.837 1.837 0 0 1-2.6 0 1.846 1.846 0 0 1-.411-1.928l-2.48-2.48v6.53a1.833 1.833 0 0 1 .996 3.29 1.84 1.84 0 1 1-2.263-2.902V9.168a1.837 1.837 0 0 1-1.001-2.406L7.87 4.038.454 11.456a1.55 1.55 0 0 0 0 2.188l10.48 10.477a1.55 1.55 0 0 0 2.186 0l10.426-10.426a1.55 1.55 0 0 0 0-2.188z" />
    </svg>
  );
}

export function FigmaIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zM4 12c0-2.208 1.792-4 4-4h4v8H8c-2.208 0-4-1.792-4-4zM4 4c0-2.208 1.792-4 4-4h4v8H8C5.792 8 4 6.208 4 4zM12 0h4c2.208 0 4 1.792 4 4s-1.792 4-4 4h-4V0zM20 12c0 2.208-1.792 4-4 4s-4-1.792-4-4 1.792-4 4-4 4 1.792 4 4z" />
    </svg>
  );
}

// Social Icons
export function GitHubIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  );
}

export function LinkedInIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  );
}

export function MailIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <rect x="2" y="4" width="20" height="16" rx="2" />
      <path d="M22 6L12 13L2 6" />
    </svg>
  );
}

export function ExternalLinkIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" />
      <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

export function MenuIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="3" y1="12" x2="21" y2="12" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <line x1="3" y1="18" x2="21" y2="18" />
    </svg>
  );
}

export function CloseIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

export function ChevronDownIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export function LocationIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

export function DownloadIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export function QuoteIcon({ size = 24, ...props }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" {...props}>
      <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
    </svg>
  );
}

// Map icon names to components
export const iconMap: Record<string, React.FC<IconProps>> = {
  react: ReactIcon,
  typescript: TypeScriptIcon,
  javascript: JavaScriptIcon,
  python: PythonIcon,
  nodejs: NodeJsIcon,
  tailwind: TailwindIcon,
  postgresql: PostgreSQLIcon,
  mongodb: MongoDBIcon,
  docker: DockerIcon,
  git: GitIcon,
  figma: FigmaIcon,
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
};

export function getIcon(name: string): React.FC<IconProps> | null {
  return iconMap[name.toLowerCase()] || null;
}
