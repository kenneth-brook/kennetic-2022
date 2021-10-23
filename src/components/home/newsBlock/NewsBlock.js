import React from "react";

function NewsBlock(props) {
    return (
        <div className="newsWrap">
            <h1>{props.title}</h1>
            <h2>{props.date}</h2>
            <p>{props.info}</p>
        </div>
    )
}

export default NewsBlock;