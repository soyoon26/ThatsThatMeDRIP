import { BrowserRouter, Link } from "react-router-dom";
import { getKakaoLoginLink } from "../../api/kakaoApi";
import kakao from "../../assets/imgs/kakao.png";
const KakaoLogin = () => {
  const link = getKakaoLoginLink();

  return (
    <div>
      <BrowserRouter>
        <Link to={link}>
          <img src={kakao} />
        </Link>
      </BrowserRouter>
    </div>
  );
};

export default KakaoLogin;
