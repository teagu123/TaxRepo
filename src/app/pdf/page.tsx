// app/pdf/page.tsx
export default function PdfPage() {
	return (
		<main className="h-[calc(100dvh-4rem)] overflow-hidden">
			{/* 안쪽만 스크롤 가능 */}

			<div className="h-full w-full">
				<iframe
					src="/pdf/sample.pdf#view=FitH&pagemode=none"
					title="PDF preview"
					className="h-full w-full"
				/>
			</div>
		</main>
	)
}
