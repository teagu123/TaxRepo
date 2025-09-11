export function PriceBespokeCard() {
  return (
    <div>
      <article
        className={
          "group mt-5 relative flex h-full flex-col overflow-hidden rounded-2xl border bg-pwc-white transition border-pwc-orange-300 shadow-[0_10px_30px_rgba(253,81,8,0.12)]"
        }
        aria-label={`요금 카드`}
      >
        <div className="pointer-events-none absolute right-3 top-3"></div>

        <header className="p-5">
          <h3 className="text-[17px] font-semibold text-pwc-black">BESPOKE</h3>

          <p className="mt-6 text-xs leading-6 text-pwc-text-gray">
            계약기간 중 Credit 충전이 필요한 경우 100 Credit 단위로 충전할 수
            있고, 100 Credit 당 충전가격은 150,000원입니다. ​
          </p>
        </header>
      </article>

      <p className="mt-6 text-[15px]">
        계약기간 중 Credit 충전이 필요한 경우 100 Credit 단위로 충전할 수 있고,
        100 Credit 당 충전가격은 150,000원입니다. ​
      </p>
    </div>
  );
}
