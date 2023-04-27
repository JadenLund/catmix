import React from "react";
import { Card } from "semantic-ui-react";
import { Image } from "semantic-ui-react";
import CatClickMe from "../assets/CatClickMe.png"

export default function CatCard() {
    const [catInfo, setCatInfo] = React.useState({ url: CatClickMe });

    function handleClick() {
        console.log(catInfo)

        fetch('https://api.thecatapi.com/v1/images/search')
        .then(resp => resp.json())
        .then(data => setCatInfo(data[0]))
    }

    //build api that talks to the api you want
    //so that your api key is not public
    //get this resource as me - make a request of a request

    return (
            <Card centered >
                <Image onClick={handleClick} className="cat-image" src={catInfo.url} />
                <Card.Content>
                    <Card.Header textAlign="center">Meow</Card.Header>
                    {/* if there is a cat breed, print it */}
                </Card.Content>
            </Card>
    );
};
