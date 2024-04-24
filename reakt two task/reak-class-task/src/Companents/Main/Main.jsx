import "./Main.css";

import Cards from "../Cards/Cards";
const Main = ({data}) => {
  return (
    <>
      <section className="shop">
        <div className="container">
          <div className="row">
            <div className="shop-style">
              <h1 className="h1-class">Shop in style</h1>
              <p>Lorem ipsum dolor sit amet.</p>
            </div>
          </div>
        </div>
      </section>
     <Cards data={data}/>
    </>
  );
};

export default Main;
