import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Row, Col } from 'react-bootstrap';

import '../styles/carousel.css';

import {
    RatFilmPoster,
    RatFilmPosterFilt,
    WorldOfTmrwPoster,
    WorldOfTmrwPosterFilt,
    KediPoster,
    KediPosterFilt,
    BuyIcon
} from './carouselImgs';

class CarouselComponent extends Component {
    state = {
        carouselContent: [
            {
                id: 1,
                img: RatFilmPoster,
                bgFilter: RatFilmPosterFilt,
                title: "Rat Film",
                description: "Across walls, fences, and alleys, rats not only expose our boundaries of separation but make homes in them.",
                primaryColor: '#e58aa4',
                filterColor: '229, 138, 164'
            },
            {
                id: 2,
                img: WorldOfTmrwPoster,
                bgFilter: WorldOfTmrwPosterFilt,
                title: "WORLD OF TOMORROW EPISODE TWO: THE BURDEN OF OTHER PEOPLE'S THOUGHTS",
                description: "Two-time Academy Award nominee Don Hertzfeldt is back with a follow-up to his wildly successful World of Tomorrow animated short film.",
                primaryColor: '#ac5362',
                filterColor: '172, 83, 98'
            },
            {
                id: 3,
                img: KediPoster,
                bgFilter: KediPosterFilt,
                title: "Kedi",
                description: "Hundreds of thousands of Turkish cats roam the metropolis of Istanbul freely. This is the story of seven of them.",
                primaryColor: '#ad8585',
                filterColor: '173, 133, 133'
            }
        ],
    }

    displayCarouselContent = () => {
        return this.state.carouselContent.map(item => {
            let bgStyle = {
                backgroundImage: `url(${item.bgFilter})`,
                backgroundRepeat: 'noRepeat',
                backgroundSize: 'cover'
            }
            let buyBtnStyle = {
                backgroundColor: `rgba(${item.filterColor}, 0.8)`,
                border: 'none',
                fontWeight: 'bold'
            }
            let watchBtnStyle = {
                backgroundColor: 'transparent',
                border: '1px solid',
                borderColor: 'rgba(255, 255, 255, 0.6)',
                fontWeight: 'bold'
            }
            return (
                <Carousel.Item key={item.id} style={bgStyle}>
                    <Row style={{ backgroundColor: `rgba(${item.filterColor}, 0.5)` }} className='indv-carousel-item d-flex justify-content-md-start justify-content-center'>
                        <Col className='d-none d-md-block' xs={{ order: 1, span: 1 }} sm={{ order: 1, span: 1 }} lg={{ order: 1, span: 1 }} xl={{ order: 1, span: 1 }}></Col>

                        <Col className='carsl-img d-flex justify-content-md-end justify-content-start' xs={{ order: 2, span: 4 }} sm={{ order: 2, span: 4 }} md={{ order: 2, span: 3 }} lg={{ order: 2, span: 3 }} xl={{ order: 2, span: 3 }}>
                            <img className='posterImg' src={item.img} alt={`${item.title} poster`} />
                        </Col>

                        <Col className='carsl-desc' xs={{ order: 3, span: 10 }} sm={{ order: 2, span: 10 }} md={{ order: 3, span: 6 }} lg={{ order: 3, span: 6 }} xl={{ order: 3, span: 6 }}>
                            <Carousel.Caption className='carsl-cap d-flex justify-items-start'>
                                <h3 className='d-none d-md-block'>{item.title}</h3>
                                <p style={{ color: 'rgba(237, 237, 237, 0.6)' }} className='d-none d-md-block'>{item.description}</p>
                                <div className='bw-btns d-flex justify-content-md-start justify-content-center'>
                                    <Button style={buyBtnStyle} className='buy-btn'><img id='buy-btn-icon' src={BuyIcon} alt=' ' />Buy Now</Button><Button style={watchBtnStyle} className='watch-btn'>Watch Trailer</Button>
                                </div>
                            </Carousel.Caption>
                        </Col>
                    </Row>
                </Carousel.Item>
            )
        })
    }

    render() {
        return (
            <Carousel>
                {this.displayCarouselContent()}
            </Carousel>
        )
    }
}

export default CarouselComponent;