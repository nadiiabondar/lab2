/*import React, {Component} from "react";
import './App.css'
import AutoCard from "./components/auto-card/AutoCard";
import Menu from "./components/menu/Menu";

function App() {
  return (
      <section className="app">
          <header className="app-header">
              <Menu/>
          </header>

          <main>
            <section className="container">
                <div className="row">
                    <div className="col-12 col-lg-3">
                        <AutoCard card = {{id: 1, name: "Auto#1", description: "There will be description in some time 1"}}
                                  othrerval={"other"}/>
                    </div>
                    <div className="col-12 col-lg-3">
                        <AutoCard card = {{id: 2, name: "Auto#2", description: "There will be description in some time 2"}}
                                  othrerval={"other"}/>
                    </div>
                    <div className="col-12 col-lg-3">
                        <AutoCard card = {{id: 3, name: "Auto#3", description: "There will be description in some time 3"}}
                                  othrerval={"other"}/>
                    </div>
                    <div className="col-12 col-lg-3">
                        <AutoCard card = {{id: 4, name: "Auto#4", description: "There will be description in some time 4"}}
                                  othrerval={"other"}/>
                    </div>
                </div>
            </section>
          </main>

      </section>
  );
}

export default App;*/

/*import React, {Component} from "react";
import './App.css';
import AutoCard from "./components/auto-card/AutoCard";
import Menu from "./components/menu/Menu";
import 'bootstrap/dist/css/bootstrap.min.css';

function App () {
    const autoList = [
        {id: 1, name: "Mercedes-AMG GT 63 S", description: "German automotive brand of luxury, high quality in the automotive industry.",
            img: "/img/auto/Mercedes.jpg"},
        {id: 2, name: "Porsche 911 Turbo S", description: "German automotive company that produces high-profile sports cars and innovative technologies",
            img: "/img/auto/Porsche.jpg" },
        {id: 3, name: "Audi RS 7", description: "German automotive manufacturer of luxury vehicles headquartered in Bavaria, Germany.",
            img: "/img/auto/Audi.jpg" },
        {id: 4, name: "BMW M4 GTS", description: "German multinational manufacturer of luxury vehicles and motorcycles headquartered.",
            img: "/img/auto/BMW.jpg" },
    ];

    return (
        <>
            <Menu/>
            <section className="mt-3 container">
                <div className="row">
                    {autoList.map(auto => {
                        return (
                            <AutoCard key={auto.id} card={auto} />
                        );
                    })}
                </div>
            </section>
        </>
    );
}

export default App;*/


import React, {Component} from "react";
import './App.css';
import Menu from './components/menu/Menu';
import { Routes, Route} from "react-router-dom";
import AboutComponent from "./components/about-component/about-component";
import ListComponents from "./components/list-component/list-component";

function App () {
  return (
    <section className="app">
      <header className="app-header">
        <Menu/>
      </header>
      <Routes>
        <Route path="/about" component={AboutComponent}/>
        <Route path="/" component={ListComponents}/>
      </Routes>
    </section>
  );
}

export default App;