export default function QuestionBox({ text }: { text: string }) {
  return (
    <div className="bg-[#EEEFF1] p-7 rounded-xl flex items-start gap-3 mb-1 shadow-md">
      <div className="text-white bg-black w-10 h-10 flex justify-center items-center pb-1 text-[20px] font-extrabold rounded-[50%]">
        Q
      </div>
      <div className="text-[14px]">{text}</div>
    </div>
  );
}
