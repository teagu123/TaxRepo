import { Container } from "@/components/Template";
import { SUPPORTING_DOCS_LIST } from "@/constants/supportingDocsList";
import { motion } from "framer-motion";
import Image from "next/image";

export function WhyChooseTax() {
  return (
    <div>
      <Container className="flex flex-col gap-10">
        <div className="text-[28px] font-medium">Why Choose Tax Agent</div>
        {SUPPORTING_DOCS_LIST.map((el) => (
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
            <div className="flex items-center gap-8" key={el.title}>
              <div className="flex-1">
                <div className="text-[24px] font-medium ">{el.title}</div>
                <div className="w-full whitespace-pre-line text-[18px] mt-3">
                  {el.description}
                </div>
              </div>
              <Image
                src={el.img}
                alt="IMG"
                width={500}
                height={500}
                className="flex-1"
              />
            </div>
          </motion.div>
        ))}
      </Container>
    </div>
  );
}
