
import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const SlideIn = ({children}) => {
  const [ref, inView] = useInView({
    threshold: 0,
  });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      setIsVisible(true);
    }
  }, [inView]);


  return (
    <div
     ref={ref} 
    >
      {React.Children.map(children, (child, index) => (
        <div
          className={`transition-all duration-500 delay-${index * 100} transform ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
        >
          {child}
        </div>
      ))}
    </div>
  );
};

export default SlideIn;
