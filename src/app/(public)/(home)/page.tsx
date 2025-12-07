import { LightRays } from "@/components/ui/light-rays";

export default function Home() {
  return (
    <section className="py-16">
      <div className="flex flex-col items-center gap-4 max-w-2xl">
        <h1 className="text-4xl font-bold text-center text-balance">
          Build{" "}
          <span className="italic bg-linear-to-r from-primary to-destructive bg-clip-text text-transparent">
            stronger{" "}
          </span>
          digital connections
        </h1>
        <span className="text-lg text-center text-balance">
          Use our URL shortener and QR Codes to engage your audience and connect
          them to the right information. Build, edit, and track everything
          inside the zigg.
        </span>
      </div>
      <LightRays />
    </section>
  );
}
