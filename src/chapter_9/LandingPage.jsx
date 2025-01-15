import React, { useState } from "react";
import Toolbar from "./Toolbar";

const LandingPage = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onClickLogin = () => {
    setIsLoggedIn(true);
  };
  const onClickLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <Toolbar
        isLoggedIn={isLoggedIn}
        onClickLogin={onClickLogin}
        onClickLogout={onClickLogout}
      />
      <div>조건부 랜더링 테스트 </div>
    </div>
  );
};

export default LandingPage;
