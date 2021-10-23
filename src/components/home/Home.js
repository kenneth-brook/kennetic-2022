import React from "react";

import NewsBlock from "./newsBlock/NewsBlock";

function Home() {
    return (
        <div className="homeWrap">
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
            <NewsBlock />
        </div>
    )
}

export default Home;