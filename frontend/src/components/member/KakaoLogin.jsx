import { BrowserRouter, Link } from "react-router-dom";
import { getKakaoLoginLink } from "../../api/kakaoApi";

const KakaoLogin = () => {
  const link = getKakaoLoginLink();
  const aa = `http://localhost:5173/`;
  return (
    <div>
      왜 아무것도 안 보임? 로그인시에 자동 가입처리 됩니다.
      <div>
        {/* <Link>LLL</Link>
         */}
        <BrowserRouter>
          <Link to={link}>whyyy</Link>
        </BrowserRouter>
        {/* <div onClick={getKakaoLoginLink}>KAKAO LOGIN</div> */}
      </div>
    </div>
  );
};

export default KakaoLogin;
