
import React from "react";

const SpecsSection = () => {
  return (
    <section className="w-full py-6 sm:py-10 bg-white" id="specifications">
      <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Header with badge and line */}
        <div className="flex items-center gap-4 mb-8 sm:mb-16">
          <div className="flex items-center gap-4">
            <div className="cyber-chip">
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-cyber-500 text-white mr-2">3</span>
              <span>Services</span>
            </div>
          </div>
          <div className="flex-1 h-[1px] bg-gray-300"></div>
        </div>
        
        {/* Main content with text mask image - responsive text sizing */}
        <div className="max-w-5xl pl-4 sm:pl-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-display leading-tight mb-8 sm:mb-12">
            <span className="block bg-clip-text text-transparent bg-[url('/text-mask-image.jpg')] bg-cover bg-center">
              Cyber Lab transforms your vision into digital reality. Through strategic branding, cutting-edge web development, and innovative marketing solutions, we help businesses evolve into powerful brands that dominate their markets and drive sustainable growth.
            </span>
          </h2>
        </div>
      </div>
    </section>
  );
};

export default SpecsSection;
