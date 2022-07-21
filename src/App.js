import React, { Component } from "react";
import Layout from "./components/Layout/Layout";
import Burger from "./container/burger/Burger";

class App extends Component {
  render() {
    return (
      <div>
       <Layout>
        <Burger></Burger>
      </Layout>
    </div>
  );
  }
}
export default App;
