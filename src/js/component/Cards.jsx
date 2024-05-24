import React from "react";



const Cards = (props) =>{
    let clock = <i class="fa-regular fa-clock"></i>;
    return(
        <div className="container bg-dark p-4">
        <div className="card border-0 ">
          <div className="card-body bg-dark text-white text-center">
            <h1 className="display-1 fw-bolder">
              {props.icon == true ? clock : props.num}
            </h1>
          </div>
        </div>
      </div>
    )
}

export default Cards;