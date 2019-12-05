import React, { Component } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Row, Col } from 'react-bootstrap';


import '../styles/carousel.css';

const testImg = 'https://i1.wp.com/the-avocado.org/wp-content/uploads/2018/12/Legendary-Gintama-Manga-Giga-Magazine-Debut-938x534-2.jpg?resize=938%2C534&ssl=1';

const client = '3fbb58c54de613941453b8fbcca97d85a2665b35';
const token = 'LRNvYuIp1letA+TGu9/uiJ9U8FAjVtf0dfGPeLcBrtEEXAqqz1GwYtY6paHKwK5I8xOdl4RhNkNQZJdq9Y+S1DfcAgK7G0NVZ2X7tAqQJ4d8Tz2SXB2Mye6NDMGnmU8J';


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

    componentDidMount = () => {
        let data = JSON.stringify({
            "grant_type": "client_credentials",
            "scope": "public"
        })
        axios.post('https://api.vimeo.com/oauth/authorize/client', data, {
            headers: {
                'Authorization': 'basic ' + Buffer.from(client + ":" + token).toString('base64'),
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.vimeo.*+json;version=3.4'
            }
        })
        console.log('SUCCESS!')
    }

    retriveMovies = () => {
        axios.get('https://api.vimeo.com/ondemand/genres/13')
            .then(res => {
                console.log(res.data)
            })
    }

    displayCarouselItems = () => {
        
    }

    render() {
        // this.retriveMovies()
        return(
            <Carousel activeIndex='0'>
                <Carousel.Item>
                    <Row className='indv-carousel-item'>
                        {/* XS && SM -- NEED TO ONLY DISPLAY TITLE BUTTONS AND IMAGE */}
                        <Col className='carsl-img' xs={{ order: 1, span: 3 }} sm={{ order: 1, span: 3 }} lg={{ order: 1, span: 3 }} xl={{ order: 1, span: 3 }}>
                                <img className='testImage' src={testImg} alt="image" />
                        </Col>

                        <Col xs={{ order: 2, span: 1 }} sm={{ order: 3, span: 12 }} lg={{ order: 2, span: 1 }} xl={{ order: 2, span: 1 }}></Col>

                        <Col className='carsl-desc justify-content-center' xs={{ order: 3, span: 10 }} sm={{ order: 2, span: 12 }} lg={{ order: 3, span: 5 }} xl={{ order: 3, span: 5 }}>
                            <Carousel.Caption className='carsl-cap'>
                                <h3>First slide label</h3>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum. Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                                <div><Button>Buy Now</Button>
                                <Button>Watch Trailer</Button></div>
                            </Carousel.Caption>
                        </Col>
                        
                    </Row>
                </Carousel.Item>

                <Carousel.Item>
                    <Row className='indv-carousel-item'>

                        <Col className='carsl-img' xs sm lg xl={{ order: 2, span: 3 }}>
                            <img className='testImage' src={testImg} alt="image" />
                        </Col>

                        <Col className='carsl-desc justify-content-center' xs sm lg xl={{ order: 3, span: 5 }}>
                            <Carousel.Caption className='carsl-cap'>
                                <h3>Second slide label</h3>
                                <p>GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. GINTAMA. </p>
                                <div><Button>Buy Now</Button>
                                    <Button>Watch Trailer</Button></div>
                            </Carousel.Caption>
                        </Col>

                    </Row>
                </Carousel.Item>
            </Carousel>
        )
    }
}

export default CarouselComponent;