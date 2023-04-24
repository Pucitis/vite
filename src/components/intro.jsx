import React from "react";
//import FadeIn from "../animation/FadeIn";
import IntroFadeIn from "../animation/introFadeIn";


function Intro(){
    return(
       // <FadeIn>

        <div className="flex items-center justify-center flex-col text-center pt-20 pb-6 bg-gradient-to-r from-slate-900 to-slate-700 min-h-screen">
            <h1 className="text-4xl md:text-7xl mb-1 md:mb-3 font-bold text-white">
              <div className="flex flex-row"> 
                    <div>
                        <IntroFadeIn> 
                        <span>Mārtiņš</span>
                        <span>&nbsp;Pūcītis</span>
                        </IntroFadeIn>
                    </div>
                </div> 
            </h1>
            <p className="text-base md:text-xl mb-3 font-medium text-white">Web izstrādātājs</p>
            <p className="text-base md:text-xl mb-3 font-medium text-white" >Viss par mani</p>
        </div>
        //</FadeIn>
    )
}
export default Intro;