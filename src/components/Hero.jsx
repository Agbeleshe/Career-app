import { useState } from "react";
import { Link, Element } from "react-scroll";

const Hero = () => {
  return (
    <Element name="Home">
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage:
            "url(https://guardian.ng/wp-content/uploads/2022/09/IMG-20220920-WA0009-1424x802.jpg)",
        }}
      >
        <div className="hero-overlay bg-opacity-70"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Mafeng high school counselors access</h1>
            <p className="text-xl md:text-2xl mb-8 underline font-extrabold">
              Your path to a successful career starts here.
            </p>
            <div className="bg-[#26053a91] px-4 py-2 rounded-br-3xl rounded-tl-3xl">
              <p className="text-lg font-extrabold">
                Connect with our experienced career counselors and discover the
                perfect career path for you.
              </p>
              <p className="text-lg font-extrabold">
                Whether you're a student exploring options or looking for a
                career change, MHS counselors access has got you covered.
              </p>
            </div>
            <Link to="Search" smooth={true} duration={500}>
              <button className="btn btn-primary mt-5">Get Started</button>
            </Link>
          </div>
        </div>
      </div>
    </Element>
  );
};
export default Hero;
