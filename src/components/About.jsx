import React from 'react'
import myImage from '../img/myImage.jpg'

const About = () => {
  return (
    <div className=' flex justify-center items-center min-h-screen py-20 ' id="about">
        <div className=' w-11/12 lg:w-10/12 bg-[#3A1C12] text-[#E6E2F0] px-5 sm:px-14 py-20 flex flex-col md:flex-row custom-shadow gap-6'>
            {/* bg-[#3A1C12] */}
            <div className=' w-full sm:w-11/12 md:w-1/2'>
                <div className=' flex flex-col items-start sm:flex-row sm:gap-5 lg:gap-10 '>
                    <img src={myImage} alt=""  className=' rounded w-[150px] md:h-[120px] lg:h-auto' />
                    <div className=' mt-7 sm:mt-0'>
                        <div className=' flex flex-wrap items-center'>
                            <span className=' text-lg font-semibold me-2'>Name: </span><span className=' text-[#B8B5C6] md:text-sm lg:text-base'>Hla Yaminn Phyu</span>
                        </div>
                        <div className=' my-4 flex flex-wrap items-center'>
                            <span className=' text-lg font-semibold me-2'>Profile: </span><span className=' text-[#B8B5C6] md:text-sm lg:text-base'>Developer</span>
                        </div>
                        <div className=' flex flex-wrap items-center mb-4'>
                            <span className=' text-lg font-semibold me-2'>Email: </span><span className=' text-[#B8B5C6] md:text-sm lg:text-base'>hlayaminnphyu@gmail.com</span>
                        </div>
                        <div className=' flex flex-wrap items-center'>
                            <span className=' text-lg font-semibold me-2'>Phone: </span><span className=' text-[#B8B5C6] md:text-sm lg:text-base'>09111222333</span>
                        </div>
                    </div>
                </div>
                {/* progress bar */}
                <div className=' mt-8 '>
                    <p className=' font-semibold text-lg'>Skills</p>
                    <div className=' mt-6'>
                        <p className=' uppercase text-white text-base mb-2'>html 90%</p>
                        <div className=' bg-[#7B6462] h-3'>
                            <div className=' w-6/12 bg-portfolio-fill h-full'></div>
                        </div>
                    </div>
                    <div className=' my-5'>
                        <p className=' uppercase text-white text-base mb-2'>css 85%</p>
                        <div className=' bg-[#7B6462] h-3'>
                            <div className=' w-8/12 bg-portfolio-fill h-full'></div>
                        </div>
                    </div>
                    <div>
                        <p className=' uppercase text-white text-base mb-2'>js 90%</p>
                        <div className=' bg-[#7B6462] h-3'>
                            <div className=' w-11/12 bg-portfolio-fill h-full'></div>
                        </div>
                    </div>
                    <div className=' mt-6'>
                        <p className=' uppercase text-white text-base mb-2'>react 85%</p>
                        <div className=' bg-[#654C47] h-3'>
                            <div className=' w-10/12 bg-portfolio-fill h-full'></div>
                        </div>
                    </div>
                </div>  
            </div>
            <div className=' w-full mt-12 md:mt-0 md:w-1/2'>
                <p className=' text-3xl font-semibold hero-bb relative mb-10'>
Hla Yaminn Phyu - Aspiring Web Developer</p>
                <p className=' text-xl text-[#B8B5C6] tracking-wide font-light'>
                Greetings! I'm Hla Yaminn Phyu, an aspiring web developer on a journey of constant learning and growth. While my academic pursuits in electronics took me to the third year at Technological University, my insatiable curiosity led me to the captivating world of web development.
                </p>
                <p className=' text-xl text-[#E6E2F0] tracking-wide font-light py-4'>
                Currently, I am immersing myself in both frontend and backend technologies. In the frontend arena, I'm weaving together HTML, CSS, and JavaScript to create visually appealing and user-friendly interfaces. Simultaneously, I am delving into the intricacies of backend development, exploring languages like Python and Node.js, as well as databases such as MySQL and MongoDB.
                </p>
                <p className=' text-xl text-gray-400 tracking-wide font-light'>
                Join me on my journey as I evolve and contribute to the dynamic realm of web development.
                </p>
                
            </div>


            {/* <div className="skill">
                <div className="outer">
                    <div className="inner flex justify-center items-center">
                        <div id="num" className=" ">
                            65%
                        </div>
                    </div>
                </div>
            </div> */}
        </div>
    </div>
  )
}

export default About