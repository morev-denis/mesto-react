function Header(props) {
  return (
    <header className="header page__header">
      <a className="header__link" href="./index.html" target="_self">
        <img
          className="header__logo"
          src={props.src}
          alt="Логотип Mesto Russia"
        />
      </a>
    </header>
  );
}

export default Header;
