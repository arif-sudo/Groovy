import React from 'react'
import './MyGrid.css'

const MyGrid = (props) => {
    return (
        <div className="blog1 g-5">
            <div className="left">
                <div className="featured_img">
                    <img className='grid_img' src={props.img} alt="err" />
                    <div className="notification">
                        <i className="fs-6 fa-solid fa-comment"></i>
                    </div>
                </div>
            </div>
            <div className="right">
                <div className="header">
                    <div className="list"><div className="box1"></div><a href='\'>{props.header}</a></div>
                    <div className="grid_date">{props.date} <div className="mx-2">|</div>2 min read</div>
                </div>

                <h3 className='grid_title  fw-bold'>{props.title}</h3>
                <p id='grid_p' className='mt-5'>{props.desc}</p>
                <footer>

                    <div className="grid_continue">
                        <p className='m-0'>Continue reading <i className="larr fa-solid fa-arrow-right"></i> </p>
                    </div>
                    <div className="grid_logo">
                        <img src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2023/01/avatar-1.jpg" alt="err" />
                        <p>Jonathan Doe</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default MyGrid