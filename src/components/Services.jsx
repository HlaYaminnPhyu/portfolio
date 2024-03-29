import React from "react";
import "./services.css";
import { motion } from "framer-motion";

const Services = () => {
  const frMotion = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  };

  return (
    <section className="my-20 " id="services">
      <div className="mb-20">
        {/* Header */}
        <div className="mb-20">
          <div className="text-center">
            <h1 className="text-5xl font-semibold mb-3 text-[#D9643C] uppercase">services</h1>
            <p className="text-[#B8B5C6] mb-3 px-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
            <div className="w-10 h-1 bg-portfolio-fill mx-auto"></div>
          </div>
        </div>

        {/* Service cards */}
        <div className="md:grid md:grid-cols-3 px-5 lg:px-14">
          {/* md:grid-rows-2 */}
          {/* Web design */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={frMotion}
            transition={{ duration: 1 }}
            className="w-[95%] lg:w-[93%] fade mb-10 rounded-lg mx-auto shadow-lg bg-[#6F3420] p-2"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mt-5 mb-5">
                <span className="ico-circle ">
                  <i className="fa fa-briefcase text-[#B8B5C6]"></i>
                </span>
              </div>
              <div className="">
                <h1 className="text-2xl text-[#E6E2F0] mb-3">WEB DEVELOPMENT</h1>
                <p className="w-[90%] mb-3 mx-auto text-[#B8B5C6]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  hic commodi laboriosam fugiat magnam officia consequuntur,
                  libero, ea quam ab animi fugit.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Web developmet */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={frMotion}
            transition={{ duration: 1 }}
            className="w-[95%] lg:w-[93%] fade rounded-lg mx-auto shadow-lg mb-10 bg-[#6F3420] p-2"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mt-5 mb-5">
                <span className="ico-circle">
                  <i className="fa fa-rectangle-list text-[#E6E2F0]"></i>
                </span>
              </div>

              <div className="">
                <h1 className="text-2xl text-[#E6E2F0] mb-3">WEB DEVELOPMENT</h1>
                <p className="w-[90%] mb-3 mx-auto text-[#B8B5C6]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  hic commodi laboriosam fugiat magnam officia consequuntur,
                  libero, ea quam ab animi fugit.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Photography */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={frMotion}
            transition={{ duration: 1 }}
            className="w-[95%] lg:w-[93%] fade rounded-lg mx-auto shadow-lg mb-10 bg-[#6F3420] p-2"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mt-5 mb-5">
                <span className="ico-circle">
                  <i className="fa fa-light fa-chart-simple text-black"></i>
                </span>
              </div>

              <div className="">
                <h1 className="text-2xl text-[#E6E2F0] mb-3">WEB DEVELOPMENT</h1>
                <p className="w-[90%] mb-3 mx-auto text-[#B8B5C6]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  hic commodi laboriosam fugiat magnam officia consequuntur,
                  libero, ea quam ab animi fugit.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Responsive Design */}
          {/* <motion.div
            initial="hidden"
            animate="visible"
            variants={frMotion}
            transition={{ duration: 1 }}
            className="w-[95%] lg:w-[93%] fade rounded-lg mx-auto shadow-lg mb-10 bg-white p-2"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mt-5 mb-5">
                <span className="ico-circle">
                  <i className="fa fa-binoculars text-black"></i>
                </span>
              </div>

              <div className="">
                <h1 className="text-2xl mb-3">RESPONSIVE DESIGN</h1>
                <p className="w-[90%] mb-3 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  hic commodi laboriosam fugiat magnam officia consequuntur,
                  libero, ea quam ab animi fugit.
                </p>
              </div>
            </div>
          </motion.div> */}

          {/* Graphic design */}
          {/* <motion.div
            initial="hidden"
            animate="visible"
            variants={frMotion}
            transition={{ duration: 1 }}
            className="w-[95%] lg:w-[93%] fade rounded-lg mx-auto shadow-lg mb-10 bg-white p-2"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mt-5 mb-5">
                <span className="ico-circle">
                  <i className="fa fa-sun text-black"></i>{" "}
                </span>
              </div>

              <div className="">
                <h1 className="text-2xl mb-3">GRAPHIC DESIGN</h1>
                <p className="w-[90%] mb-3 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  hic commodi laboriosam fugiat magnam officia consequuntur,
                  libero, ea quam ab animi fugit.
                </p>
              </div>
            </div>
          </motion.div> */}

          {/* Marketing service */}
          {/* <motion.div
            initial="hidden"
            animate="visible"
            variants={frMotion}
            transition={{ duration: 1 }}
            className="w-[95%] lg:w-[93%] fade rounded-lg mx-auto shadow-lg mb-10 bg-white p-2"
          >
            <div className="text-center">
              <div className="flex items-center justify-center mt-5 mb-5">
                <span className="ico-circle">
                  <i className="fa fa-calendar-days text-black"></i>
                </span>
              </div>

              <div className="">
                <h1 className="text-2xl mb-3">MARKETING SERVICES</h1>
                <p className="w-[90%] mb-3 mx-auto">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                  hic commodi laboriosam fugiat magnam officia consequuntur,
                  libero, ea quam ab animi fugit.
                </p>
              </div>
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  );
};

export default Services;
