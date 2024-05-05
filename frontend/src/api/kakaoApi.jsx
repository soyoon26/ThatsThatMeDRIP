import axios from "axios";
const rest_api_key = `499f194023a214673b7b0534ebbb0891`;
const redirect_uri = `http://localhost:5173/member`;

const auth_code_path = `https://kauth.kakao.com/osauth/authorize`;
const access_token_url = `https://kauth.kakao.com/oauth/token`;
export const getKakaoLoginLink = () => {
  const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  return kakaoURL;
};
export const getAccessToken = async (authCode) => {
  const header = {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded", //보내기 전 인코딩
    },
  };
  const params = {
    grant_type: "authorization_code",
    client_id: rest_api_key,
    redirect_uri: redirect_uri,
    code: authCode,
  };
  const res = await axios.post(access_token_url, params, header);
  const accessToken = res.data.access_token;
  return accessToken;
};
