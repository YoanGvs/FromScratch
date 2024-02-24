import React from "react";

const Logo = () => {
  return (
    <div className="logo">
      {/* Les images importées depuis la balise IMG sont public accesible dzans "public" */}
      <img src="./Logo192.png" alt="logo react" />
      <h3>React World</h3>
    </div>
  );
};

export default Logo;
