import { WavyBackground } from "@/app/components/ui/wavy-background";
export default function Hero() {
  return (
    <WavyBackground className="max-w-4xl mx-auto pb-40">
      <p className="text-2xl md:text-4xl lg:text-7xl text-white font-bold inter-var text-center">
        Hello, I&apos;m William
      </p>
      <p className="text-base md:text-lg mt-4 text-white font-normal inter-var text-center">
        I&apos;m a Student at the University of Washington, specializing in Data
        Analytics / Engineering
      </p>
    </WavyBackground>
  );
}
