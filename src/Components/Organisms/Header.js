import Nav from "../Molecules/Nav";

const Header = () => {
  return (
    <header className="main-header">
      <div className="container">
        <div>
          <h1>Notes APP</h1>
        </div>
        <div>
          <Nav />
        </div>
      </div>
    </header>
  );
};

export default Header;
