import React from "react";

import NewsBlock from "./newsBlock/NewsBlock";

import {data} from "../../data/data";

function Home() {
    const portData = data
    return (
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
    )
}

export default Home;