export function TickerBottom() {
  const text =
    "Daftar sekarang   •   Ajak teman dan keluarga   •   Nikmati Kelokal Event bersama kami!";

  return (
    <div className="bg-[#000000] py-4 text-sm font-semibold uppercase tracking-[0.2em] text-white">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-marqueeReverse whitespace-nowrap">
          <span className="px-8">{text}</span>
          <span className="px-8">{text}</span>
          <span className="px-8">{text}</span>
        </div>
      </div>
    </div>
  );
}
