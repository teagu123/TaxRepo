import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import { Container } from "@/components/Template";
import { SUPPORTING_DOCS_LIST } from "@/constants/supportingDocsList";
import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/utils/cn";

export function WhyChooseTax() {
  return (
    <section>
      <Container className="flex flex-col gap-12 sm:gap-16">
        <H1Txt classname="text-[24px] sm:text-[28px] lg:text-[32px] mb-2">
          Why Choose Tax Agent
        </H1Txt>

        <ul className="flex flex-col gap-12 sm:gap-16">
          {SUPPORTING_DOCS_LIST.map((el, i) => (
            <motion.li
              key={el.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{
                once: false,
                amount: 0.35,
                margin: "-64px 0px -64px 0px",
              }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="grid grid-cols-1 lg:grid-cols-2 items-center gap-6 lg:gap-12"
            >
              {/* 텍스트 */}
              <div
                className={cn(
                  "order-2 lg:order-1",
                  i % 2 === 1 && "lg:order-2" // 짝수행에서 순서 반전
                )}
              >
                <h3 className="text-[20px] sm:text-[22px] lg:text-[24px] font-semibold">
                  {el.title}
                </h3>
                <p className="mt-3 text-[16px] sm:text-[17px] lg:text-[18px] leading-relaxed whitespace-pre-line">
                  {el.description}
                </p>
              </div>

              {/* 이미지 */}
              <div
                className={cn(
                  "order-1 lg:order-2",
                  i % 2 === 1 && "lg:order-1" // 짝수행에서 순서 반전
                )}
              >
                <Image
                  src={el.img}
                  alt={el.title}
                  width={560}
                  height={420}
                  className="w-full h-auto max-w-[560px] mx-auto object-contain"
                  sizes="(min-width: 1024px) 560px, 100vw"
                  priority={i === 0}
                />
              </div>
            </motion.li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
