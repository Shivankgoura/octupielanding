import { OctupieLogo } from "@/components/logo";

export function Brandmark({ className = "h-7 w-7" }: { className?: string }) {
  return <OctupieLogo className={className} />;
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
