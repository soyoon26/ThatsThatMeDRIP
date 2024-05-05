const rest_api_key = `499f194023a214673b7b0534ebbb0891`;
const redirect_uri = `http://localhost:5173/member`;

const auth_code_path = `https://kauth.kakao.com/cauth/authorize`;

export const getKakaoLoginLink = () => {
  const kakaoURL = `${auth_code_path}?client_id=${rest_api_key}&redirect_uri=${redirect_uri}&response_type=code`;
  return kakaoURL;
};
