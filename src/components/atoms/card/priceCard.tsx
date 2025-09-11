import { PriceListType } from "@/constants/priceList";

export function PriceCard({ plan }: { plan: PriceListType }) {
  console.log(plan);
  return (
    <article
      className={
        "group relative flex h-full flex-col overflow-hidden rounded-2xl border bg-pwc-white transition border-pwc-orange-300 shadow-[0_10px_30px_rgba(253,81,8,0.12)]"
      }
      aria-label={`${plan.name} 요금 카드`}
    >
      <div className="pointer-events-none absolute right-3 top-3"></div>

      <header className="p-5">
        <h3 className="text-[17px] font-semibold text-pwc-black">
          {plan.name}
        </h3>
        <div className="mt-2 flex items-end gap-2">
          <span className="text-3xl font-bold text-pwc-black">
            {typeof plan.won === "number" ? `${plan.won}원` : plan.won}
          </span>

          <span className="mb-[2px] text-sm text-pwc-gray-500">/ 년</span>
        </div>
      </header>

      <div className="mx-5 border-t border-pwc-gray-200" />

      <div className="flex flex-col gap-3 p-5">
        <div className="grid grid-cols-2 gap-2">
          <div className="rounded-lg border border-pwc-gray-200 bg-pwc-gray-50 px-3 py-2">
            <p className="text-xs text-pwc-gray-500">크레딧</p>
            <p className="text-base font-semibold text-pwc-black">
              {plan.credit}
            </p>
          </div>
          {plan.bonus !== undefined && (
            <div className="rounded-lg border border-pwc-orange-200 bg-pwc-orange-100 px-3 py-2">
              <p className="text-xs text-pwc-gray-500">보너스</p>
              <p className="text-base font-semibold text-pwc-black">
                {plan.bonus}
              </p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}
