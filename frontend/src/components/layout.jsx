import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import '../styles/layout.css';

class Layout extends Component {
    state = {
        movies: [
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
        ]
    }

    detectResize = (e) => {
        window.addEventListener('resize', function () {

            console.log(window.innerWidth);
        })
    }

    displayMovies = () => {
        return this.state.movies.map(movie => {
            if (movie.id % 2) {
                return (
                    <Row key={movie.id} id={movie.id == 1 || movie.id == 2 ? 'starting' : null} className={movie.id == 1 ? 'top-item movie-block justify-content-center justify-content-xl-start' : 'movie-block nxt-movies justify-content-center justify-content-xl-start'}>

                        <Col className='movie-text-block' xs={11} md={11} lg={{order: 1, span: 10 }} xl={{ order: 2, span: 5}}>
                            <b id='movie-title'>{movie.title}</b>
                            <p>{movie.description}</p>
                        </Col>

                        <Col className=' movie-img-block 
                        align-items-center 
                        justify-content-xl-end justify-content-center' xs={12} md={12} lg={{ order: 2, span: 11 }} xl={{ order: 1, span: 6}}>
                            
                                    <img id='movie-img' src={movie.img} alt={`Picture for the movie ${movie.title}`} />
                                    
                        </Col>

                    </Row>
                )
            } else {
                return (
                    <Row key={movie.id} id={movie.id == 1 || movie.id == 2 ? 'starting' : null} className={movie.id == 2 ? 'second-item nxt-movies movie-block justify-content-center' : 'movie-block nxt-movies justify-content-center'}>

                        <Col className='movie-text-block' xs={11} md={11} lg={{ order: 1, span: 10 }} xl={{ order: 1, span: 5 }}>
                            <b id='movie-title'>{movie.title}</b>
                            <p>{movie.description}</p>
                        </Col>

                        <Col className='movie-img-block align-items-center justify-content-xl-start justify-content-center' xs={12} md={12} lg={{ order: 2, span: 11 }} xl={{ order: 2, span: 5 }}>
                            <img
                                  id='movie-img' src={movie.img} alt={`Picture for the movie ${movie.title}`} />
                        </Col>

                    </Row>
                )
            }
        })
    }

    render() {
        return (
            <>
                <Container className='layout-container'>
                    {this.displayMovies()}
                </Container>
            </>
        )
    }
}

export default Layout;