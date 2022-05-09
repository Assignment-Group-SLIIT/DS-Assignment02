import React from 'react'
import { useNavigate } from 'react-router-dom'
import { HOTELS } from './utils/hotels';



const Landingpage = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className="content-body">
                <div id="carouselExampleFade" class="carousel slide carousel-fade" data-bs-ride="carousel">
                    <div class="carousel-inner">
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
                    <section class="light">
                        <div class="container py-2">
                            <div class="h1 text-center text-dark" id="pageHeaderTitle">Available Hotels for Reservation</div>

                            <div data-aos="fade-right">
                                <article class="postcard light blue">
                                    <a class="postcard__img_link" href="#">
                                        <img class="postcard__img" src="https://images.trvl-media.com/hotels/7000000/6160000/6153200/6153159/4e471bb0.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Image Title" />
                                    </a>
                                    <div class="postcard__text t-dark">
                                        <h1 class="postcard__title blue"><a href="#">{HOTELS[0].hotelname}</a></h1>
                                        <div class="postcard__subtitle small">
                                            <time datetime="2020-05-25 12:00:00">
                                                <i class="fas fa-calendar-alt mr-2"></i>Availability:  <strong>{HOTELS[0].status}</strong>
                                            </time>
                                        </div>
                                        <div class="postcard__bar"></div>
                                        <div class="postcard__preview-txt">{HOTELS[0].description}</div>
                                        <ul class="postcard__tagbox">
                                            <li class="tag__item" onClick={() => { navigate("/viewHotel", { state: { id: 0 } }) }}>View details</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>

                            <div data-aos="fade-left">
                                <article class="postcard light red">
                                    <a class="postcard__img_link" href="#">
                                        <img class="postcard__img" src="https://images.trvl-media.com/hotels/18000000/17400000/17399600/17399512/7fe80c66.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Image Title" />
                                    </a>
                                    <div class="postcard__text t-dark">
                                        <h1 class="postcard__title red"><a href="#">{HOTELS[1].hotelname}</a></h1>
                                        <div class="postcard__subtitle small">
                                            <time datetime="2020-05-25 12:00:00">
                                                <i class="fas fa-calendar-alt mr-2"></i>Availability:  <strong>{HOTELS[0].status}</strong>
                                            </time>
                                        </div>
                                        <div class="postcard__bar"></div>
                                        <div class="postcard__preview-txt">{HOTELS[1].description}</div>
                                        <ul class="postcard__tagbox">
                                            <li class="tag__item" onClick={() => { navigate("/viewHotel", { state: { id: 1 } }) }}>View details</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>

                            <div data-aos="fade-right">
                                <article class="postcard light green">
                                    <a class="postcard__img_link" href="#">
                                        <img class="postcard__img" src="https://images.trvl-media.com/hotels/35000000/34360000/34351100/34351088/aac03ea1.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Image Title" />
                                    </a>
                                    <div class="postcard__text t-dark">
                                        <h1 class="postcard__title green"><a href="#">{HOTELS[2].hotelname}</a></h1>
                                        <div class="postcard__subtitle small">
                                            <time datetime="2020-05-25 12:00:00">
                                                <i class="fas fa-calendar-alt mr-2"></i>Availability:  <strong>{HOTELS[0].status}</strong>
                                            </time>
                                        </div>
                                        <div class="postcard__bar"></div>
                                        <div class="postcard__preview-txt">{HOTELS[2].description}</div>
                                        <ul class="postcard__tagbox">
                                            <li class="tag__item" onClick={() => { navigate("/viewHotel", { state: { id: 2 } }) }}>View details</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>

                            <div data-aos="fade-left">
                                <article class="postcard light yellow">
                                    <a class="postcard__img_link" href="#">
                                        <img class="postcard__img" src="https://images.trvl-media.com/hotels/10000000/9090000/9082700/9082652/424313ad.jpg?impolicy=resizecrop&rw=1200&ra=fit" alt="Image Title" />
                                    </a>
                                    <div class="postcard__text t-dark">
                                        <h1 class="postcard__title yellow"><a href="#">{HOTELS[3].hotelname}</a></h1>
                                        <div class="postcard__subtitle small">
                                            <time datetime="2020-05-25 12:00:00">
                                                <i class="fas fa-calendar-alt mr-2"></i>Availability:  <strong>{HOTELS[0].status}</strong>
                                            </time>
                                        </div>
                                        <div class="postcard__bar"></div>
                                        <div class="postcard__preview-txt">{HOTELS[3].description}</div>
                                        <ul class="postcard__tagbox">
                                            <li class="tag__item" onClick={() => { navigate("/viewHotel", { state: { id: 3 } }) }}>View details</li>
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