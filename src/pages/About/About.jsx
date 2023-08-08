import { ParallaxBanner } from "react-scroll-parallax";

const About = () => {
    return (

        <div className="h-screen w-full">
            <ParallaxBanner
                layers={[
                    { image: '/asset/images/slider-1.jpg', speed: 10 },
                    {
                        speed: -15,
                        children: (
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="hero min-h-screen">
                                    <div className="hero-overlay bg-opacity-60"></div>
                                    <div className="w-full  bg-opacity-60 text-center bg-slate-800 h-full flex items-center">
                                        <div>
                                            <h3 className="text-transparent bg-clip-text bg-gradient-to-t from-[#FDFC47] to-[#24FE41] text-5xl font-bold text-center">About Me</h3>
                                            <div className="w-[20%] mx-auto py-3">
                                                <hr className="bg-[#ff0ffe] h-1" />
                                                <hr className="bg-[#00ffff] h-1" />
                                                <hr className="bg-[#ff0ffe] h-1" />

                                            </div>
                                            <div className="w-full px-5 lg:px-0 lg:w-[55%] mx-auto">
                                                <h4 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#fff] via-[#24FE41]  to-[#fff] text-base font-bold">
                                                    Hi , I am Samaul Islam . I am a professional web developer . I can create professional web application with MERN stack . And I can also create awesome and creative front-end web site with REACT JS . React JS , Node JS , MongoDB and Express JS is my Hobby .
                                                </h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ),
                    },
                    { image: '/static/banner-foreground.png', speed: -10 },
                ]}
                className="aspect-[2/1]"
            />
        </div>


        // <div className="hero min-h-screen" style={{ backgroundImage: "url(/asset/images/slider-1.jpg)" }
        // }>
        //     <div className="hero-overlay bg-opacity-60"></div>
        //     <div className="w-full  bg-opacity-60 text-center bg-slate-800 h-full flex items-center">
        //         <div>
        //             <h3 className="text-transparent bg-clip-text bg-gradient-to-t from-[#FDFC47] to-[#24FE41] text-5xl font-bold text-center">About Me</h3>
        //             <div className="w-[20%] mx-auto py-3">
        //                 <hr className="bg-[#ff0ffe] h-1" />
        //                 <hr className="bg-[#00ffff] h-1" />
        //                 <hr className="bg-[#ff0ffe] h-1" />

        //             </div>
        //             <div className="w-full px-5 lg:px-0 lg:w-[55%] mx-auto">
        //                 <h4 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#ff0000] to-[#fff] text-base font-bold">
        //                     Hi , I am Samaul Islam . I am a professional web developer . I can create professional web application with MERN stack . And I can also create awesome and creative front-end web site with REACT JS . React JS , Node JS , MongoDB and Express JS is my Hobby .
        //                 </h4>
        //             </div>
        //         </div>
        //     </div>
        // </div>
        // <div className=" flex items-center justify-center w-full my-10">
        //     <div>
        //         <h3 className="text-transparent bg-clip-text bg-gradient-to-t from-[#FDFC47] to-[#24FE41] text-5xl font-bold text-center">About Me</h3>
        //         <div className="w-[20%] mx-auto py-3">
        //             <hr className="bg-[#ff0ffe] h-1" />
        //             <hr className="bg-[#00ffff] h-1" />
        //             <hr className="bg-[#ff0ffe] h-1" />

        //         </div>
        //         <div className="w-full px-5 lg:px-0 lg:w-[55%] mx-auto">
        //             <h4 className="text-transparent bg-clip-text bg-gradient-to-tr from-[#0f0c29] via-[#302b63] to-[#24243e] text-base font-bold">
        //                 Hi , I am Samaul Islam . I am a professional web developer . I can create professional web application with MERN stack . And I can also create awesome and creative front-end web site with REACT JS . React JS , Node JS , MongoDB and Express JS is my Hobby .
        //             </h4>
        //         </div>
        //     </div>
        // </div>
    );
};

export default About;