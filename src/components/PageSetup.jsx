import React from "react";
import ParticleJS from "./Particle";
import { Grid, Image, Container } from "semantic-ui-react";
import MyModal from "./MyModal";
import catfall from "../assets/catfall.png"
import CatCard from "./CatCard";
import './Page.css'

export default function PageSetup() {

    return (
        <div className="background-coloring">
            <ParticleJS />
            <Grid padded style={{ height: '120vh' }}>
                <Grid.Row style={{ height: '70%' }} columns={3} >
                    <Grid.Column >
                        <Image src={catfall} size='medium' floated="left" />
                    </Grid.Column>

                    <Grid.Column >
                        <Grid.Row>
                             <div className="cat-card"> <CatCard /> </div>
                             </Grid.Row>
                        <Grid.Row style={{ height: '70%' }}>
                            <Container textAlign='center' className="credits" verticalAlign='bottom'>
                                <h4> This catastic application, along with all cat graphics, was created by Jaden Lund, learn more about her <a href="https://www.linkedin.com/in/jaden-lund/"  target="_blank">here.</a>
                                <h4>API provided by <a target="_blank" href="https://thecatapi.com/">The Cat API</a></h4>
                                </h4>
                            </Container>
                        </Grid.Row>
                    </Grid.Column>

                    <Grid.Column >
                        <Image src={catfall} size='medium' floated="right" />
                    </Grid.Column>
                </Grid.Row>

                <Grid.Row style={{ height: '30%' }}>
                    <Grid.Column >
                        <MyModal />
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>

    )
}
