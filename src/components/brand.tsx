import Image from "next/image";
import { assets } from "@/lib/assets";

export function Brandmark({ className = "h-7 w-7" }: { className?: string }) {
  return (
    <Image
      src={assets.brandmark}
      alt="Octupie"
      width={28}
      height={28}
      className={className}
      unoptimized
    />
  );
}

export function Wordmark({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <Brandmark />
      <span className="font-heading text-xl font-medium tracking-tight text-white">
        Octupie
      </span>
    </div>
  );
}
