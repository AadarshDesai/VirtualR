import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

export function SectionHero(){
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR build tools <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-800">for developers </span>
            </h1>
            <p className="text-lg text-center text-neutral-500 max-w-4xl mt-10">
                Empower your creativity and bring your VR app ideas to life with our intutive development tools.
                Get started today and turn your imagination into imeersive reality!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from bg-orange-500 to-red-800 rounded-md py-3 px-4 mx-3">Start for free</a>
                <a href="#" className="py-3 px-4 mx-3 rounded-md border">Documentation</a>
            </div>
            <div className="flex flex-col sm:flex sm:flex-row justify-center mt-10">
                <video autoPlay loop muted className="rounded-lg sm:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={video1} type="video/mp4"/>
                    Your browser dosen't support the video format.
                </video>
                <video autoPlay loop muted className="rounded-lg sm:w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4">
                    <source src={video2} type="video/mp4"/>
                    Your browser dosen't support the video format.
                </video>
            </div>
        </div>
    )
}