import React from "react";

interface OrnamentProps {
  className?: string;
  size?: number;
}

/**
 * Authentic classical Fleur-de-lis ornament matching the Livspace Vinciago reference.
 * Includes central spearhead petal, curled side petals, horizontal band, and flaring base.
 */
export function FleurDeLis({
  className = "w-6 h-8 text-[#c5a767]",
  size,
}: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 36 44"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      style={size ? { width: size, height: (size * 44) / 36 } : undefined}
      aria-hidden="true"
    >
      {/* Central tall spearhead petal */}
      <path d="M18 1C16.8 5 14.8 9 12 12.5C15.5 13.2 17.5 15.2 18 18.2C18.5 15.2 20.5 13.2 24 12.5C21.2 9 19.2 5 18 1Z" />
      {/* Left curled petal */}
      <path d="M8.5 13.5C5.5 15 3 18 3.5 21.8C4 24.8 6.8 26.5 9.8 25.8C11 25.5 11.8 24.8 12.5 23.8C12 20.5 13.2 17.5 15.2 15.5C12.2 15.2 10 14.5 8.5 13.5Z" />
      {/* Right curled petal */}
      <path d="M27.5 13.5C30.5 15 33 18 32.5 21.8C32 24.8 29.2 26.5 26.2 25.8C25 25.5 24.2 24.8 23.5 23.8C24 20.5 22.8 17.5 20.8 15.5C23.8 15.2 26 14.5 27.5 13.5Z" />
      {/* Horizontal clasp ring / band */}
      <rect x="9" y="26" width="18" height="3" rx="1.5" />
      {/* Lower base flare */}
      <path d="M18 30C16.8 33 14.5 35.5 12 37C14.5 37.5 17 39 18 42.5C19 39 21.5 37.5 24 37C21.5 35.5 19.2 33 18 30Z" />
    </svg>
  );
}

/**
 * Hanging Fleur-de-lis finial with vertical drop line and connecting ring,
 * as seen on the section divider in the reference design.
 */
export function HangingFleurDeLis({
  className = "text-[#c5a767]",
  lineHeight = 22,
}: {
  className?: string;
  lineHeight?: number;
}) {
  return (
    <div className={`flex flex-col items-center select-none pointer-events-none ${className}`}>
      {/* Vertical suspension line */}
      <div
        className="w-[1.2px] bg-[#c5a767]"
        style={{ height: `${lineHeight}px` }}
      />
      {/* Small gold mounting bead */}
      <div className="w-1.5 h-1.5 rounded-full bg-[#c5a767] -my-0.5" />
      {/* Fleur-de-lis icon */}
      <FleurDeLis className="w-5 h-6 text-[#c5a767] mt-0.5" />
    </div>
  );
}

export function GoldFinial({ className = "w-6 h-8 text-[var(--color-accent)]" }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 32 44"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M16 0C15.2 3.8 13.5 7.2 11 9.8C13.8 10.2 15.5 11.8 16 14C16.5 11.8 18.2 10.2 21 9.8C18.5 7.2 16.8 3.8 16 0Z" />
      <path d="M8.5 11C6.2 12 4.5 14.5 5 17.2C5.5 19.5 7.6 20.8 10 20.2C10.8 20 11.5 19.5 12 18.8C11.6 16.5 12.5 14.2 14.2 12.8C11.8 12.6 10 11.9 8.5 11Z" />
      <path d="M23.5 11C25.8 12 27.5 14.5 27 17.2C26.5 19.5 24.4 20.8 22 20.2C21.2 20 20.5 19.5 20 18.8C20.4 16.5 19.5 14.2 17.8 12.8C20.2 12.6 22 11.9 23.5 11Z" />
      <path d="M11.5 22H20.5C21 22 21.5 22.5 21.5 23.2C21.5 23.8 21 24.3 20.5 24.3H11.5C11 24.3 10.5 23.8 10.5 23.2C10.5 22.5 11 22 11.5 22Z" />
      <path d="M15 25H17V33C17 34 16.6 35 16 36C15.4 35 15 34 15 33V25Z" />
      <circle cx="16" cy="39" r="2.2" />
      <circle cx="16" cy="43" r="1" />
    </svg>
  );
}

