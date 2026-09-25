import { mono, newsreader } from "@/app/fonts";

const X0 = 2.25;
const X1 = 3.55;
const Y0 = 41.55;
const Y1 = 42.62;
const W = 1000;
const H = 1109;
const LAND =
  "M609.8,0L612.4,33.8L616.8,68L627.8,81.4L644.2,88.9L665.1,93.4L682.6,99.3L689.2,109.7L689.2,121.6L687,133.5L692.5,143.9L700.2,151.3L712.2,170.7L716.6,193L714.4,210.8L707.8,233.1L711.1,249.5L711.1,267.3L721,282.1L734,292.5L751.1,289.4L769.1,288.7L779.2,303.2L784.5,303.2L792.8,295.3L802.8,297.2L821.3,309.7L803.1,346.1L800.3,356.4L797.7,372.2L791.8,379.7L784.9,385.5L779.2,396.1L767,390.1L738.5,396.3L714.4,385.9L707.8,375.6L693.5,378.5L677.1,396.3L668.3,418.5L667.3,455.4L666.5,480.7L671.1,499.3L683.5,512.6L710.1,528.8L724.8,548.6L741.9,574.1L740.8,586.9L730.6,597L727.6,610.6L732,626.8L736.1,648.3L736.8,655.2L739.9,660.8L754.3,672.8L758.2,680.5L755.5,700.7L736.5,733.9L726.8,760.4L714.3,773.9L692.4,804.7L666.8,802.5L637.4,824.1L630,852.5L607.9,865.1L539.2,919.3L525.4,941.8L500.7,947.7L482.5,952.6L462.4,957.6L454,960.2L450.4,962.3L438.6,973.2L436.2,977.7L433.2,985.2L425.9,986.9L416.9,986.6L406.5,1010.7L309.1,1052.1L186.3,1109L0,1109L0,0L304.9,-0.7Z";
const BORDER =
  "M525.9,156.4L550.8,166M487.8,178.3L500.6,176.1L525.9,156.4M563.9,157.3L572.1,159.1L594.6,159.7L599.7,161.1L604.6,172.6L610.7,182.4L618.1,190.3L627.4,196.2L643.2,201.2L662.8,203.5M550.8,166L563.9,157.3M474.6,177.8L487.8,178.3M398.3,219.6L414.3,217L426.6,209.2L449.8,186.5L462.2,179.2L474.6,177.8M662.8,203.5L682.9,202.5L716.1,196.8M21.1,199.7L42.6,211.9L51.8,219.5L96.6,240.7L120.5,245.9L132.7,246.5L138.4,263.4L150.5,279.6L165.3,291.4L179.6,295.2L195.1,304L203.7,306.9M368.1,214.9L398.3,219.6M296.5,294.2L317.1,293L316.8,288.5L307.2,277.7L300.2,257.8L306.4,248.9L338.8,223.1L352.4,216.1L368.1,214.9M244.2,278.9L279.6,291L296.5,294.2M203.7,306.9L211.8,306.7L216.9,301.6L223.4,284.8L229.3,279.3L244.2,278.9";
const TOWNS: [string, number, number, "start" | "end", number, number, number][] = [
  ["Figueres", 2.9622, 42.2662, "start", 22, -18, 1],
  ["Girona", 2.8214, 41.9794, "end", -22, 14, 1],
  ["Cadaqués", 3.277, 42.2888, "start", 20, 8, 0],
  ["Roses", 3.1764, 42.2619, "start", 20, -14, 0],
  ["Llançà", 3.1531, 42.3631, "start", 20, 7, 0],
  ["Portbou", 3.1597, 42.4258, "start", 20, 7, 0],
  ["La Jonquera", 2.8758, 42.4194, "end", -20, 7, 0],
  ["Besalú", 2.6994, 42.1997, "end", -20, 7, 0],
  ["Banyoles", 2.7663, 42.1198, "end", -20, 7, 0],
  ["Olot", 2.49, 42.1818, "end", -20, 7, 0],
  ["L'Escala", 3.1327, 42.1233, "start", 20, 7, 0],
  ["Begur", 3.2075, 41.9542, "start", 20, 7, 0],
  ["Lloret de Mar", 2.8452, 41.7005, "end", -20, 7, 0],
  ["Blanes", 2.7903, 41.6748, "end", -20, 7, 0],
];
const ORDIS: [number, number] = [2.8767, 42.2478];

