
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const IntroSlideIn = ({children}) => {
  const [ref, inView] = useInView({
    threshold: 0.25,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {

      if (inView) {
      setIsVisible(true);
    } else {
        setIsVisible(false)
    }
  }, [inView]);
     
  
  

   

  return (
    <div
     ref={ref} 
    >
      {React.Children.map(children, (child, index) => (
        <div
          className={` transition-all duration-1000 delay-${index * 200} transform ${isVisible ? 'translate-x-0 opacity-100' : index % 2 === 0 ? 'translate-y-28 blur-lg scale-1 opacity-0' : 'translate-y-48 blur-lg scale-1 opacity-0' }`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default IntroSlideIn;