import React from 'react'

const Card = ({title, text, img, button}) => {
    
    return (
        <div class="card text-center border border-secondary">
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{text}</p>
            </div>
            <div class="card-footer text-body-secondary">
                <a href={button} class="btn btn-primary" target="_blank">Find Out More!</a>
            </div>
        </div>

    )
}

export default Card