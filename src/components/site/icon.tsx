export function Icon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const p = {
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "ski":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M4 20 L20 6" />
          <path d="M6 22 L22 8" />
          <circle cx="14" cy="6" r="2" />
          <path d="M14 8 L11 14 L13 17" />
        </svg>
      );
    case "bike":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <circle cx="6" cy="17" r="4" />
          <circle cx="18" cy="17" r="4" />
          <path d="M6 17 L10 9 L14 17 M14 9 H17 M10 9 L14 9" />
        </svg>
      );
    case "trek":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M3 20 L9 10 L13 15 L16 11 L21 20 Z" />
          <circle cx="15" cy="6" r="1.5" />
        </svg>
      );
    case "bed":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M3 18 V10 H21 V18 M3 14 H21 M7 10 V7 H13 V10" />
        </svg>
      );
    case "bath":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M3 12 H21 V16 C21 18 19 19 17 19 H7 C5 19 3 18 3 16 Z M6 12 V6 A2 2 0 0 1 10 6" />
        </svg>
      );
    case "wifi":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M2 9 C7 4 17 4 22 9 M5 12 C9 8 15 8 19 12 M8 15 C10 13 14 13 16 15" />
          <circle cx="12" cy="18" r="1" fill="currentColor" />
        </svg>
      );
    case "coffee":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M4 10 H18 V16 A4 4 0 0 1 14 20 H8 A4 4 0 0 1 4 16 Z M18 12 H21 A2 2 0 0 1 21 16 H18 M8 6 C8 4 10 4 10 6 M12 6 C12 4 14 4 14 6" />
        </svg>
      );
    case "parking":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M10 17 V7 H13 A3 3 0 0 1 13 13 H10" />
        </svg>
      );
    case "storage":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M4 10 L12 4 L20 10 V20 H4 Z M9 20 V14 H15 V20" />
        </svg>
      );
    case "meeting":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <circle cx="9" cy="9" r="3" />
          <circle cx="17" cy="10" r="2" />
          <path d="M3 20 C3 16 6 14 9 14 C12 14 15 16 15 20 M15 20 C15 17 17 15.5 19 15.5 C20.5 15.5 21 16 21 17" />
        </svg>
      );
    case "spa":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M4 16 C4 16 6 14 6 11 C6 8 4 7 4 7" />
          <path d="M12 16 C12 16 14 13 14 9 C14 5 12 3 12 3" />
          <path d="M20 16 C20 16 22 14 22 11 C22 8 20 7 20 7" />
          <path d="M2 20 H22" />
        </svg>
      );
    case "pin":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M12 22 C7 16 4 12 4 9 A8 8 0 0 1 20 9 C20 12 17 16 12 22 Z" />
          <circle cx="12" cy="9" r="2.5" />
        </svg>
      );
    case "instagram":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
        </svg>
      );
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" className={className} {...p}>
          <path d="M14 21 V13 H17 L17.5 10 H14 V8 C14 7.2 14.4 6.5 15.5 6.5 H17.5 V3.5 C17.5 3.5 16.3 3.3 15.1 3.3 C12.6 3.3 11 4.8 11 7.6 V10 H8.3 V13 H11 V21" />
        </svg>
      );
    default:
      return null;
  }
}
