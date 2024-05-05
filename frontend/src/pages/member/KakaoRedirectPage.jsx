import { useSearchParams } from "react-router-dom";

const KakaoRedirectPage = () => {
  const [searchParams] = useSearchParams();
  const authCode = searchParams.get("code");
  return (
    <div>
      KAKAO LOGIN Redirect
      <div>{authCode}</div>
    </div>
  );
};
export default KakaoRedirectPage;
