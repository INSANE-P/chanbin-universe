// 무대 상단 양쪽의 스포트라이트 조명 기구. 렌즈가 은은하게 숨쉬듯 밝아져요.

function Lamp() {
  return (
    <svg width="86" height="72" viewBox="0 0 86 72">
      <rect x="32" y="0" width="6" height="14" fill="#171326" />
      <g transform="rotate(26 40 34)">
        <rect x="14" y="20" width="46" height="26" rx="8" fill="#2a2333" />
        <rect x="14" y="20" width="46" height="8" rx="4" fill="#3a3147" />
        <ellipse cx="63" cy="33" rx="8" ry="12" fill="#f7d98c" className="lamp-glow" />
      </g>
    </svg>
  );
}

export default function StageLamps() {
  return (
    <div className="lamps" aria-hidden>
      <div className="lamp left">
        <Lamp />
      </div>
      <div className="lamp right">
        <Lamp />
      </div>
    </div>
  );
}
