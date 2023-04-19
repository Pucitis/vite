import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./portfolioItem";
import SlideIn from "../animation/SlideIn";



function Portfolio(){
    return(
        <SlideIn>
        <div className="flex flex-col md:flex-row items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {portfolio.map(project =>(
                    <PortfolioItem
                    key={project.id}
                    imgUrl={project.imgUrl}
                    title={project.title}
                    buildTools={project.buildTools}
                    comment={project.comment}

                    />
                ))}
            </div>
    
        </div>
        </SlideIn>
    )
}
export default Portfolio;