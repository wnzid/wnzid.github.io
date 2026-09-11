export function RobotCellDemo() {
  return (
    <svg className="robot-cell-demo" viewBox="0 0 720 390" role="img" aria-labelledby="robot-demo-title robot-demo-description">
      <title id="robot-demo-title">Robot Cell Optimizer analysis loop</title>
      <desc id="robot-demo-description">A UR5e robot tests target poses, checks a planned path against a collision object, and scans candidate base positions.</desc>
      <defs>
        <pattern id="cell-grid" width="36" height="36" patternUnits="userSpaceOnUse"><path d="M36 0H0V36" fill="none" stroke="currentColor" strokeOpacity=".11" /></pattern>
        <radialGradient id="reach-gradient"><stop offset="0" stopColor="#65a8ff" stopOpacity=".18" /><stop offset="1" stopColor="#65a8ff" stopOpacity="0" /></radialGradient>
      </defs>

      <rect width="720" height="390" rx="12" className="cell-background" />
      <rect x="20" y="20" width="680" height="350" rx="9" fill="url(#cell-grid)" className="cell-grid" />
      <text x="42" y="54" className="cell-kicker">RCO / WORKCELL ANALYSIS</text>
      <text x="678" y="54" textAnchor="end" className="cell-version">UR5e · ROS 2 · MOVEIT 2</text>

      <circle cx="185" cy="238" r="150" fill="url(#reach-gradient)" className="reach-field" />
      <circle cx="185" cy="238" r="145" className="reach-boundary" />

      <g className="candidate-field" aria-hidden="true">
        {[0, 1, 2, 3, 4].flatMap((column) => [0, 1, 2].map((row) => <rect key={`${column}-${row}`} x={430 + column * 42} y={185 + row * 42} width="15" height="15" rx="3" style={{ animationDelay: `${(column + row) * 180}ms` }} />))}
      </g>
      <text x="430" y="340" className="cell-caption">BASE CANDIDATES</text>

      <rect x="330" y="228" width="76" height="62" rx="7" className="collision-object" />
      <path d="M196 222 C250 146 301 126 359 173 S468 173 526 112" className="planned-path" />
      <circle r="5" className="path-probe"><animateMotion dur="7s" repeatCount="indefinite" path="M196 222 C250 146 301 126 359 173 S468 173 526 112" /></circle>

      <g className="target target-one"><circle cx="302" cy="126" r="10" /><path d="M285 126h34M302 109v34" /></g>
      <g className="target target-two"><circle cx="526" cy="112" r="10" /><path d="M509 112h34M526 95v34" /></g>
      <text x="282" y="100" className="target-label">T01</text>
      <text x="506" y="86" className="target-label">T02</text>

      <g className="robot-arm">
        <circle cx="185" cy="238" r="29" className="robot-base" />
        <circle cx="185" cy="238" r="12" className="robot-joint" />
        <polyline points="185,238 242,188 302,126" className="robot-links">
          <animate attributeName="points" dur="10s" repeatCount="indefinite" values="185,238 242,188 302,126;185,238 268,226 344,178;185,238 235,168 302,126;185,238 265,184 360,172;185,238 242,188 302,126" keyTimes="0;.24;.5;.76;1" />
        </polyline>
        <circle r="10" className="robot-joint"><animate attributeName="cx" dur="10s" repeatCount="indefinite" values="242;268;235;265;242" keyTimes="0;.24;.5;.76;1" /><animate attributeName="cy" dur="10s" repeatCount="indefinite" values="188;226;168;184;188" keyTimes="0;.24;.5;.76;1" /></circle>
        <circle r="8" className="robot-tool"><animate attributeName="cx" dur="10s" repeatCount="indefinite" values="302;344;302;360;302" keyTimes="0;.24;.5;.76;1" /><animate attributeName="cy" dur="10s" repeatCount="indefinite" values="126;178;126;172;126" keyTimes="0;.24;.5;.76;1" /></circle>
      </g>

      <g className="analysis-readout">
        <text x="42" y="332" className="phase phase-one">01  LOAD TARGET POSES</text>
        <text x="244" y="332" className="phase phase-two">02  IK + COLLISION CHECK</text>
        <text x="496" y="332" className="phase phase-three">03  BASE SEARCH</text>
      </g>
      <circle cx="42" cy="354" r="4" className="status-light" /><text x="54" y="358" className="cell-caption">SIMULATION PIPELINE · PLANNED CAPABILITIES</text>
    </svg>
  );
}
