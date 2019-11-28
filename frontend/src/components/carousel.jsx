import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Row, Col } from 'react-bootstrap';


import '../styles/carousel.css';

const testImg = 'https://i1.wp.com/the-avocado.org/wp-content/uploads/2018/12/Legendary-Gintama-Manga-Giga-Magazine-Debut-938x534-2.jpg?resize=938%2C534&ssl=1';

class CarouselComponent extends Component {
    state = {
        carouselMovies: [
            {
                id: 1,
                img: "https://i.vimeocdn.com/video/595198868_505x160.jpg",
                title: "MONSOON III",
                description: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm..."
            },
            {
                id: 2,
                img: "https://i.vimeocdn.com/video/589972810_530x315.jpg",
                title: "BEAMS",
                description: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm..."
            },
            {
                id: 3,
                img: "https://i.vimeocdn.com/video/590587169_530x315.jpg",
                title: "Move 2",
                description: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters. Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm..."
            }
        ],

    }

    render() {
        return(
            <Carousel activeIndex='0'>
                <Carousel.Item>
                    <Row className='indv-carousel-item'>
                        <Col xs sm lg xl={{ order: 1, span: 1 }}></Col>

                        <Col xs sm lg xl={{ order: 2, span: 2 }}>
                                <img className='testImage' src={testImg} alt="image" />
                        </Col>

                        <Col xs sm lg xl={{ order: 3, span: 5 }}>
                            <Carousel.Caption className='carousel-caption'>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <div><Button>Buy Now</Button>
                                <Button>Watch Trailer</Button></div>
                            </Carousel.Caption>
                        </Col>

                        <Col xs sm lg xl={{ order: 4, span: 1 }}></Col>
                        
                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                    <Row className='indv-carousel-item'>
                        <Col xs sm lg xl={{ order: 1, span: 1 }}></Col>

                        <Col xs sm lg xl={{ order: 2 }}>
                            <img className='testImage' src={testImg} alt="image" />
                        </Col>
                        <Col xs sm lg xl={{ order: 3 }}>
                            <Carousel.Caption className='carousel-caption'>
                                <h3>Second slide label</h3>
                                <p>GINTAMA</p>
                                <div><Button>Buy Now</Button>
                                <Button>Watch Trailer</Button></div>
                            </Carousel.Caption>
                        </Col>

                        <Col xs sm lg xl={{ order: 4, span: 1 }}></Col>

                    </Row>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselComponent;