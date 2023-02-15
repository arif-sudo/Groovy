import React from 'react'
import './MySlide.css'

const MySlide = () => {
    return (
        <>
            <div id="carouselExampleDark" className="carousel carousel-fade carousel-dark slide my-5" data-bs-ride="carousel">

                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval={10000}>
                        <img src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2019/08/job253-gade-effect-scaled.jpg" className="carusel_image img-fluid" alt="..." />
                        <div className="tags">
                            <ul>
                                <li><div className="box2"></div><a href="/">Travel</a></li>
                                <li><div className="box1"></div><a href="/">Lifestyle</a></li>
                            </ul>
                            <div className="date">February 14, 2023 <div className="mx-2">|</div> 2 min read</div>
                            <div className="logo">
                                <img src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2023/01/avatar-1.jpg" alt="logo"/>
                                <p>Jonathan Doe</p>
                            </div>
                        </div>
                        
                        <div className="parag">
                            <p>The spectacle before us was indeed sublime</p>
                        </div>
                        <div className="continue">
                            <p>Continue reading <i className="larr fa-solid fa-arrow-right"></i> </p>
                        </div>
                    </div>

                    
                    <div className="carousel-item" data-bs-interval={10000}>
                        <img src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2019/07/bright-pick-near-electric-guitar_23-2147781763.jpg" className="carusel_image img-fluid" alt="..." />
                        <div className="tags">
                            <ul>
                                <li><div className="box2"></div><a href="/">Travel</a></li>
                                <li><div className="box1"></div><a href="/">Lifestyle</a></li>
                            </ul>
                            <div className="date">February 15, 2023 <div className="mx-2">|</div> 1 min read</div>
                            <div className="logo">
                                <img src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2023/01/avatar-1.jpg" alt="logo"/>
                                <p>Jonathan Doe</p>
                            </div>
                        </div>
                        <div className="parag">
                            <p>Far far away, behind the word mountains</p>
                        </div>
                        <div className="continue">
                            <p>Continue reading <i className="larr fa-solid fa-arrow-right"></i> </p>
                        </div>
                        <div className="continue">
                            <p>Continue reading <i className="fa-solid fa-arrow-right"></i> </p>
                        </div>
                    </div>
                    <div className="carousel-item" data-bs-interval={10000}>
                        <img src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2019/07/various-types-pumpkins-arranged-height-food-gravity-concept-autumn-halloween-theme_492182-203-1-1080x600.jpg" className="carusel_image img-fluid" alt="..."  />
                        <div className="tags">
                            <ul>
                                <li><div className="box2"></div><a href="/">Travel</a></li>
                                <li><div className="box1"></div><a href="/">Lifestyle</a></li>
                            </ul>
                            <div className="date">February 16, 2023 <div className="mx-2">|</div> 2 min read
                            </div>
                            <div className="logo">
                                <img src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2023/01/avatar-1.jpg" alt="logo"/>
                                <p>Jonathan Doe</p>
                            </div>
                        </div>
                        <div className="parag">
                            <p>The meaning of health has evolved over time</p>
                        </div>
                        <div className="continue">
                            <p>Continue reading <i className="larr fa-solid fa-arrow-right"></i> </p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev " id='prev' type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
        

    )
}

export default MySlide