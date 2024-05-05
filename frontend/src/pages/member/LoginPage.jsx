import KakaoLogin from "../../components/member/KakaoLogin";
import beigelogo from "../../assets/imgs/beige-logo.png";
import cathappy from "../../assets/imgs/cat_happy.png";
const LoginPage = () => {
  return (
    <div className="w-full h-screen bg-bg-beige  ">
      <img className="pt-5" src={beigelogo} />
      <div className=" mt-0 flex justify-center">
        <svg className="w-4/5 h-4">
          <line
            x1="0"
            y1="50%"
            x2="100%"
            y2="50%"
            stroke="#FC5230"
            strokeWidth="2"
          />
        </svg>
      </div>
      <div className="flex absolute top-30 right-0 left-0  justify-center">
        <img className="w-6 h-5 mr-2 mt-2" src={cathappy} />
        <div className="text-2xl">Login</div>
      </div>
      <div className=" flex flex-col justify-center items-center h-3/5 p-10">
        <div className="pt-20">카카오 로그인만 가능합니다.</div>
        <div>로그인시에 자동 가입처리 됩니다.</div>
        <div className="mt-10">
          <KakaoLogin />
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
