import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer_container">
                <div id="footer">
                    <div className="foot1">
                        <img src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2022/11/logo-groovy-300x81.png" alt="" />
                        <div className="textwidget">
                            <p>A super modern theme following the latest trends with premium Membership and fully compatible with <span className='fw-bold'>Ghost</span>.</p>
                            <p>Check more themes like this on estudiopatagon.com</p>
                        </div>
                    </div>
                    <div id="footer_recent">
                        <div className='mt-5'>
                            <div className="about">Rescent Posts</div>
                            <div className="menu">
                                <div className="winner">
                                    <div className="img_cont">
                                        <span className='svg'>1</span>
                                    </div>
                                    <div className="right">
                                        <h5>Customizing your brand and design settings</h5>
                                        <p>August 15, 2019</p>
                                    </div>
                                </div>
                                <div className="winner">
                                    <div className="img_cont " id='img_cont2'>
                                        <span className='svg'>2</span>
                                    </div>
                                    <div className="right">
                                        <h5>The spectacle before us was indeed sublime</h5>
                                        <p>11 January, 2019</p>
                                    </div>
                                </div>
                                <div className="winner">
                                    <div className="img_cont" id='img_cont3'>
                                        <span className='svg'>3</span>
                                    </div>
                                    <div className="right">
                                        <h5>Musical improvisation is the spontaneous music</h5>
                                        <p>July 25, 2019</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='mt-5' id='footer_follow'>
                        <div className="about">Follow me!</div>
                        <ul>
                            <li><div className="sidebar_box"><i className="sidebar_icon fa-brands fa-twitter" id='twitter'></i></div><a href="\">Facebok</a></li>
                            <li><div className="sidebar_box"><i className="sidebar_icon fa-brands fa-facebook" id='facebook'></i></div><a href="\">Twitter</a></li>
                            <li><div className="sidebar_box"><i className="sidebar_icon fa-brands fa-instagram" id='instagram'></i></div><a href="\">Instagram</a></li>
                            <li><div className="sidebar_box"><i className="sidebar_icon fa-solid fa-rss" id='rss'></i></div><a href="\">Rss</a></li>

                        </ul>
                    </div>
                    <div id='footer_cloud'>
                        <div className="about">Tag Cloud</div>
                        <div className="info">
                            <div className="d-flex">
                                <div className="tag">
                                    <div className="circle hcircle"></div>
                                    <p>Health</p>
                                </div>
                                <div className="tag">
                                    <div className="circle lfcircle"></div>
                                    <p>Lifestyle</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="tag">
                                    <div className="circle mscircle"></div>
                                    <p>Music</p>
                                </div>
                                <div className="tag">
                                    <div className="circle tgcircle"></div>
                                    <p>Technology</p>
                                </div>
                            </div>
                            <div className="d-flex">
                                <div className="tag">
                                    <div className="circle trlcircle"></div>
                                    <p>Travel</p>
                                </div>
                                <div className="tag">
                                    <div className="circle vdcircle"></div>
                                    <p>Video</p>
                                </div>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="hr">
                <hr className='my-5 text-center' />
                </div>
                <div id="f_subscribe">
                    <div className="subscribe_form">
                        <h2>Subscribe to our Newsletter</h2>
                        <div className="input_group">
                            <input placeholder='Ener your email address' type="text" />
                            <button>Submit</button>
                        </div>
                        <img src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/themes/groovy/assets/images/subscribe-decoration.png" alt="" />
                    </div>
                    <p className='text-center'>Subscribe to our email newsletter to get the <span className='fw-bold'>latest posts</span> delivered <span className='fw-bold'>right to your email</span>.</p>
                </div>
            </div>

        </>

    )
}

export default Footer