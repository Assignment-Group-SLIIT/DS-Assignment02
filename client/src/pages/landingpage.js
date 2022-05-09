import React from 'react'

const Landingpage = () => {
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
                                        <img class="postcard__img" src="https://picsum.photos/1000/1000" alt="Image Title" />
                                    </a>
                                    <div class="postcard__text t-dark">
                                        <h1 class="postcard__title blue"><a href="#">Title</a></h1>
                                        <div class="postcard__subtitle small">
                                            <time datetime="2020-05-25 12:00:00">
                                                <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                            </time>
                                        </div>
                                        <div class="postcard__bar"></div>
                                        <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                                        <ul class="postcard__tagbox">
                                            <li class="tag__item"><i class="fas fa-tag mr-2"></i>View Details</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>

                            <div data-aos="fade-left">
                                <article class="postcard light red">
                                    <a class="postcard__img_link" href="#">
                                        <img class="postcard__img" src="https://picsum.photos/501/500" alt="Image Title" />
                                    </a>
                                    <div class="postcard__text t-dark">
                                        <h1 class="postcard__title red"><a href="#">Title</a></h1>
                                        <div class="postcard__subtitle small">
                                            <time datetime="2020-05-25 12:00:00">
                                                <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                            </time>
                                        </div>
                                        <div class="postcard__bar"></div>
                                        <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                                        <ul class="postcard__tagbox">
                                            <li class="tag__item"><i class="fas fa-tag mr-2"></i>View Details</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>

                            <div data-aos="fade-right">
                                <article class="postcard light green">
                                    <a class="postcard__img_link" href="#">
                                        <img class="postcard__img" src="https://picsum.photos/500/501" alt="Image Title" />
                                    </a>
                                    <div class="postcard__text t-dark">
                                        <h1 class="postcard__title green"><a href="#">Title</a></h1>
                                        <div class="postcard__subtitle small">
                                            <time datetime="2020-05-25 12:00:00">
                                                <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                            </time>
                                        </div>
                                        <div class="postcard__bar"></div>
                                        <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                                        <ul class="postcard__tagbox">
                                            <li class="tag__item"><i class="fas fa-tag mr-2"></i>View Details</li>
                                        </ul>
                                    </div>
                                </article>
                            </div>

                            <div data-aos="fade-left">
                                <article class="postcard light yellow">
                                    <a class="postcard__img_link" href="#">
                                        <img class="postcard__img" src="https://picsum.photos/501/501" alt="Image Title" />
                                    </a>
                                    <div class="postcard__text t-dark">
                                        <h1 class="postcard__title yellow"><a href="#">Title</a></h1>
                                        <div class="postcard__subtitle small">
                                            <time datetime="2020-05-25 12:00:00">
                                                <i class="fas fa-calendar-alt mr-2"></i>Mon, May 25th 2020
                                            </time>
                                        </div>
                                        <div class="postcard__bar"></div>
                                        <div class="postcard__preview-txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, fugiat asperiores inventore beatae accusamus odit minima enim, commodi quia, doloribus eius! Ducimus nemo accusantium maiores velit corrupti tempora reiciendis molestiae repellat vero. Eveniet ipsam adipisci illo iusto quibusdam, sunt neque nulla unde ipsum dolores nobis enim quidem excepturi, illum quos!</div>
                                        <ul class="postcard__tagbox">
                                            <li class="tag__item"><i class="fas fa-tag mr-2"></i>View Details</li>
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