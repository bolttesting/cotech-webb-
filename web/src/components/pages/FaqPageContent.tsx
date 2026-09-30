const FAQ_ITEMS: { question: string; answer: string; defaultOpen?: boolean }[] = [
  {
    question: "What is the Blueprint?",
    answer:
      "The Blueprint is a paid scoping phase. We review your current funnel, tools, process gaps, and goals, then recommend the clearest build path, scope, and priorities.",
    defaultOpen: true,
  },
  {
    question: "Are fees fixed before build?",
    answer:
      "Yes for scoped projects. Once the scope is agreed, the build is priced as a fixed deliverable rather than an open-ended time block.",
  },
  {
    question: "How are fees confirmed?",
    answer:
      "After the free scoping call, a Blueprint locks the deliverables and fee in writing. Build does not start until you approve that proposal.",
  },
  {
    question: "Who do you fit best?",
    answer:
      "We fit teams that already have demand or operational complexity and want a clearer system behind it. We are usually most useful when the pain is process, follow-up, reporting, or manual admin.",
  },
  {
    question: "Is there a warranty?",
    answer:
      "Yes. Scoped builds include a 30-day warranty for launch-related bugs within the agreed deliverable.",
  },
  {
    question: "Can we work over WhatsApp in the UAE?",
    answer:
      "Yes. WhatsApp can be used for practical communication and coordination, while final scope, approvals, and delivery decisions should still be documented clearly.",
  },
  {
    question: "Do you offer support retainers?",
    answer:
      "Yes. Retainers are a good fit after go-live when you need continuous optimization, reporting support, CRM changes, new automations, or small follow-on builds.",
  },
];

function FaqChevronIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill="none"
      className="stroke-secondary size-4 transition-transform duration-500 group-data-[expend=true]/faq:rotate-180"
    >
      <path d="M13 6L8 11L3 6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function FaqAccordionItem({
  question,
  answer,
  defaultOpen,
}: {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}) {
  return (
    <div
      data-faq-item
      {...(defaultOpen ? { "data-default-open": "true" } : {})}
      className="group/faq bg-background-1 rounded-[20px] border border-transparent px-8 transition-[border-color] duration-300 data-[expend=true]:border-stroke-2"
    >
      <h3 className="w-full">
        <button
          type="button"
          data-faq-action
          className="text-secondary flex w-full cursor-pointer items-center justify-between gap-4 pt-8 pb-8 text-left transition-all duration-500 ease-out data-[expend=true]:pb-4"
        >
          <span className="text-heading-6 flex-1 text-left font-normal">{question}</span>
          <span
            data-faq-icon
            className="border-stroke-3 flex size-7 shrink-0 items-center justify-center rounded border transition-all duration-500 data-[expend=true]:border-transparent data-[expend=true]:bg-white data-[expend=true]:shadow-[0_8px_6px_rgba(0,0,0,0.16)]"
          >
            <FaqChevronIcon />
          </span>
        </button>
      </h3>
      <div data-faq-content className="h-0 overflow-hidden">
        <div
          data-faq-text-reveal
          className="border-t-stroke-2 text-secondary/60 border-t pt-6 pb-8"
        >
          {answer}
        </div>
      </div>
    </div>
  );
}

export function FaqPageContent() {
  return (
    <main className="bg-background-13">
      <section
        className="cotech-page-hero pt-32 pb-[100px] sm:pt-36 md:pt-42 xl:pt-[180px]"
        aria-label="Frequently asked questions"
      >
        <div className="main-container">
          <div className="space-y-5 text-center">
            <div data-ns-animate data-delay="0.2" className="flex items-center justify-center">
              <div className="relative flex items-center justify-center gap-x-1 before:mr-2.5 before:block before:h-px before:w-11.5 before:bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,#000_100%)] before:opacity-50 before:content-[''] after:ml-2.5 after:block after:h-px after:w-11.5 after:bg-[linear-gradient(90deg,#000_0%,rgba(0,0,0,0)_100%)] after:opacity-50 after:content-['']">
                <span className="font-inter-tight text-tagline-2 font-normal text-secondary uppercase">
                  FAQ
                </span>
              </div>
            </div>
            <div className="space-y-3 text-center">
              <h1 data-ns-animate data-delay="0.3">
                Questions about working with COTech
              </h1>
              <p
                data-ns-animate
                data-delay="0.4"
                className="mx-auto max-w-[680px]"
              >
                Straight answers about the Blueprint, fixed-fee engagements, support, and what a
                typical build includes.
              </p>
            </div>
          </div>

          <div
            data-faq-accordion
            data-ns-animate
            data-delay="0.5"
            className="mx-auto mt-[70px] max-w-[850px] space-y-4"
          >
            {FAQ_ITEMS.map((item) => (
              <FaqAccordionItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                defaultOpen={item.defaultOpen}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