export function QaratCrest({ className = "w-7 h-7 text-[var(--color-accent)]" }: OrnamentProps) {
  return (
    <svg
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M18 1.5L34.5 18L18 34.5L1.5 18L18 1.5Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeMiterlimit="10"
      />
      <path
        d="M9 25V17C9 12.0294 13.0294 8 18 8C22.9706 8 27 12.0294 27 17V25"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <path
        d="M18 12L20.5 18L18 24L15.5 18L18 12Z"
        fill="currentColor"
      />
      <circle cx="18" cy="4.5" r="1.2" fill="currentColor" />
      <circle cx="18" cy="31.5" r="1.2" fill="currentColor" />
    </svg>
  );
}

interface ArchedFrameProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: string;
}

export function OgivalArchFrame({
  children,
  className = "",
  borderColor = "var(--color-accent)",
}: ArchedFrameProps) {
  return (
    <div className={`relative pt-7 ${className}`}>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20">
        <GoldFinial className="w-6 h-8 text-[var(--color-accent)]" />
      </div>

      <div
        className="relative p-1.5 md:p-2 bg-transparent"
        style={{
          borderTopLeftRadius: "50% 32%",
          borderTopRightRadius: "50% 32%",
          borderBottomLeftRadius: "var(--radius-card)",
          borderBottomRightRadius: "var(--radius-card)",
          border: `1px solid ${borderColor}`,
        }}
      >
        <div
          className="relative w-full h-full overflow-hidden bg-[var(--color-paper-2)]"
          style={{
            borderTopLeftRadius: "50% 32%",
            borderTopRightRadius: "50% 32%",
            borderBottomLeftRadius: "var(--radius-card)",
            borderBottomRightRadius: "var(--radius-card)",
          }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function BotanicalLineArt({
  className = "w-28 h-28 text-[#c5a767]",
}: {
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Delicate botanical stems and leaves */}
      <path
        d="M 25 135 C 35 105, 50 75, 58 40"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M 45 85 C 58 80, 75 82, 86 92 C 78 100, 62 98, 45 85 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="#fcfaf7"
      />
      <path
        d="M 38 105 C 26 98, 12 100, 6 110 C 17 115, 29 111, 38 105 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="#fcfaf7"
      />

      {/* Main Bloom Petals */}
      <path
        d="M 58 40 C 52 30, 38 28, 33 38 C 30 48, 43 52, 58 40 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="#fcfaf7"
      />
      <path
        d="M 58 40 C 65 28, 79 26, 82 36 C 84 46, 70 52, 58 40 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="#fcfaf7"
      />
      <path
        d="M 58 40 C 48 20, 68 12, 70 26 Z"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="#fcfaf7"
      />
      <circle cx="58" cy="40" r="3" fill="currentColor" opacity="0.6" />

      {/* Secondary branch with bud */}
      <path
        d="M 25 135 C 48 118, 80 112, 102 82"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <circle
        cx="102"
        cy="82"
        r="4.5"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="#fcfaf7"
      />
      <path
        d="M 102 82 C 106 74, 116 74, 118 82 C 116 90, 106 90, 102 82 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="#fcfaf7"
      />
      <path
        d="M 94 92 C 104 90, 115 95, 120 105 C 110 108, 100 102, 94 92 Z"
        stroke="currentColor"
        strokeWidth="1"
        fill="#fcfaf7"
      />
    </svg>
  );
}

export function RomanArchFrame({
  children,
  className = "",
  borderColor = "var(--color-accent)",
}: ArchedFrameProps) {
  return (
    <div
      className={`relative p-1.5 md:p-2 ${className}`}
      style={{
        borderTopLeftRadius: "var(--radius-pill)",
        borderTopRightRadius: "var(--radius-pill)",
        borderBottomLeftRadius: "var(--radius-card)",
        borderBottomRightRadius: "var(--radius-card)",
        border: `1px solid ${borderColor}`,
      }}
    >
      <div
        className="relative w-full h-full overflow-hidden bg-[var(--color-paper-2)]"
        style={{
          borderTopLeftRadius: "var(--radius-pill)",
          borderTopRightRadius: "var(--radius-pill)",
          borderBottomLeftRadius: "var(--radius-card)",
          borderBottomRightRadius: "var(--radius-card)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

interface PointedArchShieldFrameProps {
  imageSrc: string;
  alt: string;
  className?: string;
  borderColor?: string;
}

/**
 * Signature Pointed Arch Shield Frame from the reference design.
 * Features a flat top, straight vertical sides, and an accolade / gothic pointed bottom
 * with a gold border outline, plum margin, and a hanging Fleur-de-lis at the bottom apex.
 */
export function PointedArchShieldFrame({
  imageSrc,
  alt,
  className = "",
  borderColor = "#c5a767",
}: PointedArchShieldFrameProps) {
  return (
    <div className={`relative w-full select-none ${className}`}>
      <svg
        viewBox="0 0 460 535"
        className="w-full h-auto drop-shadow-2xl overflow-visible block"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        role="img"
        aria-label={alt}
      >
        <defs>
          <clipPath id="heroPointedArchClip">
            <path d="M 12 0 L 447 0 L 447 345 C 447 412, 346 454, 230 468 C 114 454, 12 412, 12 345 Z" />
          </clipPath>
        </defs>

        {/* Frame Aubergine Background Behind Margins */}
        <path
          d="M 1 0 L 459 0 L 459 350 C 459 420, 355 464, 230 480 C 105 464, 1 420, 1 350 Z"
          fill="#251225"
        />

        {/* Clipped Image with smooth aspect ratio rendering */}
        <image
          href={imageSrc}
          xlinkHref={imageSrc}
          x="12"
          y="0"
          width="435"
          height="468"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#heroPointedArchClip)"
        />

        {/* Delicate Outer Gold Border */}
        <path
          d="M 1 0 L 459 0 L 459 350 C 459 420, 355 464, 230 480 C 105 464, 1 420, 1 350 Z"
          stroke={borderColor}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />

        {/* Vertical suspension stem from apex to finial */}
        <line
          x1="230"
          y1="480"
          x2="230"
          y2="498"
          stroke={borderColor}
          strokeWidth="1.2"
        />
        <circle cx="230" cy="498.5" r="1.5" fill={borderColor} />

        {/* Ornate Hanging Fleur-de-lis finial */}
        <g transform="translate(217, 500) scale(0.72)" fill={borderColor}>
          <path d="M18 1C16.8 5 14.8 9 12 12.5C15.5 13.2 17.5 15.2 18 18.2C18.5 15.2 20.5 13.2 24 12.5C21.2 9 19.2 5 18 1Z" />
          <path d="M8.5 13.5C5.5 15 3 18 3.5 21.8C4 24.8 6.8 26.5 9.8 25.8C11 25.5 11.8 24.8 12.5 23.8C12 20.5 13.2 17.5 15.2 15.5C12.2 15.2 10 14.5 8.5 13.5Z" />
          <path d="M27.5 13.5C30.5 15 33 18 32.5 21.8C32 24.8 29.2 26.5 26.2 25.8C25 25.5 24.2 24.8 23.5 23.8C24 20.5 22.8 17.5 20.8 15.5C23.8 15.2 26 14.5 27.5 13.5Z" />
          <rect x="9" y="26" width="18" height="3" rx="1.5" />
          <path d="M18 30C16.8 33 14.5 35.5 12 37C14.5 37.5 17 39 18 42.5C19 39 21.5 37.5 24 37C21.5 35.5 19.2 33 18 30Z" />
        </g>
      </svg>
    </div>
  );
}
