import { useState } from "react";
import "./App.css";
import { Header } from "./components/Header";
import { ListingBody } from "./components/ListingBody";
import { ContextProductCount } from "./services/context-product";

function App() {


  return (
    <>


        <Header></Header>
        <ListingBody></ListingBody>

    </>
  );
}

export default App;
