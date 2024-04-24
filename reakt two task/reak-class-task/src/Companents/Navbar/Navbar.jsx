import "./Navbar.css";
const Navbar = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="header-one mt-2 ">
            <div className="start-boot">
              <h2>Start Bootstrap</h2>
              <ul className="list-item mb-0  d-flex">
                <li>Home</li>
                <li>About</li>
                <li>Shop</li>
              </ul>
            </div>
            <div className="cards-btn">
              <button className="btn">Cart</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
