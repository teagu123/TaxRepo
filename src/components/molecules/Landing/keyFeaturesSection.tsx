import { Container } from "@/components/Template";
import { motion } from "framer-motion";
import { KEY_FEATURE_LIST } from "@/constants/keyFeaturesList";
import { PromptEnhancer } from "@/components/atoms/card/promptEnhancer";

export function KeyFeaturesSection() {
  return (
    <div>
      <Container className="flex flex-col gap-10">
        <div className="text-[28px] flex flex-col` font-medium">
          Key Features
        </div>
        {KEY_FEATURE_LIST.map((el) => (
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
            <div className="flex items-center gap-8 " key={el.title}>
              <div className="flex-1">
                <div className="text-[24px] font-medium ">{el.title}</div>
                <div className="w-full whitespace-pre-line text-[18px] mt-3">
                  {el.description}
                </div>
              </div>
              <div className="flex-1">
                <PromptEnhancer
                  IMAGES={[
                    "/images/supportingdocs/grid2.svg",
                    "/images/supportingdocs/grid3.svg",
                    "/images/supportingdocs/grid4.svg",
                  ]}
                />
              </div>
            </div>
          </motion.div>
        ))}
      </Container>
    </div>
  );
}
