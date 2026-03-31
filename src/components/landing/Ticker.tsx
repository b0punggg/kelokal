export function Ticker() {
  const text =
    "38.000++ pengunjung   •   42 tenant   •   45.000++ produk terjual   •   Gabung di Kelokal Event!";

  return (
    <div className="bg-[#00adef] py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marquee whitespace-nowrap">
          <span className="px-8">{text}</span>
          <span className="px-8">{text}</span>
          <span className="px-8">{text}</span>
        </div>
      </div>
    </div>
  );
}
