import React from "react";
import { Circles } from "react-loader-spinner";

function Loader() {
  return (
    <div className="loader">
      <Circles color="#3f51b5" height={80} width={80} />
    </div>
  );
}

export default Loader;
