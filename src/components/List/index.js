import React, { useState, useEffect } from "react";
import Item from "../Item";

import axios from "axios";

function List() {
  const [items, setItems] = useState([]);
  useEffect(() => {
    //acca adentro hay que hacer nuestro http request
    fetchData();
  }, []); //quiere decir solamente ejecutate al momento de mostrarte. Se conocen como watcher, dicea que variables de ese componenten tienen que mirar. si no pongo nada mira a TODAS las variables por lo que se carga una sola cvez

  async function fetchData() {
    const getItems = await axios.get(
      "https://api.mercadolibre.com/sites/MLA/search?q=plantas"
    );
    setItems(getItems.data.results);
    console.log(getItems);
  }
  return (
    <>
      {items.map((item, key) => {
        return <Item data={item} />;
      })}
    </>
  );
}

export default List;
