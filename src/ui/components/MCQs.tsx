import { ChoiceType, MCQType } from "../../constants/types/index";

export default function MCQs({ data }: { data: MCQType[] }) {
  return (
    <div>
      {data.map((mcq) => (
        <div className="mb-4" key={mcq.id}>
          <div className="mb-4 font-bold">{mcq.statement}</div>
          <div className="flex flex-col items-start gap-3">
            {mcq.choices.map((choice, index) => (
              <Choice {...choice} key={index} index={index + 1} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export function Choice(props: ChoiceType) {
  return (
    <details className="[&:not(:first-child)]:_mt-4 _rounded _border _border-gray-200 _bg-white _p-2 _shadow-sm dark:_border-neutral-800 dark:_bg-neutral-900 _overflow-hidden">
      <summary className="nextra-focus _flex _items-center _cursor-pointer _p-1 _transition-colors hover:_bg-gray-100 dark:hover:_bg-neutral-800 [&::-webkit-details-marker]:_hidden _whitespace-pre-wrap _select-none">
        {props?.index}. {props.answer}
        <svg
          viewBox="0 0 24 24"
          stroke="currentColor"
          fill="none"
          stroke-width="3"
          className="_order-first _h-4 _shrink-0 _mx-1.5 motion-reduce:_transition-none rtl:_rotate-180 [[data-expanded]&gt;summary:first-child&gt;&amp;]:_rotate-90 _transition"
        >
          <path
            d="M9 5l7 7-7 7"
            stroke-linecap="round"
            stroke-linejoin="round"
          ></path>
        </svg>
      </summary>

      <div
        className="_transform-gpu _transition-all _ease-in-out motion-reduce:_transition-none _opacity-0 _overflow-hidden"
        style={{ transitionDuration: "500s" }}
      >
        <div>{props.reason}</div>
      </div>
    </details>
  );
}
