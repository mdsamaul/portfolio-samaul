import { useState } from "react";
import { ParallaxBanner } from "react-scroll-parallax";
import { TypeAnimation } from "react-type-animation";

const Banner = () => {

    const [textColor, setTextColor] = useState('text-transparent bg-clip-text  bg-gradient-to-r from-[#6DD5FA]  via-[#2980B9] to-[#FFFFFF] duration-1000 text-5xl font-bold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-[#ffffff] hover:via-[#2980B9]  hover:to-[#6DD5FA] ');

    const firstColor = `text-transparent bg-clip-text  bg-gradient-to-r from-[#78ffd6]  to-[#a8ff78] duration-1000 text-3xl font-bold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-[#a8ff78]  hover:to-[#78ffd6] `
    const firstColor2 = 'text-transparent bg-clip-text  bg-gradient-to-r from-[#40E0D0] via-[##ffff1c] to-[#fffffF] duration-1000 text-5xl font-bold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-[#FF0]  hover:to-[#40E0D0] via-[#24FE41]'
    const firstColor3 = 'text-transparent bg-clip-text  bg-gradient-to-r from-[#7303c0] via-[#080] to-[#fdeff9] duration-1000 text-3xl font-bold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-[#fdeff9] via-[#F8FFAE]   hover:to-[#7303c0] '
    const firstColor4 = 'text-transparent bg-clip-text  bg-gradient-to-r from-[#3c0] to-[#fdeff9] duration-1000 text-5xl font-bold hover:text-transparent hover:bg-clip-text  hover:bg-gradient-to-r hover:from-[#7f9] via-[#F8FFAE]   hover:to-[#7303c0] '

    return (

        <ParallaxBanner
            layers={[
                { image: '/asset/images/wallpaper-gif-4.gif', speed: -10 },
                {
                    speed: -15,
                    children: (
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="hero min-h-screen" >
                                <div className="hero-overlay bg-opacity-60"></div>
                                <div className="w-full  bg-opacity-60 text-center bg-slate-800 h-full flex items-center">
                                    <div>
                                        <div
                                            className={`${textColor}`}
                                        >
                                            <TypeAnimation
                                                sequence={[
                                                    'Hi There , I am Samaul Islam \n Web Designer.|',
                                                    2000,
                                                    () => setTextColor(firstColor),
                                                    'Hi There , I am Samaul Islam \n Front-End Developer.|',
                                                    2000,
                                                    () => setTextColor(firstColor2),
                                                    'Hi There , I am Samaul Islam \n React Developer.|',
                                                    2000,
                                                    () => setTextColor(firstColor3),
                                                    'Hi There , I am Samaul Islam \n MERN develope.|',
                                                    2000,
                                                    () => setTextColor(firstColor),
                                                    'Hi There , I am Samaul Islam \n MERN STACK DEVELOPER.|',
                                                    2000,
                                                    () => setTextColor(firstColor4),
                                                ]}
                                                repeat={Infinity}
                                                style={{ whiteSpace: 'pre-line', }}
                                            />
                                        </div>



                                        <div>
                                            <h3 className="fond-semibold w-full px-5 py-5 lg:w-[70%] mx-auto text-white text-center">
                                                To excel as a web developer by utilizing my technical expertise and creative mindset, contributing to the development of user-friendly and visually captivating websites.
                                            </h3>
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

    );
};

export default Banner;