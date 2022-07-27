import React from "react";

const AppWrap = (Component, idName, className) =>
  function HOC() {
    return (
      <div id={idName} className={`app__container ${className}`}>
        <Component />
      </div>
    );
  };

export default AppWrap;
