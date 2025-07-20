import Image from "next/image";

const Hero = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row min-h-screen">
      {/* Text Section */}
      <div className="w-full md:w-1/2 bg-gradient-to-r from-gray-300 to-transparent text-black flex flex-col justify-center px-6 md:px-16 py-10">
        <h2 className="text-3xl md:text-5xl font-bold uppercase mb-6 md:mb-10">
          From budget phones to flagship models
        </h2>
        <p className="text-2xl md:text-5xl leading-relaxed uppercase">
          find your perfect phone
        </p>
      </div>

      {/* Image Section */}
      <div className="w-full md:w-1/2 relative h-80 md:h-auto">
        <Image
          src="/herogirlpic.png"
          alt="hero girl"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;
