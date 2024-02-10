import css from "./FriendListItem.module.css";
import clsx from "clsx";

export const FriendListItem = ({ avatar, name, isOnline }) => {
  const styleOnline = clsx(css.online, isOnline ? css.isOnline : css.isOffline);
  return (
    <div>
      <img className={css.img} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={styleOnline}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};
