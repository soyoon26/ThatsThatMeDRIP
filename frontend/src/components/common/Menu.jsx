import React from "react";
import { useNavigate } from "react-router-dom";

import menucat from "../../assets/imgs/cat_basic.png";
const Menu = () => {
  const handleLogin = () => {};
  const handleSignIn = () => {};
  const handleList = () => {};
  const handleUpload = () => {};
  const handleReview = () => {};
  const handleAbout = () => {};
  return (
    <div className="h-screen w-80 absolute right-0 bg-menu-color pl-10">
      <div className="flex mt-10">
        <img className="w-8 h-7 mr-1 mt-2" src={menucat} />
        <div className="text-logo-orange text-3xl font-bold ">Menu</div>
      </div>
      <svg className="w-full h-4 pr-10">
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          stroke="#FC5230"
          strokeWidth="2"
        />
      </svg>
      <div className="mt-10">
        <div className="p-3 text-2xl" onClick={handleLogin}>
          로그인
        </div>
        <div className="p-3 text-2xl" onClick={handleList}>
          목록
        </div>
        <div className="p-3 text-2xl" onClick={handleUpload}>
          제출하기
        </div>
        <div className="p-3 text-2xl" onClick={handleReview}>
          후기 알려주기
        </div>
        <div className="p-3 text-2xl" onClick={handleAbout}>
          About
        </div>
      </div>
    </div>
  );
};
export default Menu;
