import beigelogo from "../assets/imgs/beige-logo.png";
import aboutcat from "../assets/imgs/cat_body.png";
import aboutdog from "../assets/imgs/dog.png";
const AboutPage = () => {
  return (
    <div className="bg-bg-beige h-full">
      <div className="flex justify-center">
        <img className="mt-10" src={beigelogo} />
      </div>
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

      <div className="  w-screen flex flex-col justify-center items-center">
        <div className="mt-10 text-3xl">About</div>
        <div className=" p-11 text-xl">
          최애의 SNS에 댓글을 달던 중 ‘드립(밈)을 사용하고 싶은데 주어를 하나
          하나 수정하지 않아도 바꿔주면 얼마나 좋을까? 하고 생각하다 최애 적용
          드립 생성 사이트를 직접 개발하게 되었습니다.’ 새로 생겨나는 드립들은
          업데이트 될 예정이고 ‘이 드립도 있었으면 좋겠다’ 하는 것들은
          제출해주시면 확인 후 올려드리겠습니다🐾{" "}
        </div>
        <div className="text-xl">-개발자 이상-</div>
        <img src={aboutdog} className="mt-10 w-1/5 mr-20" />
        <img src={aboutcat} className="mb-10 w-1/5 ml-20" />
      </div>
    </div>
  );
};
export default AboutPage;
