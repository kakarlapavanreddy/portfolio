import heroData from "../../data/heroData";

import Button from "../Button/Button";

import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="bg-gray-50">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col-reverse items-center justify-between gap-12 px-6 py-16 lg:flex-row">
        {/* Left */}

        <div className="max-w-xl">
          <p className="text-blue-600 font-semibold">{heroData.greeting}</p>

          <h1 className="mt-4 text-5xl font-bold leading-tight">
            {heroData.name}
          </h1>

          <h2 className="mt-4 text-2xl font-medium text-gray-700">
            {heroData.role}
          </h2>

          <p className="mt-6 text-gray-500 leading-8">{heroData.description}</p>

          <div className="mt-8 flex gap-4">
            <Button text="Hire Me" />

            <Button text="Download CV" />
          </div>

          <div className="mt-8 flex gap-6 text-2xl">
            <FaGithub className="cursor-pointer hover:text-blue-600 transition" />

            <FaLinkedin className="cursor-pointer hover:text-blue-600 transition" />

            <FaInstagram className="cursor-pointer hover:text-blue-600 transition" />
          </div>
        </div>

        {/* Right */}

        <div>
          <img
            src={heroData.image}
            alt="Profile"
            className="h-96 w-96 rounded-full object-cover shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
