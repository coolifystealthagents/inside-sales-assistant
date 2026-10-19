type VisualProps = { title: string; intake?: string; process?: string; output?: string; seed?: string; compact?: boolean };

function tone(seed: string) {
  let value = 0;
  for (const character of seed) value = (value * 31 + character.charCodeAt(0)) >>> 0;
  return { x: 80 + value % 110, y: 56 + (value >> 4) % 80, turn: 210 + (value >> 8) % 120 };
}

export function TopicVisual({ title, intake = 'SIGNAL', process = 'DECISION', output = 'ACTION', seed = title, compact = false }: VisualProps) {
  const point = tone(seed);
  return <div className={`topic-visual${compact ? ' compact' : ''}`} role="img" aria-label={`Operational diagram for ${title}`}>
    <svg viewBox="0 0 800 420" aria-hidden="true" focusable="false">
      <rect width="800" height="420" fill="#071b31" />
      <path d={`M0 ${point.y} H${point.x} V300 H${point.turn} V170 H800`} stroke="#ff755f" strokeWidth="8" fill="none" />
      <path d="M90 86H290M510 334H720" stroke="#6687a2" strokeWidth="2" />
      <circle cx={point.x} cy="300" r="14" fill="#ffd3a6" stroke="#ff755f" strokeWidth="5" />
      <circle cx={point.turn} cy="170" r="14" fill="#f3f5f7" stroke="#ff755f" strokeWidth="5" />
      <rect x="64" y="58" width="250" height="76" fill="#102c48" stroke="#6687a2" />
      <rect x="284" y="260" width="244" height="80" fill="#102c48" stroke="#6687a2" />
      <rect x="504" y="130" width="232" height="80" fill="#ff755f" />
      <text x="84" y="87" fill="#9fb4c6" fontSize="14" letterSpacing="2">INPUT</text><text x="84" y="112" fill="white" fontSize="20">{intake}</text>
      <text x="304" y="290" fill="#9fb4c6" fontSize="14" letterSpacing="2">CONTROL</text><text x="304" y="318" fill="white" fontSize="20">{process}</text>
      <text x="524" y="160" fill="#071b31" fontSize="14" letterSpacing="2">OUTPUT</text><text x="524" y="188" fill="#071b31" fontSize="20">{output}</text>
    </svg>
  </div>;
}
