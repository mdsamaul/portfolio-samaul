import { FaAngleDoubleDown } from "react-icons/fa";
import { ParallaxBanner } from "react-scroll-parallax";
const Skill = () => {
  return (
    <div className="pb-4">
      <ParallaxBanner
        layers={[
          { image: "/asset/images/full-stack-development.gif", speed: 0 },
          {
            speed: -15,
            children: (
              <div className="absolute pt-24 inset-0 flex items-center justify-center h-full">
                <div className="hero">
                  <div className="hero-overlay bg-opacity-60"></div>
                  <div className="w-full bg-black  bg-opacity-60 text-center ">
                    <div>
                      <div className="w-full">
                        <h3 className="text-transparent pt-48 bg-clip-text bg-gradient-to-t from-[#FDFC47] to-[#24FE41] text-5xl font-bold text-center">
                          Skills
                        </h3>
                        <div className="w-[20%] mx-auto py-3">
                          <hr className="bg-[#ff0ffe] h-1" />
                          <hr className="bg-[#00ffff] h-1" />
                          <hr className="bg-[#ff0ffe] h-1" />
                        </div>
                        <div className="w-full px-5 lg:px-0 lg:w-[55%] mx-auto">
                          <h4 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#ffff00] via-[#ec38bc]  to-[#fdeff9] text-4xl font-semibold">
                            Expertise
                          </h4>
                          <div className="full flex justify-center pt-2">
                            <hr className="w-[20%]  border text-center  border-white " />
                          </div>

                          <div className="w-full  flex justify-center ">
                            <div>
                              <hr className="h-10 w-0.5 ml-2 border   border-white " />
                              <FaAngleDoubleDown className="text-xl text-white" />
                            </div>
                          </div>
                        </div>
                        <div>
                          <hr className="w-0.5 h-56 ml-16 mt-5 bg-white absolute" />
                        </div>

                        <div className="mx-auto w-[90%] pt-5">
                          <hr />
                        </div>
                        <div className="w-[90%] mb-2 mx-auto grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6  gap-4">
                          <div className="mx-auto ">
                            <div className="w-full flex justify-center  ">
                              <div>
                                <hr className="h-10 w-0.5 ml-2 border border-white  " />
                                <FaAngleDoubleDown className="text-xl text-white" />
                              </div>
                            </div>
                            <img
                              src="/asset/skill/html.gif"
                              className="w-24 h-28 text-center"
                              alt=""
                            />
                            <p className="text-white">HTML</p>
                          </div>
                          <div className="mx-auto ">
                            <div className="w-full flex justify-center  ">
                              <div>
                                <hr className="h-10 w-0.5 ml-2 border border-white  " />
                                <FaAngleDoubleDown className="text-xl text-white" />
                              </div>
                            </div>
                            <img
                              src="/asset/skill/css.gif"
                              className="w-20 mt-4 h-20 text-center"
                              alt=""
                            />
                            <p className="text-white">CSS</p>
                          </div>
                          <div className="mx-auto ">
                            <div className="w-full flex justify-center  ">
                              <div>
                                <hr className="h-10 w-0.5 ml-2 border border-white  " />
                                <FaAngleDoubleDown className="text-xl text-white" />
                              </div>
                            </div>
                            <img
                              src="/asset/skill/bootstrap.gif"
                              className="w-20 text-center"
                              alt=""
                            />
                            <p className="text-white">BootStrap</p>
                          </div>
                          <div className="mx-auto ">
                            <div className="w-full flex justify-center  ">
                              <div>
                                <hr className="h-10 w-0.5 ml-2 border border-white  " />
                                <FaAngleDoubleDown className="text-xl text-white" />
                              </div>
                            </div>
                            <img
                              src="/asset/skill/tailwindcss.png"
                              className="w-20 text-center"
                              alt=""
                            />
                            <p className="text-white">Tailwind Css</p>
                          </div>

                          <div className="mx-auto ">
                            <div className="w-full flex justify-center  ">
                              <div>
                                <hr className="h-10 w-0.5 ml-2 border border-white  " />
                                <FaAngleDoubleDown className="text-xl text-white" />
                              </div>
                            </div>
                            <img
                              src="/asset/skill/daisyui.png"
                              className="w-20 text-center"
                              alt=""
                            />
                            <p className="text-white">Dasy Ui</p>
                          </div>
                          <div className="mx-auto ">
                            <div className="w-full flex justify-center  ">
                              <div>
                                <hr className="h-10 w-0.5 ml-2 border border-white  " />
                                <FaAngleDoubleDown className="text-xl text-white" />
                              </div>
                            </div>
                            <img
                              src="/asset/skill/javascript.gif"
                              className="w-20 text-center"
                              alt=""
                            />
                            <p className="text-white">JavaScript</p>
                          </div>
                        </div>

                        <div className="mx-auto w-[90%] pt-5">
                          <hr />
                        </div>

                        <div className="w-[90%] h-96 mx-auto grid grid-cols-3  lg:grid-cols-3  gap-4">
                          <div className="mx-auto ">
                            <div className="w-full flex justify-center  ">
                              <div>
                                <hr className="h-10 w-0.5 ml-2 border border-white  " />
                                <FaAngleDoubleDown className="text-xl text-white" />
                              </div>
                            </div>

                            <img
                              src="/asset/skill/react.svg"
                              className="w-24 h-24 logo text-center"
                              alt=""
                            />
                            <p className="text-white">React</p>
                          </div>
                          <div className="mx-auto ">
                            <div className="w-full flex justify-center  ">
                              <div>
                                <hr className="h-10 w-0.5 ml-2 border border-white  " />
                                <FaAngleDoubleDown className="text-xl text-white" />
                              </div>
                            </div>
                            <img
                              src="/asset/skill/rb.svg"
                              className="w-20 mt-4 h-20 text-center"
                              alt=""
                            />
                            <p className="text-white">React-Bootstrap</p>
                          </div>
                          <div className="mx-auto ">
                            <div className="w-full flex justify-center  ">
                              <div>
                                <hr className="h-10 w-0.5 ml-2 border border-white  " />
                                <FaAngleDoubleDown className="text-xl text-white" />
                              </div>
                            </div>
                            <img
                              src="/asset/skill/firebaseload.gif"
                              className="w-32 text-center"
                              alt=""
                            />
                            <p className="text-white">Firebase</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ),
          },
          { image: "/", speed: -10 },
        ]}
        className="aspect-[2/1] h-[140vh]"
      />
    </div>
  );
};

export default Skill;
