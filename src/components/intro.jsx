import React from "react";
import FadeIn from "../animation/FadeIn";


function Intro(){
    return(
        <FadeIn>

        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 bg-gradient-to-r from-violet-600 to-indigo-600 min-h-screen">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-white">Mārtiņš Pūcītis</h1>
            <p className="text-base md:text-xl mb-3 font-medium text-white">Web izstrādātājs</p>
            <p>Viss par mani</p>
        </div>
        </FadeIn>
    )
}
export default Intro;