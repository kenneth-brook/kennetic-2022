import React from "react";

import NewsBlock from "./newsBlock/NewsBlock";

import {data} from "../../data/data";

function Home() {
    const portData = data
    return (
        <div className="homeMainWrap">
        <div className="homeWrap">
            <h3>Impacting the reality of business, one line of code at a time.</h3>
        </div>
        <div className="homeWrap">
            {portData.map((card) => {
                return (
                  <NewsBlock
                  key={card.id}
                  title={card.title}
                  date={card.date}
                  info={card.info}
                   />  
                ); 
            })}
            
        </div>
        </div>
    )
}

export default Home;