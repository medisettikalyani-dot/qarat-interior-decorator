import React from "react";

interface Icon3DProps {
  className?: string;
  size?: number;
}

/**
 * 3D Isometric Material Substrate Block
 * Demonstrates: Verified multi-layer structural substrates (Steel GI channel + Marine Core + Gyproc slab + Gold Seal)
 */
export function Icon3DMaterialIntegrity({ className = "w-20 h-20" }: Icon3DProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Ambient drop shadow */}
        <filter id="mat-shadow" x="10" y="70" width="100" height="46" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="6" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.17  0 0 0 0 0.12  0 0 0 0 0.15  0 0 0 0.22 0" />
        </filter>

        {/* Gold Seal Glow */}
        <filter id="gold-glow" x="42" y="6" width="36" height="38" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="3" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>

        {/* Substrate Gradients */}
        {/* Steel GI Channel */}
        <linearGradient id="steel-top" x1="28" y1="62" x2="92" y2="76" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#94A3B8" />
          <stop offset="50%" stopColor="#CBD5E1" />
          <stop offset="100%" stopColor="#64748B" />
        </linearGradient>
        <linearGradient id="steel-left" x1="24" y1="74" x2="60" y2="94" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#475569" />
          <stop offset="100%" stopColor="#334155" />
        </linearGradient>
        <linearGradient id="steel-right" x1="60" y1="94" x2="96" y2="74" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#334155" />
          <stop offset="100%" stopColor="#1E293B" />
        </linearGradient>

        {/* BWR Core (Timber substrate) */}
        <linearGradient id="wood-top" x1="30" y1="50" x2="90" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#C99B6A" />
          <stop offset="100%" stopColor="#A87747" />
        </linearGradient>
        <linearGradient id="wood-left" x1="26" y1="60" x2="60" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#8C5C32" />
          <stop offset="100%" stopColor="#6A4220" />
        </linearGradient>
        <linearGradient id="wood-right" x1="60" y1="78" x2="94" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#754823" />
          <stop offset="100%" stopColor="#543216" />
        </linearGradient>

        {/* Gyproc Gypsum Slab */}
        <linearGradient id="gyp-top" x1="30" y1="36" x2="90" y2="48" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="60%" stopColor="#FAF7F2" />
          <stop offset="100%" stopColor="#EFE8DD" />
        </linearGradient>
        <linearGradient id="gyp-left" x1="28" y1="46" x2="60" y2="64" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#E2D8C9" />
          <stop offset="100%" stopColor="#CCC0AE" />
        </linearGradient>
        <linearGradient id="gyp-right" x1="60" y1="64" x2="92" y2="46" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#BFAF9B" />
          <stop offset="100%" stopColor="#A89782" />
        </linearGradient>

        {/* Gold Seal Gradient */}
        <linearGradient id="gold-seal" x1="48" y1="12" x2="72" y2="36" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F9E7B9" />
          <stop offset="40%" stopColor="#D4A74E" />
          <stop offset="80%" stopColor="#AA7C26" />
          <stop offset="100%" stopColor="#7B5612" />
        </linearGradient>
      </defs>

      {/* Ground Projection Shadow */}
      <ellipse cx="60" cy="92" rx="42" ry="14" fill="#2B1D24" filter="url(#mat-shadow)" />

      {/* Layer 1: Heavy Gauge Galvanized Steel Framing Base */}
      <g id="layer-steel">
        {/* Left Face */}
        <path d="M22 72L60 92V100L22 80Z" fill="url(#steel-left)" />
        {/* Right Face */}
        <path d="M60 92L98 72V80L60 100Z" fill="url(#steel-right)" />
        {/* Channel Bevel Accent */}
        <path d="M22 72L60 92L98 72L60 52Z" fill="url(#steel-top)" />
        <path d="M24 73L60 91L96 73" stroke="#F1F5F9" strokeWidth="0.75" strokeOpacity="0.8" fill="none" />
      </g>

      {/* Layer 2: Marine BWR Substrate Layer */}
      <g id="layer-timber" transform="translate(0, -10)">
        {/* Left Face */}
        <path d="M24 67L60 85V91L24 73Z" fill="url(#wood-left)" />
        {/* Right Face */}
        <path d="M60 85L96 67V73L60 91Z" fill="url(#wood-right)" />
        {/* Top Face */}
        <path d="M24 67L60 85L96 67L60 49Z" fill="url(#wood-top)" />
        <path d="M26 68L60 84L94 68" stroke="#FFE4C4" strokeWidth="0.6" strokeOpacity="0.5" fill="none" />
      </g>

      {/* Layer 3: Genuine Gyproc / USG Knauf Architectural Plasterboard Slab */}
      <g id="layer-gypsum" transform="translate(0, -22)">
        {/* Left Face */}
        <path d="M26 62L60 80V87L26 69Z" fill="url(#gyp-left)" />
        {/* Right Face */}
        <path d="M60 80L94 62V69L60 87Z" fill="url(#gyp-right)" />
        {/* Top Face */}
        <path d="M26 62L60 80L94 62L60 44Z" fill="url(#gyp-top)" stroke="#F8F6F0" strokeWidth="0.5" />
        {/* Bevel highlight along front miter edge */}
        <path d="M27 62.5L60 79.5L93 62.5" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />

        {/* Subtle Architectural Drafting Grid on Top */}
        <path d="M37 56L60 69L83 56" stroke="#948270" strokeWidth="0.6" strokeDasharray="1.5 2" strokeOpacity="0.5" />
        <path d="M48 50L60 57L72 50" stroke="#948270" strokeWidth="0.6" strokeDasharray="1.5 2" strokeOpacity="0.5" />
      </g>

      {/* Floating 3D Certified Substrate Shield / Guarantee Crest */}
      <g id="floating-seal" filter="url(#gold-glow)">
        {/* Shield Backplate */}
        <path
          d="M60 12L73 18V28C73 36.5 67.5 42.5 60 45C52.5 42.5 47 36.5 47 28V18L60 12Z"
          fill="url(#gold-seal)"
          stroke="#FFF2CE"
          strokeWidth="1.25"
        />
        {/* Inner Shield Inlay */}
        <path
          d="M60 15L70 19.8V27.5C70 34.2 65.8 38.8 60 41C54.2 38.8 50 34.2 50 27.5V19.8L60 15Z"
          fill="#3E2B35"
        />
        {/* Inner Gold Diamond Crest */}
        <path d="M60 21L65 27L60 33L55 27L60 21Z" fill="url(#gold-seal)" />
        <circle cx="60" cy="27" r="1.5" fill="#FFF8E7" />
        {/* Substrate Spec Gauge Notch */}
        <path d="M57 36H63" stroke="#D4A74E" strokeWidth="1" strokeLinecap="round" />
      </g>
    </svg>
  );
}

