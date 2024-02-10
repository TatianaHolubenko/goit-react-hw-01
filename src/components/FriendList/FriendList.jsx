import css from "./FriendList.module.css";
import { FriendListItem } from "../FriendListItem/FriendListItem.jsx";

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.list}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li className={css.item} key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </li>
      ))}
    </ul>
  );
};
