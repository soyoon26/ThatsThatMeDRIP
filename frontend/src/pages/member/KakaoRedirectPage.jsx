import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getAccessToken } from "../../api/kakaoApi";
const KakaoRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get("code");
  useEffect(() => {
    getAccessToken(authCode).then((data) => {
      console.log(data);
    });
  }, [authCode]);
  return (
    <div>
      KAKAO LOGIN Redirect
      <div>{authCode}</div>
    </div>
  );
};
export default KakaoRedirectPage;
