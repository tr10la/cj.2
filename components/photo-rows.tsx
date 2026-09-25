function flexFor(ar: number) {
  if (ar >= 1.6) return "min-[641px]:flex-[1.7778_1_0]";
  if (ar >= 1.4) return "min-[641px]:flex-[1.5004_1_0]";
  if (ar >= 1.1) return "min-[641px]:flex-[1.3333_1_0]";
  return "min-[641px]:flex-[0.6665_1_0]";
}

export function PhotoRows({
  rows,
}: {
  rows: { src: string; alt: string; ar: number }[][];
}) {
  return (
    <div className="flex flex-col gap-2.5 min-[641px]:gap-3.5">
      {rows.map((row) => (
        <div key={row.map((photo) => photo.src).join()} className="flex flex-col gap-2.5 min-[641px]:flex-row min-[641px]:gap-3.5">
          {row.map((photo) => (
            <figure key={photo.src} className={`m-0 min-w-0 bg-[#efe1c8] max-[640px]:w-full ${flexFor(photo.ar)}`}>
              <img src={`/img/${photo.src}`} alt={photo.alt} loading="lazy" className="block h-auto w-full transition-opacity hover:opacity-90" />
            </figure>
          ))}
        </div>
      ))}
    </div>
  );
}
