import "./Discover.scss";
import { Card } from "../";

export default function Discover() {
  return (
    <div className="discover_container">
      <div className="heading">
        <h1>Article of The Day</h1>
        <button className="btn">View More</button>
      </div>
      <div className="banner">
        <div className="banner_body">
          <h1>How to become Super Standout 3D NFT Artist</h1>
          <p>Calling out for you 3D artist who wanna be a super standout in the market, read the article!</p>
          <button className="btn_banner">Read Now</button>
        </div>
        <img src="https://i.all3dp.com/wp-content/uploads/2021/05/11155257/blender-gurus-famous-blender-donut-destinyrko-via-reddit-210410.jpg" alt="postpic" />
      </div>
      <h1>Topics Match for You</h1>
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
