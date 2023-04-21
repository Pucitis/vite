import React from "react";
import FadeIn from "../animation/FadeIn";


function Intro(){
    return(
        <FadeIn>

        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 min-h-screen">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold">Mārtiņš Pūcītis</h1>
            <p className="text-base md:text-xl mb-3 font-medium">Web izstrādātājs</p>
            <p>Viss par mani</p>
        </div>
        </FadeIn>
    )
}
export default Intro;