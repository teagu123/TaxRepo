import { PriceListType } from "@/constants/priceList";
import { div } from "framer-motion/client";
import { Check } from "lucide-react";
import { Button } from "../button/button";
import Image from "next/image";
import { MS_FORM_URL_INQUIRY } from "@/constants/redirect_url";

export function PriceCard({ plan }: { plan: PriceListType }) {
  return (
    <article
      className={`py-8 px-6 relative flex h-full flex-col hover:scale-105 hover:shadow-pwc-orange-300 hover:shadow-xl transition-transform duration-300 shadow-md justify-between overflow-hidden rounded-2xl  bg-pwc-white`}
      aria-label={`${plan.name} 요금 카드`}
    >
      <div className="flex  justify-between items-center">
        <div className="font-bold">{plan.name}</div>
        {plan.name === "Pro​" && (
          <Image
            src={"/images/priceImage/priceLabel.svg"}
            alt="label"
            width={50}
            height={40}
            className="absolute top-[-5px] right-2"
          />
        )}
      </div>

      {plan.name === "Custom" ? (
        <span className="text-[24px]  text-pwc-black font-bold  leading-none ">
          맞춤형 플랜
        </span>
      ) : (
        <div className=" flex items-end gap-2 text-[#8B91A0] text-[14px] mb-6">
          <span>연</span>
          <span className="text-[32px]  text-pwc-black font-bold  leading-none">
            {plan.won}
          </span>
          <span>만원</span>
        </div>
      )}

      {plan.name === "Custom" ? (
        <span className="text-pwc-orange-500 mt-9 rounded-[8px] flex flex-col items-center bg-pwc-gray-50  px-3 py-2 border border-pwc-orange-300 ">
          <div className="text-[14px] font-semibold">
            <span className="text-[20px] font-bold ">{plan.credit} </span>
            크레딧 초과
          </div>
        </span>
      ) : (
        <span className="text-pwc-orange-500 rounded-[8px] relative flex flex-col items-center bg-pwc-gray-50  p-3 border border-pwc-orange-300 ">
          <div className="text-sm font-bold text-[#303236] ">
            <div
              className={`text-center font-bold text-pwc-orange-500 text-xl ${
                plan!.totalCredit!.length >= 6 && "ml-1"
              }`}
            >
              {plan.totalCredit}
            </div>
            <div>{plan.credit} 크레딧</div>
            <Image
              src={"/images/priceImage/Line3.svg"}
              alt="line3"
              width={50}
              height={30}
              className="absolute bottom-5 left-9"
            />
          </div>
        </span>
      )}

      {plan.name !== "Custom" && (
        <div className="flex flex-col items-center  text-sm justify-center w-full  mt-6">
          <div className="flex items-center gap-2 justify-start  w-35  bg-red">
            <Check size={14} className="text-pwc-orange-500" /> 크레딧
            {" " + plan.bonus} 보너스
          </div>
          <div className="flex items-center justify-start   gap-2 w-35">
            <Check size={14} className="text-pwc-orange-500" />
            최대 사용자 {plan.maxUsers}명
          </div>
        </div>
      )}

      <div
        className={`font-medium text-[14px] ${
          plan.name === "Custom" && "mt-2"
        }`}
      ></div>

      {plan.name === "Custom" && (
        <>
          <a
            href={MS_FORM_URL_INQUIRY}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="w-full">이용문의</Button>
          </a>
        </>
      )}
    </article>
  );
}
