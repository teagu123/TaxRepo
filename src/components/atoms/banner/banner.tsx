import Image from "next/image";

export default function Banner() {
  return (
    <>
      <div className="relative w-full h-[70vh] overflow-hidden">
        <Image
          src="/images/main.jpg"
          alt="bannerImage"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_90%]"
        />

        {/* 중앙 텍스트 */}
        <div className="absolute inset-0 z-10 left-[8%] top-[20%] px-4">
          <p className="text-black text-2xl md:text-5xl font-semibold">
            삼일회계법인이 만든 세무전문 AI Agent
          </p>
        </div>
      </div>
    </>
  );
}
