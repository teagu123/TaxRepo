import { PriceListType } from "@/constants/priceList";
import { div } from "framer-motion/client";
import { Check } from "lucide-react";
import { Button } from "../button/button";
import Image from "next/image";
import { MS_FORM_URL } from "@/constants/redirect_url";

export function PriceCard({ plan }: { plan: PriceListType }) {
  return (
    <article
      className={`p-5 relative flex h-full flex-col gap-5 hover:scale-105 hover:shadow-pwc-orange-300 hover:shadow-xl transition-transform duration-300 shadow-md justify-between overflow-hidden rounded-2xl  bg-pwc-white`}
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
        <span className="text-[32px]  text-pwc-black font-bold  leading-none ">
          맞춤형 플랜
        </span>
      ) : (
        <div className=" flex items-end gap-2 text-[#8B91A0] text-[14px] ">
          <span>연</span>
          <span className="text-[32px]  text-pwc-black font-bold  leading-none">
            {plan.won}
          </span>
          <span>만원</span>
        </div>
      )}

      {plan.name !== "Custom" && (
        <span className="text-pwc-orange-500 rounded-[8px] flex flex-col items-center bg-pwc-gray-50 p-3 border border-pwc-orange-300">
          <div className="text-[12px] text-pwc-white rounded-[13px] bg-pwc-orange-500 px-2 py-0.5 font-normal">
            + {plan.bonus} 보너스
          </div>
          <div className="text-[14px] font-semibold">
            총 <span className="text-[20px] font-bold ">{plan.credit}</span>{" "}
            크레딧
          </div>
        </span>
      )}

      <div
        className={`font-medium text-[14px] ${
          plan.name === "Custom" && "mt-4"
        }`}
      ></div>

      {plan.name === "Custom" && (
        <>
          <div className="flex items-center">
            <Check size={16} className="text-pwc-orange-500 mr-2" />
            <div>맞춤형 가격 플랜</div>
          </div>

          <a href={MS_FORM_URL} target="_blank" rel="noopener noreferrer">
            <Button className="w-full">이용문의</Button>
          </a>
        </>
      )}
    </article>
  );
}
