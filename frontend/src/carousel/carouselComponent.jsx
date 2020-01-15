import React, { Component } from 'react';
import axios from 'axios';
import { Vimeo } from 'vimeo';
import Carousel from 'react-bootstrap/Carousel';
import { Button, Row, Col } from 'react-bootstrap';

import '../styles/carousel.css';
import BuyIcon from '../imgs/vimeo_buy_icon.png';

const clientID = '3fbb58c54de613941453b8fbcca97d85a2665b35';
const secret = 'LRNvYuIp1letA+TGu9/uiJ9U8FAjVtf0dfGPeLcBrtEEXAqqz1GwYtY6paHKwK5I8xOdl4RhNkNQZJdq9Y+S1DfcAgK7G0NVZ2X7tAqQJ4d8Tz2SXB2Mye6NDMGnmU8J';
const token = 'b3805de5e91ae298edd4a695e0b62a7b';

let client = new Vimeo(clientID, secret, token);

class CarouselComponent extends Component {
    state = {
        carouselContent: [],
        carouselImgs: []
    }

    componentDidMount = () => {
        let videos = [];
        client.request({
            method: 'GET',
            path: '/tags/cats/videos'
        }, (error, body, status_code, headers) => {
            if (error) {
                console.log(error);
            }
            this.setState({ carouselContent: body.data })
        })
    }

    // getFilmImgv = () => {
    //     let vidAndImg = [];
    //     return this.state.carouselContent.map(vid => {
    //         return vid.pictures.sizes.map(img => {
    //             if (img.size === 640) {
    //                 vidAndImg.push(vid.name, img.link)
    //             }
    //         })
    //         console.log(vidAndImg)
    //     })
    // }

    displayCarouselContent = () => {
        return this.state.carouselContent.map(item => {

            let filmImg = item.pictures.sizes.map(pic => {
                if(pic.width === 640) return pic.link
            })

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
                    <Row style={{ backgroundColor: `black` }} className='indv-carousel-item d-flex justify-content-md-start justify-content-center'>
                        <Col className='d-none d-md-block' xs={{ order: 1, span: 1 }} sm={{ order: 1, span: 1 }} lg={{ order: 1, span: 1 }} xl={{ order: 1, span: 1 }}></Col>

                        <Col className='carsl-img d-flex justify-content-md-end justify-content-start' xs={{ order: 2, span: 4 }} sm={{ order: 2, span: 4 }} md={{ order: 2, span: 3 }} lg={{ order: 2, span: 3 }} xl={{ order: 2, span: 3 }}>
                            <img className='posterImg' src={`${filmImg}`} alt={`${item.name} poster`} />
                        </Col>

                        <Col className='carsl-desc' xs={{ order: 3, span: 10 }} sm={{ order: 2, span: 10 }} md={{ order: 3, span: 6 }} lg={{ order: 3, span: 6 }} xl={{ order: 3, span: 6 }}>
                            <Carousel.Caption className='carsl-cap d-flex justify-items-start'>
                                <h3 className='d-none d-md-block'>{item.name}</h3>
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
        

        console.log(this.state)
        return (
            <Carousel>
                {this.displayCarouselContent()}
            </Carousel>
        )
    }
}

export default CarouselComponent;


// const accept = 'application/vnd.vimeo.*+json;version=3.4';
// const redirect = '/apps/161170';
// const state = 4;
// getCliData = () => {
//     let auth = 'basic ' + Buffer.from(client + ":" + secret).toString('base64');
//     let cliData = JSON.stringify({
//         "grant_type": "client_credentials",
//         "scope": "public"
//     })
//     return (
//         axios.post('https://api.vimeo.com/oauth/authorize/client', cliData, {
//             headers: {
//                 'Authorization': `${auth}`,
//                 'Content-Type': 'application/json',
//                 'Accept': `${accept}`
//             }
//         }).catch(err => console.log(err.message))
//             .then(res => {
//                 axios.get(`https://api.vimeo.com/oauth/authorize?response_type=code&client_id=${client}&redirect_uri=${res.request.response.uri}&state=${state}&scope=public`)
//             })
//     )
// }

// getAccData = () => {
//     let code = "basic M2ZiYjU4YzU0ZGU2MTM5NDE0NTNiOGZiY2NhOTdkODVhMjY2NWIzNTpMUk52WXVJcDFsZXRBK1RHdTkvdWlKOVU4RkFqVnRmMGRmR1BlTGNCcnRFRVhBcXF6MUd3WXRZNnBhSEt3SzVJOHhPZGw0UmhOa05RWkpkcTlZK1MxRGZjQWdLN0cwTlZaMlg3dEFxUUo0ZDhUejJTWEIyTXllNk5ETUdubVU4Sg==";
//     let accData = JSON.stringify({
//         "grant_type": "authorization_code",
//         "code": `${code}`,
//         "redirect_uri": `${redirect}`
//     })
//     return (
//         axios.post('https://api.vimeo.com/oauth/access_token', accData, {
//             headers: {
//                 'Authorization': `${code}`,
//                 'Content-Type': 'application/json',
//                 'Accept': `${accept}`
//             }
//         }).catch(err => console.log('ACCESS ERROR: ', err.message))
//             .then(res => {
//                 debugger
//             })
//     )
// }