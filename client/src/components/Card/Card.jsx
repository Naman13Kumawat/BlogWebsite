import "./Card.scss";

export default function Card() {
  return (
    <div className="card">
      <img
        src="https://cdna.artstation.com/p/assets/images/images/032/315/330/large/unvarying-gaming-cafe.jpg?1606093659"
        alt="postpicture"
        className="postImg"
      />
      <div className="card_body">
        <h1 className="title-text">How to create awesome 3D model with Blender</h1>
        <p className="para-text">
          In this article, we'll learn how to create a 3D model with blender
          only.
        </p>
        <div className="user">
          <img
            src="https://www.nicepng.com/png/full/182-1829287_cammy-lin-ux-designer-circle-picture-profile-girl.png"
            alt="profilePic"
          />
          <p className="para-text">
            by <b>Budi Supriadi</b>&nbsp;&nbsp;&nbsp;
            <span className="circle">&nbsp;&nbsp;&nbsp;</span>&nbsp;&nbsp;&nbsp;
            7 min read
          </p>
        </div>
      </div>
    </div>
  );
}
