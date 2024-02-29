import { WavyBackground } from "@/app/components/ui/wavy-background";
export default function Hero() {
  return (
    <>
      <WavyBackground>
        <div className="p-[1.7rem] max-w-7xl flex flex-col mx-auto relative z-10  w-full md:pt-0 md:mt-10 text-center">
          <h1 className="text-[3.3rem] md:text-[5.4rem] leading-[1] font-bold md:text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-200 bg-opacity-50 font-poppins">
            Hi, I&apos;m William <br className="hidden md:block" /> a data
            enthusiast.
          </h1>
          <p className="mt-8 font-normal text-[18px] md:text-[21px] text-neutral-100 md:max-w-[50%] tracking-wide md:text-center mx-auto font-outfit">
            I&apos;m currently a student at the University of Washington, where
            I specialize in Data Science, Analytics, and Engineering 🚀
          </p>
          <a>
            <button className="inline-flex h-12 w-fit mt-8 md:mx-auto  animate-shimmer items-center justify-center rounded-md border border-slate-500 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 font-poppins">
              Lets Connect and Chat!
            </button>
          </a>
        </div>
      </WavyBackground>
    </>
  );
}
