import {
  logo3,
  heroBackground,
  logo2,
  video,
  twitter,
  instagram,
  facebook,
} from "../assets";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Section from "./Section";

const cardData = [
  {
    id: 0,
    title: "powered by",
    logo: logo2,
    mainImage: logo3,
    url: "ttps://meenterpriseai.com/sa/",
    location: "RIYADH, KSA",
    date: "1st May 2025",
  },
  {
    id: 1,
    title: "powered by",
    logo: logo2,
    mainImage: logo3,
    url: "https://meenterpriseai.com/oman/",
    location: "MUSCAT, OMAN",
    date: "14th August 2025",
  },
  {
    id: 2,

    title: "powered by",
    logo: logo2,
    mainImage: logo3,
    url: "https://meenterpriseai.com/kw/",
    location: "KUWAIT CITY, KUWAIT",
    date: "11th September 2025",
  },
  {
    id: 3,
    title: "powered by",
    logo: logo2,
    mainImage: logo3,
    url: "https://meenterpriseai.com/qa/",
    location: "DOHA, QATAR",
    date: "16th October 2025",
  },
  {
    id: 4,
    title: "powered by",
    logo: logo2,
    mainImage: logo3,
    url: "https://meenterpriseai.com/ae/",
    location: "DUBAI, UAE",
    date: "20th November 2025",
  },
];

export const socials = [
  {
    id: "1",
    title: "Twitter",
    iconUrl: twitter,
    url: "#",
  },
  {
    id: "2",
    title: "Instagram",
    iconUrl: instagram,
    url: "#",
  },

  {
    id: "3",
    title: "Facebook",
    iconUrl: facebook,
    url: "#",
  },
];

const Card = ({ data }) => {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      transition={{
        duration: 1,
        ease: "easeOut",
      }}
      className="relative z-1 w-full text-left border border-purple-500/30 rounded-xl p-4 backdrop-blur-sm bg-black/10"
    >
      <a href={data.url}>
        <div className="mb-8">
          <h4 className="text-white text-2xl font-light mb-4">{data.title}</h4>
          <img
            src={data.logo}
            height={150}
            width={150}
            alt="logo"
            className="mb-6"
          />
        </div>

        <div className="mb-6 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-lg" />
          <img src={data.mainImage} alt="main" className="w-full rounded-lg" />
        </div>

        <div className="text-white">
          <p className="text-xl mb-2">
            <i class="fa-solid fa-location-dot mr-2 "></i>
            {data.location}
          </p>
          <p className="text-2xl font-semibold">
            <span className="text-purple-500">•</span> {data.date}
          </p>
        </div>
      </a>
    </motion.div>
  );
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) =>
          prev === cardData.length - 1 ? 0 : prev + 1
        );
      }, 10000); // Change slide every 7 seconds

    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextCard = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === cardData.length - 1 ? 0 : prev + 1));
  };

  const prevCard = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev === 0 ? cardData.length - 1 : prev - 1));
  };

  return (
    <Section
      className="pt-[12rem] -mt-[8.25rem] relative overflow-hidden"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="absolute inset-0 w-full h-full">
        <video
          src={heroBackground}
          autoPlay
          loop
          muted
          playsInline
          className="absolute w-full h-full object-cover"
          alt="hero"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="container relative">
        <h1 className="tagline font-bold text-lg mb-4 text-center text-n-1/50">
          Accelerating Innovation in Enterprises with Applied AI & Analytics
          Strategies
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-20">
          <div className="lg:w-[45%] w-full flex flex-col items-center">
            {/* Centered container */}
            <button
              onClick={prevCard}
              className="  text-white w-full sm:w-auto px-4 sm:px-[280px] py-3 "
            >
              <i className="fa-solid fa-angle-up"></i>
            </button>

            <AnimatePresence mode="wait">
              <Card key={currentIndex} data={cardData[currentIndex]} />
            </AnimatePresence>

            <button
              onClick={nextCard}
              className=" text-white w-full sm:w-auto px-4 sm:px-[280px] py-3 "
            >
              <i className="fa-solid fa-angle-down"></i>
            </button>
          </div>

          <div className="lg:w-[50%] w-full">
            <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-transparent rounded-2xl" />
              <div className="relative rounded-2xl overflow-hidden border border-purple-500/20">
                <video
                  src={video}
                  autoPlay
                  loop
                  muted
                  className="w-full h-full object-cover"
                  alt="AI"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Section className="!px-0 !py-7">
        <div className="container flex flex-col sm:flex-row sm:justify-between justify-center items-center gap-10">
          <p className="caption text-n-4 lg:block">
            © 2025. All rights reserved.
          </p>

          <ul className="flex gap-5 flex-wrap justify-center">
            {socials.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
              >
                <img
                  src={item.iconUrl}
                  width={16}
                  height={16}
                  alt={item.title}
                />
              </a>
            ))}
          </ul>
        </div>
      </Section>
    </Section>
  );
};

export default Hero;
