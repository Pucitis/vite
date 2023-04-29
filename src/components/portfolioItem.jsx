import React from "react";
import SlideIn from "../animation/SlideIn";




function PortfolioItem({title, imgUrl, buildTools, comment}){
    return(
        <SlideIn>
       <div className="relative border border-stone-500 rounded-md overflow-hidden">
            <img 
            src={imgUrl}
            alt="portfolio"
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
            />
            <div className="absolute opacity-0 top-0 left-0 w-full h-full transition duration-500 ease-in-out transform hover:opacity-90 hover:-translate-y-full">
                <div className="translate-y-full flex items-center justify-center w-full h-full bg-black">
                <div className="w-80 text-white text-lg font-bold">{comment}</div>
            </div>
        </div>
          
            <div className="w-full p-4">
                <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">{title}</h3>
                <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                    {buildTools.map(item =>(
                        <span className="inline-block px-2 py-1 font-semibold border border-stone-900 rounded-md">
                            {item}
                        </span>
                    ))}
                </p>
            </div>
          
       </div>
       </SlideIn>
    )
}
export default PortfolioItem;