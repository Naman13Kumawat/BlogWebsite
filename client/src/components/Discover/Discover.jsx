import "./Discover.scss";
import { Card } from "../";

export default function Discover() {
  return (
    <div className="discover_container">
      <div className="heading">
        <h1 className="heading-text">Article of The Day</h1>
        <button className="btn">View More</button>
      </div>
      <div className="banner">
        <div className="banner_body">
          <h1 className="heading-text">How to become Super Standout 3D NFT Artist</h1>
          <p className="para-text">Calling out for you 3D artist who wanna be a super standout in the market, read the article!</p>
          <button className="btn">Read Now</button>
        </div>
        <div className="postImg">

        </div>
      </div>
      <h1 className="heading-text">Topics Match for You</h1>
      <div className="topics">
        <button className="btn">Design</button>
        <button className="btn">Technology</button>
        <button className="btn">Programming</button>
        <button className="btn">Metaverse</button>
        <button className="btn">Blockchain</button>
        <button className="btn">Crypto</button>
      </div>
      <div className="posts_container">
      <Card />
      <Card />
      </div>
    </div>
  );
}
