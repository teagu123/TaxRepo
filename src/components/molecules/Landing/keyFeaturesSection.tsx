import { Container } from "@/components/Template";
import { motion } from "framer-motion";
import { KEY_FEATURE_LIST } from "@/constants/keyFeaturesList";
import { PromptEnhancer } from "@/components/atoms/card/promptEnhancer";
import H1Txt from "@/components/atoms/H1Txt/H1Txt";
import TaxLawsMarquee from "@/components/atoms/card/carouselCard";
export function KeyFeaturesSection() {
  return (
    <div>
      <Container className="flex flex-col gap-0 md:gap-10">
        <H1Txt classname="text-[25px] sm:text-[28px] lg:text-[32px]  mb-10 md:mb-0">
          Key Features
        </H1Txt>
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
              className={`flex flex-col md:flex-row min-h-[480px]  justify-between`}
              key={el.title}
            >
              <div className="md:flex-1 p-3  mb-3 md:mb-0 flex flex-col justify-center">
                <div className="text-[18px] md:text-[24px] font-medium">
                  {el.title}
                </div>
                <div className="w-full whitespace-pre-line text-[15px] md:text-[18px] mt-3">
                  {el.description}
                </div>
              </div>
              <div className="flex-1  flex items-center justify-center">
                {idx === 0 ? (
                  <TaxLawsMarquee />
                ) : (
                  <PromptEnhancer
                    IMAGES={[
                      "/images/supportingdocs/test.svg",
                      "/images/supportingdocs/test2.svg",
                      "/images/supportingdocs/test3.svg",
                    ]}
                  />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </Container>
    </div>
  );
}
