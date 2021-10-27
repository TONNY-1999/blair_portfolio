import "./about.css"; 
import Award from "../../img/42.jpg";

const About = () => {
    return (
        <div className="a">
           <div className="a-left">
              <div className="a-card bg"></div>
                <div className="a-card">
           <img src="https://www.roofingtiles.co.ke/wp-content/uploads/2020/05/Roofing-Tiles-Kenya-why-us-page-image8.jpg"
            alt="" className="a-img"
          />
        </div>
           </div>
           <div className="a-right">
           <h1 className="a-title">About Me</h1>
        <p className="a-sub">
         We provide these services File servers, Email, Computer repair, Cloud services, Virtual desktops, Data security, Data backups.
        </p>
        <p className="a-desc">
        We ensure that your IT services run smoothly with the absolute minimum of down time, also
        involve everything from fixing bugs and backing up data, to overseeing security and managing IT infrastructure.
        Troubleshoot and resolve issues with software or hardware. ... Support the implementation of new solutions or applications. 
        Establish accounts for new users and assist with password or login problems

        </p>
        <div className="a-award">
          <img src={Award} alt="" className="a-award-img" />
          <div className="a-award-texts">
            <h4 className="a-award-title">Service Delivery @ 2021</h4>
            <p className="a-award-desc">
              All services and projects we possess are delivered by customers fugidity
              
            </p>
          </div>
        </div>
      </div>

           </div>
    )
}

export default About