const mercator = (latitude: number) => Math.log(Math.tan(Math.PI / 4 + (latitude * Math.PI) / 360));
const yTop = mercator(Y1);
const yBottom = mercator(Y0);
const px = (longitude: number) => ((longitude - X0) / (X1 - X0)) * W;
const py = (latitude: number) => ((yTop - mercator(latitude)) / (yTop - yBottom)) * H;
const kmPerPx = (111.32 * Math.cos((42.25 * Math.PI) / 180)) / (W / (X1 - X0));

export function EmpordaMap() {
  const ox = px(ORDIS[0]);
  const oy = py(ORDIS[1]);
  const seaX = px(3.4);
  const seaY = py(41.95);
  const scaleX = px(2.34);
  const scaleY = py(41.62);
  const bar = 25 / kmPerPx;
  const serif = newsreader.style.fontFamily;
  const sans = mono.style.fontFamily;

  return (
    <svg className="block h-auto w-full bg-[#e6d5b6]" viewBox={`0 0 ${W} ${H}`} role="img" aria-label="Mapa de l'Alt Empordà amb Ordis al centre">
      <rect x="0" y="0" width={W} height={H} fill="#e6d5b6" />
      <path d={LAND} fill="#faf2e4" />
      <path d={LAND} fill="none" stroke="#1c1815" strokeWidth="2.4" strokeLinejoin="round" />
      <path d={BORDER} fill="none" stroke="#a98456" strokeWidth="2.2" strokeDasharray="12 9" />
      {[10, 25, 50].map((km) => {
        const radius = km / kmPerPx;
        return (
          <g key={km}>
            <circle cx={ox} cy={oy} r={radius} fill="none" stroke="#c9a87a" strokeWidth="2" strokeDasharray="4 10" opacity="0.9" />
            <text x={ox} y={oy - radius - 10} textAnchor="middle" fill="#a98456" fontFamily={sans} fontSize="20" letterSpacing="2.8">
              {km} km
            </text>
          </g>
        );
      })}
      <text x={seaX} y={seaY} textAnchor="middle" fill="#a98456" opacity="0.72" fontFamily={serif} fontSize="40" letterSpacing="8.8" transform={`rotate(-62 ${seaX} ${seaY})`}>
        MEDITERRANI
      </text>
      <text x={px(2.6)} y={py(42.57)} fill="#a98456" fontFamily={sans} fontSize="22" letterSpacing="4.4">
        FRANÇA
      </text>
      {TOWNS.map(([name, longitude, latitude, anchor, dx, dy, big]) => (
        <g key={name}>
          <circle cx={px(longitude)} cy={py(latitude)} r={big ? 9 : 6} fill="#1c1815" />
          <text
            x={px(longitude) + dx}
            y={py(latitude) + dy}
            textAnchor={anchor}
            fill={big ? "#1c1815" : "#3a342d"}
            fontFamily={big ? serif : sans}
            fontSize={big ? 38 : 22}
            letterSpacing={big ? 0 : 1.3}
          >
            {big ? name : name.toUpperCase()}
          </text>
        </g>
      ))}
      <g>
        <circle cx={ox} cy={oy} r="30" fill="none" stroke="#b1583a" strokeWidth="2.4" opacity="0.55" />
        <circle cx={ox} cy={oy} r="13" fill="#b1583a" />
        <text x={ox - 30} y={oy + 12} textAnchor="end" fill="#1c1815" fontFamily={serif} fontSize="44">
          Ordis
        </text>
        <text x={ox - 30} y={oy - 26} textAnchor="end" fill="#b1583a" fontFamily={sans} fontSize="20" letterSpacing="3.2">
          CAN JOAN
        </text>
      </g>
      <path d={`M${scaleX},${scaleY}h${bar}`} stroke="#1c1815" strokeWidth="2.6" />
      <path d={`M${scaleX},${scaleY - 8}v16M${scaleX + bar},${scaleY - 8}v16`} stroke="#1c1815" strokeWidth="2.6" />
      <text x={scaleX} y={scaleY - 18} fill="#a98456" fontFamily={sans} fontSize="20" letterSpacing="2.8">
        25 KM
      </text>
    </svg>
  );
}
