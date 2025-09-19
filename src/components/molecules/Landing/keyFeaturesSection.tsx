import { Container } from "@/components/Template";
import { motion } from "framer-motion";
import { KEY_FEATURE_LIST } from "@/constants/keyFeaturesList";
import { PromptEnhancer } from "@/components/atoms/card/promptEnhancer";
import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import TaxLawsMarquee from "@/components/atoms/card/carouselCard";
import Image from "next/image";
export function KeyFeaturesSection() {
  return (
    <div>
      <Container className="flex flex-col ">
        <H1Txt classname="text-[28px] sm:text-[32px] lg:text-[36px]">
          주요 기능
        </H1Txt>
        <div className="flex flex-col  gap-30 md:gap-10">
          {KEY_FEATURE_LIST.map((el, idx) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: false }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
                x: { duration: 1 },
              }}
              key={el.title}
            >
              <div
                className={`flex flex-col md:flex-row   md:justify-between md:gap-8  `}
                key={el.title}
              >
                <div className="md:flex-1 p-3  mb-3 md:mb-0 flex flex-col justify-center">
                  <div className="text-[18px] md:text-[24px] font-medium">
                    <div className="flex items-center gap-3">
                      <Image
                        src={el.icon}
                        alt={el.icon}
                        width={30}
                        height={30}
                        className="text-red-300"
                      />
                      {el.title}
                    </div>
                  </div>
                  <div className=" ml-11 whitespace-pre-line text-[15px] md:text-[18px] mt-3 break-keep">
                    {el.description}
                  </div>
                </div>
                <div className="flex-1 w-full h-full aspect-[600/480]">
                  {idx === 0 ? (
                    <TaxLawsMarquee />
                  ) : (
                    <PromptEnhancer IMAGES={el.supportImg ?? []} />
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </div>
  );
}
