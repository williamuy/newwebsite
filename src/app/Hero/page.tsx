import { WavyBackground } from "@/app/components/ui/wavy-background";
export default function Hero() {
  return (
    <WavyBackground>
      <h1 className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        <strong>Hello, I am William</strong>
      </h1>

      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        I&apos;m a student at the University of Washington
      </p>
    </WavyBackground>
  );
}
