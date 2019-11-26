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
                description: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters."
            },
            {
                id: 2,
                img: "https://i.vimeocdn.com/video/589972810_530x315.jpg",
                title: "BEAMS",
                description: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters."
            },
            {
                id: 3,
                img: "https://i.vimeocdn.com/video/590587169_530x315.jpg",
                title: "Move 2",
                description: "Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters."
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
                    <Row id={movie.id == 1 || movie.id == 2 ? 'starting' : null} className='movie-block'>
                        <Col className='movie-text-block' xs={12} md={12} lg={12} xl={{ order: 2 }}>
                            <b>{movie.title}</b>
                            <p>{movie.description}</p>
                        </Col>

                        <Col className=' movie-img-block' xs={12} md={12} lg={12} xl={{ order: 1 }}>
                            <div><img src={movie.img} /></div>
                        </Col>

                    </Row>
                )
            } else {
                return (
                    <Row id={movie.id == 1 || movie.id == 2 ? 'starting' : null} className='movie-block'>

                        <Col className='movie-text-block' xs={12} md={12} lg={12} xl={{ order: 1 }}>
                            <b>{movie.title}</b>
                            <p>{movie.description}</p>
                        </Col>

                        <Col className=' movie-img-block' xs={12} md={12} lg={12} xl={{ order: 2 }}>
                            <div><img src={movie.img} /></div>
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