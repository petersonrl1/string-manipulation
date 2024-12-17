import BinaryTreeInput from "@/components/BinaryTreeInput";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] max-w-[900px] mx-auto">
      <main className="flex flex-col gap-8 row-start-2 items-center">
        <div className="text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)] flex flex-col gap-6">
          <div>
            In the text area below, add a string delimited with parentheses and
            commas, something like this: <i>id, name(email), type(id, name, customFields(c1, c2,
              c3(hello(hello again)))), externalId</i>
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
