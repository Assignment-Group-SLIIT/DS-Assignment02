import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HOTELS } from './utils/hotels';



const Landingpage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="content-body">
                <div id="carouselExampleFade" className="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="2500">
                            <img className="d-block w-100" src="https://images6.alphacoders.com/349/349835.jpg" alt="First slide" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2500">
                            <img className="d-block w-100" src="https://wallpaperaccess.com/full/902478.jpg" alt="Second slide" />
                        </div>
                        <div className="carousel-item" data-bs-interval="2500">
                            <img className="d-block w-100" src="https://images7.alphacoders.com/362/362619.jpg" alt="Third slide" />
                        </div>
                    </div>
                </div>
                <br />

                <div className="landingpage-main-container">
                    <section className="light">
                        <div className="container py-2">
                            <div className="h1 text-center text-dark" id="pageHeaderTitle">Available Hotels for Reservation</div>

                            <div data-aos="fade-right">
                                <article className="postcard light blue" id='#1'>
                                    <div className="postcard__img_link">
                                        <img className="postcard__img" src="https://images.trvl-media.com/hotels/7000000/6160000/6153200/6153159/4e471bb0.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Image Title" />
                                    </div>
                                    <div className="postcard__text t-dark">
                                        <h1 className="postcard__title blue">{HOTELS[0].hotelname}</h1>
                                        <div className="postcard__subtitle small">
                                            <time datetime="2020-05-25 12:00:00">
                                                <i className="fas fa-calendar-alt mr-2"></i>Availability:  <strong>{HOTELS[0].status}</strong>
                                            </time>
                                        </div>
                                        <div className="postcard__bar"></div>
                                        <div className="postcard__preview-txt">{HOTELS[0].description}</div>
                                        <ul className="postcard__tagbox">
                                            <li className="btn" onClick={() => {
                                                navigate("/viewHotel", { state: { id: 0 } })
                                            }}>View details</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>

                            <div data-aos="fade-left">
                                <article className="postcard light red">
                                    <div className="postcard__img_link">
                                        <img className="postcard__img" src="https://images.trvl-media.com/hotels/18000000/17400000/17399600/17399512/7fe80c66.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Image Title" />
                                    </div>
                                    <div className="postcard__text t-dark">
                                        <h1 className="postcard__title red">{HOTELS[1].hotelname}</h1>
                                        <div className="postcard__subtitle small">
                                            <time datetime="2020-05-25 12:00:00">
                                                <i className="fas fa-calendar-alt mr-2"></i>Availability:  <strong>{HOTELS[0].status}</strong>
                                            </time>
                                        </div>
                                        <div className="postcard__bar"></div>
                                        <div className="postcard__preview-txt">{HOTELS[1].description}</div>
                                        <ul className="postcard__tagbox">
                                            <li className="btn" onClick={() => { navigate("/viewHotel", { state: { id: 1 } }) }}>View details</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>

                            <div data-aos="fade-right">
                                <article className="postcard light green">
                                    <div className="postcard__img_link">
                                        <img className="postcard__img" src="https://images.trvl-media.com/hotels/35000000/34360000/34351100/34351088/aac03ea1.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Image Title" />
                                    </div>
                                    <div className="postcard__text t-dark">
                                        <h1 className="postcard__title green">{HOTELS[2].hotelname}</h1>
                                        <div className="postcard__subtitle small">
                                            <time datetime="2020-05-25 12:00:00">
                                                <i className="fas fa-calendar-alt mr-2"></i>Availability:  <strong>{HOTELS[0].status}</strong>
                                            </time>
                                        </div>
                                        <div className="postcard__bar"></div>
                                        <div className="postcard__preview-txt">{HOTELS[2].description}</div>
                                        <ul className="postcard__tagbox">
                                            <li className="btn" onClick={() => { navigate("/viewHotel", { state: { id: 2 } }) }}>View details</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>

                            <div data-aos="fade-left">
                                <article className="postcard light yellow">
                                    <div className="postcard__img_link" href="#">
                                        <img className="postcard__img" src="https://images.trvl-media.com/hotels/10000000/9090000/9082700/9082652/424313ad.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Image Title" />
                                    </div>
                                    <div className="postcard__text t-dark">
                                        <h1 className="postcard__title yellow">{HOTELS[3].hotelname}</h1>
                                        <div className="postcard__subtitle small">
                                            <time datetime="2020-05-25 12:00:00">
                                                <i className="fas fa-calendar-alt mr-2"></i>Availability:  <strong>{HOTELS[0].status}</strong>
                                            </time>
                                        </div>
                                        <div className="postcard__bar"></div>
                                        <div className="postcard__preview-txt">{HOTELS[3].description}</div>
                                        <ul className="postcard__tagbox">
                                            <li className="btn" onClick={() => { navigate("/viewHotel", { state: { id: 3 } }) }}>View details</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    )
}

export default Landingpage