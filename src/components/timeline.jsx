import React from "react";
import timeline from "../data/timeline";
import TimelineItem from "./timelineItem";






function Timeline(){
    
    return(
     <div id="timeline" className=" my-20 bg-gradient-to-r from-gray-100 to-gray-200 ">
            <h3 className="flex justify-center text-2xl md:text-4xl m-4 font-bold text-gray-800 " >Pieredze</h3>
        <div className="flex flex-col items-center  md:flex-row justify-center  min-h-screen " >
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
        </div>
    )
}
export default Timeline;