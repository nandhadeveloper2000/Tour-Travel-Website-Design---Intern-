import React from "react";

const Hero = () => {
    const [priceValue, setPriceValue] = React.useState(0); // Default initial value

  return (
    <div className="bg-black/20 h-full">
      <div className="h-full flex justify-center items-center p-4 bg-primary/10">
        <div className="container grid grid-cols-1 gap-4">
          {/* text content section */}
          <div className="text-white">
            <p>Our packages</p>
            <p
              data-aos="fade-up"
              data-aos-delay="300"
              className="font-bold text-3xl"
            >
              Search Your Destination
            </p>
          </div>
          {/* form section */}
          <div data-aos="fade-up"
            data-aos-delay="600"
             className="space-y-4 bg-white rounded-md p-4 relative">
            <div className="grid grid-cols-1 sm:grid-cols-3 py-3 gap-4">
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Searh Your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2  range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div>
                <label htmlFor="destination" className="opacity-70">
                  Searh Your Destination
                </label>
                <input
                  type="date"
                  name="destination"
                  id="destination"
                  placeholder="Dubai"
                  className="w-full bg-gray-100 my-2  range accent-primary focus:outline-primary focus:outline outline-1 rounded-full p-2"
                />
              </div>
              <div>
      <label htmlFor="destination" className="opacity-70 block">
        <div className="w-full flex justify-between items-center">
          <p>Max Price</p>
          <p className="font-bold text-xl">${priceValue}</p> {/* Dynamically displaying the price */}
        </div>
      </label>
      
      <div className="bg-gray-100 rounded-full p-2 flex items-center justify-center">
        <input
          type="range"
          name="destination"
          id="destination"
          className="appearance-none w-full bg-gradient-to-r from-primary to-secondary h-2 rounded-full my-2"
          min="150"
          max="1000"
          value={priceValue} // Controlled input value
          step="10"
          onChange={(e) => setPriceValue(e.target.value)} // Update state on change
        />
      </div>
    </div>  
    {/* button section */}
    <button className="bg-gradient-to-r from-primary to-secondary text-white hover:scale-105 px-4 py-2 rounded-full duration-200 absolute -bottom-5 left-1/2 -translate-x-1/2"> Search Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
