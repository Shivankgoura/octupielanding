"use client";

import { useState } from "react";

type QA = { q: string; a: string };
type Group = { label: string; items: QA[] };

const groups: Group[] = [
  {
    label: "General",
    items: [
      {
        q: "Is there a free trial available?",
        a: "Every new user gets a 7-day free trial to fully explore Octupie. You can try it risk-free and cancel anytime during the trial to avoid being charged.",
      },
      {
        q: "Who is Octupie for?",
        a: "Anyone looking to grow faster on social media. Whether you're just starting out or scaling up, we take the guesswork out of content creation with proven viral frameworks.",
      },
      {
        q: "Do I have to connect my social media accounts?",
        a: "No — it's totally optional. You'll still get plenty of value without connecting them, but syncing accounts helps us tailor insights even better.",
      },
      {
        q: "How much does Octupie cost?",
        a: "Plans start at $39/month when billed annually on the Pro plan. See the pricing section above for a full breakdown.",
      },
      {
        q: "What are the usage limitations on my plan?",
        a: "You get credits every month. Credits go towards analyzing videos, writing scripts, and submitting new channels. Each action costs 1 credit.",
      },
      {
        q: "How many creators can I track?",
        a: "50 on Pro, 100 on Visionary, and up to 1,000 on Titan.",
      },
    ],
  },
  {
    label: "Billing",
    items: [
      {
        q: "Can I switch between plans?",
        a: "Absolutely. You can upgrade or downgrade your plan anytime.",
      },
      {
        q: "How do I cancel my subscription?",
        a: "Head to Settings and open the billing portal to cancel anytime.",
      },
      {
        q: "What's your refund policy?",
        a: "All new users get a 7-day free trial with full functionality. We don't offer refunds on subscription plans after the trial.",
      },
      {
        q: "Can I pause my subscription temporarily?",
        a: "Not at the moment. If you need a break, cancel and re-subscribe when you're ready.",
      },
    ],
  },
  {
    label: "Account",
    items: [
      {
        q: "I haven't received my verification email — what should I do?",
        a: "Email support@octupie.com and we'll help you out.",
      },
      {
        q: "How do I create an account?",
        a: "Click Try It For Free and sign up with email or Google/Apple — that's it.",
      },
      {
        q: "How do I reset my password?",
        a: "Click Forgot password on the login screen and follow the steps.",
      },
      {
        q: "Can I change the email address on my account?",
        a: "This feature isn't available yet.",
      },
      {
        q: "How do I enable two-factor authentication (2FA)?",
        a: "We don't support 2FA yet, but you can use passkeys for extra account security.",
      },
    ],
  },
];

export function Faq() {
  const [tab, setTab] = useState(0);
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[900px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl leading-tight tracking-tight text-white md:text-[56px]">
            Still have questions?
          </h2>
          <a
            href="mailto:support@octupie.com"
            className="mt-4 inline-flex items-center gap-2 text-sm text-[#4C61FF] transition hover:text-white"
          >
            Contact Us →
          </a>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="relative inline-flex items-center gap-1 rounded-full border border-white/10 bg-[#040E22] p-1">
            {groups.map((g, i) => (
              <button
                key={g.label}
                onClick={() => {
                  setTab(i);
                  setOpenIdx(0);
                }}
                className={[
                  "rounded-full px-5 py-2 text-sm transition",
                  tab === i
                    ? "bg-[#15223C] text-white shadow-[inset_0_2px_4px_rgba(255,255,255,0.12)]"
                    : "text-white/70 hover:text-white",
                ].join(" ")}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 space-y-3">
          {groups[tab].items.map((item, i) => {
            const open = openIdx === i;
            return (
              <div
                key={item.q}
                className="overflow-hidden rounded-2xl border border-white/10 bg-[#040E22]"
              >
                <button
                  className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left"
                  onClick={() => setOpenIdx(open ? null : i)}
                  aria-expanded={open}
                >
                  <span className="font-heading text-base text-white md:text-lg">
                    {item.q}
                  </span>
                  <span
                    aria-hidden
                    className={[
                      "inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/80 transition",
                      open ? "rotate-45" : "",
                    ].join(" ")}
                  >
                    +
                  </span>
                </button>
                <div
                  className={[
                    "grid transition-[grid-template-rows] duration-300 ease-out",
                    open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
                  ].join(" ")}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-5 text-sm leading-relaxed text-white/70">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
