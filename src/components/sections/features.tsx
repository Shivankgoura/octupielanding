import Image from "next/image";
import { assets } from "@/lib/assets";

type Feature = {
  title: string;
  body: string;
  image: string;
  tall?: boolean;
  wide?: boolean;
};

const features: Feature[] = [
  {
    title: "Discover successful channels in your niche",
    body: "Learn from their success and replicate those tactics in your next video.",
    image: assets.graphics.g1,
    wide: true,
  },
  {
    title: "Easily find winning videos from your favorite channels",
    body: "Explore a database with millions of validated outliers.",
    image: assets.graphics.g2,
  },
  {
    title: "Generate dozens of winning hooks in seconds",
    body: "Eliminate guesswork using hook templates backed by millions of views.",
    image: assets.featureImages.hooks,
  },
  {
    title: "Build a feed of top-performing channels for easy analysis",
    body: "Track any channel across Instagram, TikTok and YouTube in one place.",
    image: assets.graphics.g3,
  },
  {
    title: "Instantly download the transcript from any video",
    body: "Save time by referencing high-quality transcripts on demand.",
    image: assets.graphics.g4,
  },
  {
    title: "Write viral video scripts in seconds",
    body: "Use proven storytelling frameworks that drove billions of views.",
    image: assets.featureImages.scripts,
    wide: true,
  },
  {
    title: "Understand why the best videos went viral",
    body: "Get in-depth analysis of hooks, storytelling, formats and styles.",
    image: assets.graphics.g5,
  },
  {
    title: "Use projects to organize winning ideas",
    body: "Build collections of winning ideas to speed up your workflow.",
    image: assets.graphics.g6,
  },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-heading text-4xl leading-tight tracking-tight text-white md:text-[56px]">
            Everything you need to create
            <br className="hidden md:block" /> winning short-form videos
          </h2>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">
          {features.map((f, i) => (
            <article
              key={i}
              className={[
                "card-gradient-border group relative overflow-hidden rounded-2xl border border-white/10 bg-[#040E22] p-6 transition hover:bg-[#081433]",
                f.wide ? "md:col-span-2" : "",
              ].join(" ")}
            >
              <div className="relative mb-5 aspect-[16/10] overflow-hidden rounded-xl bg-gradient-to-br from-[#0a152c] to-[#040E22]">
                <Image
                  src={f.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition duration-500 group-hover:scale-[1.03]"
                  unoptimized
                />
              </div>
              <h3 className="font-heading text-xl leading-snug tracking-tight text-white md:text-[22px]">
                {f.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/65">
                {f.body}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
