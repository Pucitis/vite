import React, {useState, useEffect} from "react";
import { useInView } from "react-intersection-observer";

const FadeIn = ({children}) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    } else {
        setIsVisible(false)
    }
  }, [inView]);


 return(
     <div
     ref={ref} 
    >
      {React.Children.map(children, (child, index) => (
        <div
          className={`transition-all duration-500 delay-${(index * 3) * 2000}  ${isVisible ? ' opacity-100' : 'blur-xl opacity-0'}`}
          
        >
          {child}
        </div>
      ))}
    </div>
 )


};

export default FadeIn;