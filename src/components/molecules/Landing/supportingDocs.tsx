import { Container } from "@/components/Template";
import { SUPPORTING_DOCS_LIST } from "@/constants/supportingDocsList";
import { motion } from "framer-motion";
import Image from "next/image";

export function SupportingDocs() {
  return (
    <div>
      <Container className="flex flex-col gap-10">
        {SUPPORTING_DOCS_LIST.map((el) => (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: false }}
            transition={{
              ease: "easeInOut",
              duration: 1.5,
              x: { duration: 1 },
            }}
            key={el.title}
          >
            <div className="flex justify-between items-center" key={el.title}>
              <div>
                <div className="text-[22px] font-medium">{el.title}</div>
                <div className="w-full whitespace-pre-line text-[16px] mt-3">
                  {el.description}
                </div>
              </div>
              <Image src={el.img} alt="IMG" width={500} height={500} />
            </div>
          </motion.div>
        ))}
      </Container>
    </div>
  );
}
