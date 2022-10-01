import * as React from "react";
import "../../home.css";
import Paralax from "../Animation/index";

const Content = () => {
  return (
    <div>
      <main className="main_page">
        <Paralax />
      </main>
    </div>
  );
};

export default React.memo(Content);
