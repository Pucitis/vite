import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./timelineItem";






function Timeline(){
    
    return(
     
        <div id="timeline" className="flex flex-col items-center  md:flex-row justify-center my-20 bg-gradient-to-r from-gray-100 to-gray-200  min-h-screen ">
            <div className="w-10/12 md:w-7/12">
                {timeline.map(item => (
                    <TimelineItem
                    year={item.year}
                    title={item.title}
                    duration={item.duration}
                    details={item.details}
                    />

                ))}
            </div>
        </div>
        
    )
}
export default Timeline;