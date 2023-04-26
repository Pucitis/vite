import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./portfolioItem";
import SlideIn from "../animation/SlideIn";



function Portfolio(){
    return(
        <div id="portfolio"  >
            <h3 className="flex justify-center text-2xl md:text-4xl m-4 font-bold " >Darbi</h3>
                <SlideIn>

        <div className="flex flex-col md:flex-row items-center justify-center min-h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map((project, key)=>(
                    <PortfolioItem
                    //key={project.id}
                    imgUrl={project.imgUrl}
                    title={project.title}
                    buildTools={project.buildTools}
                    comment={project.comment}
                    className={`transition-delay-${key * 1000}`}
                    />
                    ))}
            </div>
    
        </div>
                    </SlideIn>
           </div>         
    )
}
export default Portfolio;