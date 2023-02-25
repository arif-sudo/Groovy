import React from 'react'
import './Footer.css'
import footerproducts from './footerproducts'

const Footer = () => {
    return (
        <>
            <div className="footer_containerr">
                <div id="footer">
                    <div className="foot1">
                        <img src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2022/11/logo-groovy-300x81.png" alt="" />
                        <div className="textwidget">
                            {localStorage.getItem('lang') === 'en'
                                ?
                                footerproducts.text.en.map(item => (<p>{item.title}</p>))
                                :
                                footerproducts.text.az.map(item => (<p>{item.title}</p>))
                            }

                            {localStorage.getItem('lang') === 'en'
                                ?
                                footerproducts.parag.en.map(item => (<p>{item.parag}</p>))
                                :
                                footerproducts.parag.az.map(item => (<p>{item.parag}</p>))
                            }

                        </div>
                    </div>
                    <div id="footer_recent">
                        <div className='mt-5'>
                            <div className="about">{localStorage.getItem('lang') === 'en' ? footerproducts.recentposts.en.map(item => (item.title)) : footerproducts.recentposts.az.map(item => (item.title)) } </div>
                            <div className="menu">
                                <div className="winner">
                                    <div className="img_cont">
                                        <span className='svg'>1</span>
                                    </div>
                                    <div className="right">
                                        <h5>{localStorage.getItem('lang') === 'en' ? footerproducts.winner1.en.map(item => item.title) : footerproducts.winner1.az.map(item => item.title)  }</h5>
                                        <p>August 15, 2019</p>
                                    </div>
                                </div>
                                <div className="winner">
                                    <div className="img_cont " id='img_cont2'>
                                        <span className='svg'>2</span>
                                    </div>
                                    <div className="right">
                                        <h5>{localStorage.getItem('lang') === 'en' ? footerproducts.winner2.en : footerproducts.winner2.az}</h5>
                                        <p>11 January, 2019</p>
                                    </div>
                                </div>
                                <div className="winner">
                                    <div className="img_cont" id='img_cont3'>
                                        <span className='svg'>3</span>
                                    </div>
                                    <div className="right">
                                        <h5>{localStorage.getItem('lang') === 'en' ? footerproducts.winner3.en : footerproducts.winner3.az}</h5>
                                        <p>July 25, 2019</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className='mt-5' id='footer_follow'>
                        <div className="about">{localStorage.getItem('lang') === 'en' ? footerproducts.followme.en : footerproducts.followme.az}</div>
                        <ul>
                            <li><div className="sidebar_box"><i className="sidebar_icon fa-brands fa-twitter" id='twitter'></i></div><a href="\">Facebok</a></li>
                            <li><div className="sidebar_box"><i className="sidebar_icon fa-brands fa-facebook" id='facebook'></i></div><a href="\">Twitter</a></li>
                            <li><div className="sidebar_box"><i className="sidebar_icon fa-brands fa-instagram" id='instagram'></i></div><a href="\">Instagram</a></li>
                            <li><div className="sidebar_box"><i className="sidebar_icon fa-solid fa-rss" id='rss'></i></div><a href="\">Rss</a></li>

                        </ul>
                    </div>
                    <div id='footer_cloud'>
                        <div className="about">{localStorage.getItem('lang') === 'en' ? footerproducts.tagcloud.en : footerproducts.tagcloud.az}</div>
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

                        {localStorage.getItem('lang') === 'en' ?
                        footerproducts.sub.en.map(item => (<h2>{item.title}</h2>)) :
                        footerproducts.sub.az.map(item => (<h2>{item.title}</h2>))
                        }
                        
                        <div className="input_group">
                            <input placeholder='Ener your email address' type="text" />
                            <button>Submit</button>
                        </div>
                        <img src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/themes/groovy/assets/images/subscribe-decoration.png" alt="" />
                    </div>
                    {localStorage.getItem('lang') === 'en' ?
                    footerproducts.smsub.en.map(item => (<p className='text-center'>{item.title}</p>)): 
                    footerproducts.smsub.az.map(item => (<p className='text-center'>{item.title}</p>))
                    }
                </div>
            </div>

        </>

    )
}

export default Footer