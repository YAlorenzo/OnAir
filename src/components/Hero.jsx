import { heroMobile } from "../assets"


function Hero() {
  return (
    <section className="heroBackGround sm:h-[630px]">
      <img src={heroMobile} alt="img" className="w-full block sm:hidden" />
        <div className="fix-container flex flex-col justify-center sm:h-full">
       <h1 className="text-white text-2xl mt-5 text-center sm:text-start font-light sm:text-5xl">
         Dive into a
         <span className="font-bold"> universe </span>
         of <br />
         un-ending content and <br className="hidden sm:block"/> channels
       </h1>
       <div className="flex flex-col items-center sm:items-start ">
         <button type="button" className="bg-[#E13C52] text-white font-medium 
            text-base py-2 px-8 rounded-full mt-5 sm:mt-14 hover:bg-white hover:text-[#E13C52] transition-colors">
          Start FREE trail
        </button>
       </div>
      </div>
    </section>
  )
}

export default Hero