/**
 * 3D Isometric Precision Laser Level & Master Joinery
 * Demonstrates: Master artisans, laser-guided plumb alignment (±1mm), crisp 45° mitered edges, zero-gap tolerances
 */
export function Icon3DArtisanPrecision({ className = "w-20 h-20" }: Icon3DProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Ambient shadow */}
        <filter id="artisan-shadow" x="12" y="72" width="96" height="42" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="5.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.17  0 0 0 0 0.12  0 0 0 0 0.15  0 0 0 0.2 0" />
        </filter>

        {/* Laser Glow */}
        <filter id="laser-glow" x="20" y="30" width="80" height="70" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="2.5" result="glow" />
          <feComposite in="SourceGraphic" in2="glow" operator="over" />
        </filter>

        {/* Laser Device Metallic Gradient */}
        <linearGradient id="turret-body" x1="44" y1="16" x2="76" y2="44" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#3E2B35" />
          <stop offset="50%" stopColor="#25171F" />
          <stop offset="100%" stopColor="#140C10" />
        </linearGradient>

        <linearGradient id="brass-gold" x1="45" y1="15" x2="75" y2="45" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE8B5" />
          <stop offset="35%" stopColor="#D4A74E" />
          <stop offset="75%" stopColor="#9C7023" />
          <stop offset="100%" stopColor="#67460D" />
        </linearGradient>

        {/* Miter Joint Profiles */}
        <linearGradient id="miter-left" x1="20" y1="60" x2="60" y2="85" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FAF7F2" />
          <stop offset="100%" stopColor="#DDD5C7" />
        </linearGradient>

        <linearGradient id="miter-right" x1="60" y1="85" x2="100" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DDD5C7" />
          <stop offset="100%" stopColor="#C4B9A6" />
        </linearGradient>
      </defs>

      {/* Base Shadow */}
      <ellipse cx="60" cy="94" rx="42" ry="13" fill="#2B1D24" filter="url(#artisan-shadow)" />

      {/* 3D Isometric 45° Miter Corner Joinery Base */}
      <g id="miter-base">
        {/* Left Arm of Miter */}
        <path d="M20 70L60 92L60 84L20 62Z" fill="#C4B9A6" />
        <path d="M20 62L60 84L46 76L16 57Z" fill="url(#miter-left)" />

        {/* Right Arm of Miter */}
        <path d="M60 92L100 70L100 62L60 84Z" fill="#A89B86" />
        <path d="M60 84L100 62L86 54L46 76Z" fill="url(#miter-right)" />

        {/* Interlocking 45-degree Miter Seam */}
        <path d="M46 76L60 84" stroke="#D4A74E" strokeWidth="1.2" strokeLinecap="round" />

        {/* Miter Corner Face Top Highlight */}
        <path d="M16 57L46 76L86 54L60 41Z" fill="#FAF8F5" stroke="#FFFFFF" strokeWidth="0.7" />
        <path d="M60 41L46 76" stroke="#D4A74E" strokeWidth="1" strokeDasharray="2 2" />
      </g>

      {/* Artisan Precision Caliper / Angle Gauge */}
      <g id="caliper-guide">
        {/* 90-degree true-square framing bracket */}
        <path
          d="M36 68L46 73L56 68"
          stroke="url(#brass-gold)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="46" cy="73" r="1.5" fill="#FFE8B5" />
      </g>

      {/* Master Optical 3D Laser Level Turret */}
      <g id="laser-turret" transform="translate(0, -6)">
        {/* Turret Pedestal Ring */}
        <ellipse cx="60" cy="38" rx="16" ry="7" fill="url(#brass-gold)" stroke="#FFF2CE" strokeWidth="0.75" />

        {/* Turret Cylinder Body */}
        <path d="M46 32C46 32 46 22 60 22C74 22 74 32 74 32V38C74 38 74 44 60 44C46 44 46 38 46 38V32Z" fill="url(#turret-body)" />

        {/* Turret Bevel Ring & Knurled Texture */}
        <ellipse cx="60" cy="31" rx="14" ry="5.5" fill="none" stroke="url(#brass-gold)" strokeWidth="1.2" />
        <ellipse cx="60" cy="24" rx="11" ry="4" fill="url(#brass-gold)" />

        {/* Optical Glass Emitter Aperture */}
        <ellipse cx="60" cy="35" rx="5" ry="2.2" fill="#FFE8B5" />
        <circle cx="60" cy="35" r="1.5" fill="#FFFFFF" />

        {/* Spirit Level Bubble Window */}
        <rect x="54" y="27" width="12" height="3" rx="1.5" fill="#D4A74E" fillOpacity="0.8" />
        <circle cx="60" cy="28.5" r="1" fill="#FFFFFF" />
      </g>

      {/* Laser Alignment Beams & Crosshairs with Bloom */}
      <g id="laser-beam" filter="url(#laser-glow)">
        {/* Vertical plumb laser line */}
        <line x1="60" y1="36" x2="60" y2="84" stroke="#E5B85C" strokeWidth="1.75" strokeLinecap="round" />
        <line x1="60" y1="36" x2="60" y2="84" stroke="#FFF7E0" strokeWidth="0.8" strokeLinecap="round" />

        {/* Horizontal leveling laser line along miter planes */}
        <line x1="26" y1="65" x2="94" y2="65" stroke="#E5B85C" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="4 2" />
        <line x1="26" y1="65" x2="94" y2="65" stroke="#FFFFFF" strokeWidth="0.6" strokeLinecap="round" strokeDasharray="4 2" />

        {/* Precision Crosshair Target at Miter Seam */}
        <circle cx="60" cy="84" r="3" fill="#D4A74E" fillOpacity="0.4" />
        <circle cx="60" cy="84" r="1.2" fill="#FFFFFF" />

        {/* Precision Laser Tolerance Badge */}
        <g transform="translate(74, 38)">
          <rect x="0" y="0" width="32" height="15" rx="3" fill="#25171F" stroke="#D4A74E" strokeWidth="0.75" />
          <text x="16" y="10.5" fill="#FFE8B5" fontSize="7" fontFamily="system-ui" fontWeight="700" textAnchor="middle">
            ±1mm
          </text>
        </g>
      </g>
    </svg>
  );
}

