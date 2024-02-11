import css from "./Profile.module.css";
import PropTypes from "prop-types";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.container}>
      <div>
        <img className={css.image} src={image} alt={`Avatar of ${name}`} />
        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>
      <ul className={css.list}>
        <li className={css.listItem}>
          <span className={css.listTitle}>Followers</span>
          <span className={css.listAmount}>{followers}</span>
        </li>

        <li className={css.listItem}>
          <span className={css.listTitle}>Views</span>
          <span className={css.listAmount}>{views}</span>
        </li>

        <li className={css.listItem}>
          <span className={css.listTitle}>Likes</span>
          <span className={css.listAmount}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};

export default Profile;
