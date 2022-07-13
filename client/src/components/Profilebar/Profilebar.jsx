import "./Profilebar.scss";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";

export default function Profilebar() {
  return (
    <div className="profile_container">
      <div className="info">
        <img
          className="profileImg"
          src="https://www.lovetobeinthekitchen.com/wp-content/uploads/2015/04/Emily-Circle-Profile-e1428003256512.png"
          alt="profilepic"
        />
        <span>
          <span className="name">
            <h1>Emy Ley</h1>
            <ModeEditOutlineOutlinedIcon />
          </span>
          <p>Member</p>
        </span>
      </div>

      <div className="premium">
        <h1>Wanna read more? Be a Premium Member.</h1>
        <button className="premium_btn">Learn More</button>
      </div>
      <div className="card">
        <img
          src="https://www.businessbecause.com/uploads/default/news/images/7aeb06646f8ed02a.png"
          alt="postpicture"
          className="postImg"
        />
        <h1>Why you need an AI robot for your office and how it works</h1>
        <p>
          In this article, we'll learn how to dicuss about robot and future
          work.
        </p>
        <span className="bar"></span>
        <button className="btn">Continue</button>
      </div>
      <div className="moreTopics">
      <h1>More interesting Topics</h1>
        <button className="btn">Health</button>
        <button className="btn">Social Media</button>
        <button className="btn">Politic</button>
        <button className="btn">Productivity</button>
        <button className="btn">Business</button>
        <button className="btn">Money</button>
        <button className="btn">Self Development</button>
        <button className="btn">Programming</button>
      </div>
    </div>
  );
}
