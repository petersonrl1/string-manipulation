import BinaryTreeInput from "@/components/BinaryTreeInput";

export default function Home() {
  return (
    <div className="mx-auto grid min-h-screen max-w-[900px] grid-rows-[20px_1fr_20px] items-center justify-items-center gap-16 p-8 pb-20 font-[family-name:var(--font-geist-sans)] sm:p-20">
      <main className="row-start-2 flex flex-col items-center gap-8">
        <div className="flex flex-col gap-6 text-center font-[family-name:var(--font-geist-mono)] text-sm sm:text-left">
          <div>
            In the text area below, add a string delimited with parentheses and
            commas, something like this:
            <i>
              id, name(email), type(id, name, customFields(c1, c2,
              c3(hello(hello again)))), externalId
            </i>
          </div>
          <div>Click &quot;Generate Tree&quot; to see the transformation.</div>
          <div>Click &quot;Start Over&quot; to... well... you get it...</div>
        </div>
        <div>
          <BinaryTreeInput />
        </div>
      </main>
    </div>
  );
}
