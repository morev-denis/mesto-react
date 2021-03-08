function Card(props) {
  return (
    <li className="element">
      <figure className="element__figure">
        <img className="element__image" src={props.card.link} alt={props.card.name} />
        <figcaption className="element__caption">
          <h2 className="element__heading">{props.card.name}</h2>
          <div className="element__like-container">
            <button className="element__like" type="button"></button>
            <div className="element__like-number">{props.card.likes.length}</div>
          </div>
        </figcaption>
      </figure>
      <button className="element__delete" type="button"></button>
    </li>
  );
}

export default Card;