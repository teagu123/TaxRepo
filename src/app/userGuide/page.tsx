// app/pdf/page.tsx
export default function PdfPage() {
  return (
    <main className="h-[calc(100dvh-4rem)] overflow-hidden flex justify-center items-center">
      {/* 안쪽만 스크롤 가능 */}

      <div className="h-[80vh] w-[80vw] shadow-xl">
        <iframe
          src="/pdf/sample.pdf#view=FitH&pagemode=none"
          title="PDF preview"
          className="h-full w-full"
        />
      </div>
    </main>
  );
}
