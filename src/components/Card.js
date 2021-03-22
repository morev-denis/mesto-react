import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const isOwn = props.card.owner._id === currentUser._id;
  const cardDeleteButtonClassName = `element__delete ${
    isOwn ? "element__delete_visible" : "element__delete_hidden"
  }`;
  const isLiked = props.card.likes.some((i) => i._id === currentUser._id);
  const cardLikeButtonClassName = `element__like ${
    isLiked ? "element__like_active" : ""
  }`;

  function handleClick() {
    props.onCardClick(props.card);
  }

  function handleLikeClick() {
    props.onCardLike(props.card);
  }

  return (
    <li className="element">
      <figure className="element__figure">
        <img
          onClick={handleClick}
          className="element__image"
          src={props.card.link}
          alt={props.card.name}
        />
        <figcaption className="element__caption">
          <h2 className="element__heading">{props.card.name}</h2>
          <div className="element__like-container">
            <button
              className={cardLikeButtonClassName}
              type="button"
              onClick={handleLikeClick}
            />
            <div className="element__like-number">
              {props.card.likes.length}
            </div>
          </div>
        </figcaption>
      </figure>
      <button className={cardDeleteButtonClassName} type="button" />
    </li>
  );
}

export default Card;
