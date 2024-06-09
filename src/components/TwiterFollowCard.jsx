import { useState } from "react";
import "./styles/TwiterFollowCard.css";

const TwiterFollowCard = ({ user, flagUrls }) => {
  const [isFollowing, setIsFollowing] = useState(false);

  const text = isFollowing ? "Siguiendo" : "Seguir";

  const handleClick = () => {
    setIsFollowing(!isFollowing);
  };

  console.log(flagUrls);
  undefined;

  return (
    <div className="main__one">
      <header>
        <img className="header__image" src={user?.picture.medium} alt="" />

        <div className="flags-container">
          {flagUrls &&
            Object.keys(flagUrls).length > 0 &&
            Object.keys(flagUrls).map((country, index) => (
              <img
                key={index}
                className="flag-image"
                src={flagUrls[country]}
                alt="Flag"
              />
            ))}
        </div>

        <div className="info">
          <strong>
            {user?.name.first} <br /> {user?.name.last}
          </strong>
          <span>{user?.login.username}</span>
        </div>
        <aside>
          <button onClick={handleClick}>{text}</button>
        </aside>
      </header>
    </div>
  );
};

export default TwiterFollowCard;
