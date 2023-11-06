import React, { useState, useEffect } from "react";

const withHeaderHeight = (WrappedComponent) => {
  return function WithHeaderHeight(props) {
    const [headerHeight, setHeaderHeight] = useState(0);

    const handleResize = () => {
      const header = document.getElementById("header");
      if (header) {
        setHeaderHeight(header.offsetHeight);
      }
    };

    useEffect(() => {
      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, []);

    return <WrappedComponent {...props} headerHeight={headerHeight} />;
  };
};

export default withHeaderHeight;
