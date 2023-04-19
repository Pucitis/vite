import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./timelineItem";
import SlideIn from "../animation/SlideIn";






function Timeline(){
    
    return(
       <SlideIn>
        <div className="flex flex-col md:flex-row justify-center my-20 ">
            <div className="w-full md:w-7/12">
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
        </SlideIn>
    )
}
export default Timeline;