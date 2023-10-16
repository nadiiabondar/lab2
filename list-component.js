import React from 'react';
import AutoCard from "../auto-card/AutoCard";

const ListComponents = () => {
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
        <section className="app">
            <main>
                <section className="mt-3 container">
                    <div className="row">
                        {autoList.map(auto => {
                            return (
                                <AutoCard key={auto.id} card={auto}/>
                            )
                        })}
                    </div>
                </section>
            </main>
        </section>

                    /*{autoList.map(auto=> {
                      return (
                          <div className=" col-12 col-sm-6 col-md-4 col-lg-4 col-xl-3">
                            <AutoCard  key={auto.id} card={auto} />
                          </div>
                      );
                    })}
                </div>
              </section>
           </main>
        </section>*/
    );
}
export default ListComponents;