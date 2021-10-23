import React from "react";

import NewsBlock from "./newsBlock/NewsBlock";

import {data} from "../../data/data";

function Home() {
    const portData = data
    return (
        <div className="homeWrap">
            {portData.map((card) => {
                return (
                  <NewsBlock />  
                ); 
            })}
            
        </div>
    )
}

export default Home;