import "./about.css";
import Award from "../../img/award.png";
import Me from "../../img/f5383a8d0155c30b9a44.jpg";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
        <img src={Me} alt="" className="i-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        I participated in the ICPC national competition in 2021.
        </p>
        <p className="a-desc">
        It was quite a difficult contest, but actually, I received a very worthy result of being ranked 39th in the country, 
        although it is not high and low. But really, a school I attended is private, but joining it helps me feel more developed.
        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">International Collegiate Programming Contest 2021</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
