import React from "react";
import Images from "./Images";
import Heading from "./Heading";

function Card (props) {
    // console.log(props);
    return (
        <>
        <div className = "cards">
            <div className = "card">
            <Images imgsrc={props.imgsrc}/>
                {/* <img src ={props.imgsrc} alt = "myPic" className="card__img"/> */}
                <div className = "card__info">
                    <span className= "card__category">{props.title}</span>
                    <Heading sname={props.sname}/>
                    {/* <h3 className = "card__title"> {props.sname}</h3> */}
                    <a href ={props.links}target ="_blank">
                        <button>Watch Now </button>
                    </a>
                </div>
            </div>
        </div>
        </>
    );
}
export default Card;