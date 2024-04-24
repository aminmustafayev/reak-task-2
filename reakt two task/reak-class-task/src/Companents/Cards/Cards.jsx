import React from "react";
import Card from "../Card/Card";
function Cards({data}) {
  return (
    <section className="cards">
      <Card data={data}/>
    </section>
  );
}

export default Cards;