/**
 * 3D Isometric Stepped Architectural Spatial Volume
 * Demonstrates: Tailored spatial customization, stepped cove lighting troughs, bespoke room reveals, zero catalog templates
 */
export function Icon3DSpatialCustomization({ className = "w-20 h-20" }: Icon3DProps) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <defs>
        {/* Ambient shadow */}
        <filter id="spatial-shadow" x="12" y="74" width="96" height="42" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="5.5" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.17  0 0 0 0 0.12  0 0 0 0 0.15  0 0 0 0.2 0" />
        </filter>

        {/* Cove Ambient Glow */}
        <filter id="cove-glow" x="25" y="25" width="70" height="50" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="4" result="coveGlow" />
          <feComposite in="SourceGraphic" in2="coveGlow" operator="over" />
        </filter>

        {/* Walls & Ceiling Gradients */}
        <linearGradient id="wall-back-left" x1="20" y1="40" x2="60" y2="70" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#EFECE6" />
          <stop offset="100%" stopColor="#DDD6C9" />
        </linearGradient>

        <linearGradient id="wall-back-right" x1="60" y1="70" x2="100" y2="40" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#DDD6C9" />
          <stop offset="100%" stopColor="#C9C0B1" />
        </linearGradient>

        <linearGradient id="stepped-cove-drop" x1="30" y1="20" x2="90" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFFFFF" />
          <stop offset="70%" stopColor="#FAF7F2" />
          <stop offset="100%" stopColor="#E8DFD1" />
        </linearGradient>

        <linearGradient id="gold-cove-light" x1="35" y1="35" x2="85" y2="60" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFF4D4" />
          <stop offset="50%" stopColor="#E5BA5A" />
          <stop offset="100%" stopColor="#B38628" />
        </linearGradient>

        <linearGradient id="gold-metal" x1="15" y1="20" x2="45" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#FFE8B5" />
          <stop offset="50%" stopColor="#D4A74E" />
          <stop offset="100%" stopColor="#8C6318" />
        </linearGradient>
      </defs>

      {/* Base Shadow */}
      <ellipse cx="60" cy="94" rx="42" ry="13" fill="#2B1D24" filter="url(#spatial-shadow)" />

      {/* 3D Isometric Architectural Room Corner (Floor & Walls) */}
      <g id="spatial-room-shell">
        {/* Left Wall Plane */}
        <path d="M20 38L60 58V92L20 72Z" fill="url(#wall-back-left)" />
        {/* Right Wall Plane */}
        <path d="M60 58L100 38V72L60 92Z" fill="url(#wall-back-right)" />
        {/* Floor Base */}
        <path d="M20 72L60 92L100 72L60 52Z" fill="#C2B7A5" fillOpacity="0.4" />

        {/* Isometric Corner Plumb Line */}
        <line x1="60" y1="58" x2="60" y2="92" stroke="#9E917F" strokeWidth="0.75" />
      </g>

      {/* Tier 1: Primary Ceiling Drop & Recessed Cove Channel */}
      <g id="stepped-ceiling-cove">
        {/* Recessed Cove Light Channel (Hidden Indirect LED Glow) */}
        <path
          d="M32 30L60 44L88 30L60 16Z"
          fill="url(#gold-cove-light)"
          filter="url(#cove-glow)"
        />

        {/* Lower Stepped Gypsum Ceiling Reveal (Floating Architectural Canopy) */}
        <g transform="translate(0, 10)">
          {/* Underside Left Face */}
          <path d="M26 36L60 53V58L26 41Z" fill="#C7BBAA" />
          {/* Underside Right Face */}
          <path d="M60 53L94 36V41L60 58Z" fill="#B3A491" />
          {/* Ceiling Face with Stepped Center Aperture */}
          <path
            d="M26 36L60 53L94 36L60 19Z"
            fill="url(#stepped-cove-drop)"
            stroke="#FFFFFF"
            strokeWidth="0.75"
          />

          {/* Stepped Drop Inner Cutout (Recessed Cove Profile) */}
          <path
            d="M38 34L60 45L82 34L60 23Z"
            fill="#2B1D24"
            fillOpacity="0.15"
            stroke="#D4A74E"
            strokeWidth="0.75"
          />

          {/* Warm Ambient Cove Lighting Lip */}
          <path
            d="M38 34L60 45L82 34"
            stroke="url(#gold-cove-light)"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
        </g>
      </g>

      {/* 3D CAD Spatial Dimension Guides (X, Y, Z Axes) */}
      <g id="dimension-guides">
        {/* Z Axis (Height Drop Dimension) */}
        <line x1="18" y1="42" x2="18" y2="70" stroke="url(#gold-metal)" strokeWidth="1" strokeDasharray="2 2" />
        <circle cx="18" cy="42" r="1.5" fill="#FFE8B5" />
        <circle cx="18" cy="70" r="1.5" fill="#FFE8B5" />
        <text x="12" y="58" fill="#D4A74E" fontSize="6.5" fontFamily="system-ui" fontWeight="700">
          Z
        </text>

        {/* X Axis (Width Alignment) */}
        <line x1="22" y1="76" x2="58" y2="94" stroke="url(#gold-metal)" strokeWidth="1" strokeDasharray="2 2" />
        <text x="36" y="91" fill="#D4A74E" fontSize="6.5" fontFamily="system-ui" fontWeight="700">
          X
        </text>

        {/* Y Axis (Depth Alignment) */}
        <line x1="62" y1="94" x2="98" y2="76" stroke="url(#gold-metal)" strokeWidth="1" strokeDasharray="2 2" />
        <text x="82" y="91" fill="#D4A74E" fontSize="6.5" fontFamily="system-ui" fontWeight="700">
          Y
        </text>
      </g>

      {/* Floating 3D Bespoke Fit Crest / Dimension Caliper */}
      <g id="bespoke-badge" transform="translate(48, 8)">
        <polygon points="12,0 24,6 24,18 12,24 0,18 0,6" fill="url(#gold-metal)" stroke="#FFF2CE" strokeWidth="0.8" />
        <polygon points="12,3 21,7.5 21,16.5 12,21 3,16.5 3,7.5" fill="#25171F" />
        <path d="M8 12L11 15L16 9" stroke="#FFE8B5" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}
