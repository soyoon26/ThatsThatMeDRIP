import { Suspense, lazy } from "react";

const kakaoRedirect = lazy(() => import("../pages/member/KakaoRedirectPage"));
const Loading = <div>Loading...</div>;
const memberRouter = () => {
  return [
    {
      path: "kakao",
      element: (
        <Suspense fallback={Loading}>
          <kakaoRedirect />
        </Suspense>
      ),
    },
  ];
};

export default memberRouter;
