import React from 'react'
import Card from './Card'
const Cards = () => {

    const data = [
        { img: "https://res.cloudinary.com/dyvut6idr/image/upload/v1720282372/z9kol0tp8oaco3teswps.jpg", title: "Elephant", text: "Elephants are the largest living land animals. Three living species are currently recognised: the African bush elephant (Loxodonta africana), the African forest elephant (L. cyclotis), and the Asian elephant (Elephas maximus). They are the only surviving members of the family Elephantidae and the order Proboscidea; extinct relatives include mammoths and mastodons. Distinctive features of elephants include a long proboscis called a trunk, tusks, large ear flaps, pillar-like legs, and tough but sensitive grey skin.", button: "https://en.wikipedia.org/wiki/Elephant" },
        { img: "https://res.cloudinary.com/dyvut6idr/image/upload/v1720282447/leopards-1994499_1280_xxf1pz.jpg", title: "Leopard", text: "The leopard (Panthera pardus) is one of the five extant species in the genus Panthera. It has a pale yellowish to dark golden fur with dark spots grouped in rosettes. Its body is slender and muscular reaching a length of 92–183 cm (36–72 in) with a 66–102 cm (26–40 in) long tail and a shoulder height of 60–70 cm (24–28 in). Males typically weigh 30.9–72 kg (68–159 lb), and females 20.5–43 kg (45–95 lb).", button: "https://en.wikipedia.org/wiki/Leopard" },
        { img: "https://res.cloudinary.com/dyvut6idr/image/upload/v1720282447/lions-1660044_1280_macnoa.jpg", title: "Lion", text: "The lion (Panthera leo) is a large cat of the genus Panthera, native to Africa and India. It has a muscular, broad-chested body; a short, rounded head; round ears; and a dark, hairy tuft at the tip of its tail. It is sexually dimorphic; adult male lions are larger than females and have a prominent mane. It is a social species, forming groups called prides. A lion's pride consists of a few adult males, related females, and cubs. Groups of female lions usually hunt together, preying mostly on large ungulates.", button: "https://en.wikipedia.org/wiki/Lion" },
        { img: "https://res.cloudinary.com/dyvut6idr/image/upload/v1720282447/zebras-1169259_1280_ieyedh.jpg", title: "Zebra", text: "Zebras (subgenus Hippotigris) are African equines with distinctive black-and-white striped coats. There are three living species: Grévy's zebra (Equus grevyi), the plains zebra (E. quagga), and the mountain zebra (E. zebra). Zebras share the genus Equus with horses and asses, the three groups being the only living members of the family Equidae. Zebra stripes come in different patterns, unique to each individual. Several theories have been proposed for the function of these patterns, with most evidence supporting them as a deterrent for biting flies.", button: "https://en.wikipedia.org/wiki/Zebra" }
    ]

    return (
        <div className="row">         
                {data.map((value, index, array) => {
                    return (
                        <div className="col-md-6 col-lg-3 mt-5">
                        <Card key={index} img={value.img} title={value.title} text={value.text} button={value.button} />
                        </div>
                        );                       
                })}           
        </div>
    )
}


export default Cards