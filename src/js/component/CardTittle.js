import React from 'react'

const CardTittle = () => {
    return (
        <div class="cardtittle w-100 d-flex justify-content-center border border-secondary" style={{ marginTop: "30px" }} >
            <div class="card-body p-5" style={{ backgroundColor: "#eaecef", height: "auto"}} >
                <h1 class="card-title" style={{ fontSize: "70px" }} >Help the animals!</h1>
                <p class="card-text mt-4" style={{ fontSize: "20px" }} >Bacon ipsum dolor amet ham bacon swine, turkey brisket tongue jowl. Leberkas salami boudin spare ribs swine tenderloin shankle bacon cow pastrami. Pork picanha tongue brisket chuck capicola prosciutto tri-tip meatloaf. Tongue picanha ham hock ball tip andouille, buffalo pastrami biltong turkey pork belly chicken alcatra.</p>
                <a href="#" class="btn btn-primary mt-4" target="_blank">Call to Action!</a>
            </div>
        </div>
    )
}

export default CardTittle