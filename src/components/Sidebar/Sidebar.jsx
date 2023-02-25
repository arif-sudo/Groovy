import React from 'react'
import './Sidebar.css'
import footerproducts from '../Footer/footerproducts'

const SideBar = () => {
  return (
    <div className="g-5" id='sidebar'>

      <section className='my-5'>
        <div className="about">{localStorage.getItem('lang') === 'en' ? footerproducts.about.en : footerproducts.about.az }</div>
        <div className="up">
          <img src="https://themes.estudiopatagon.com/wordpress/groovy/wp-content/uploads/2023/01/avatar-1.jpg" alt="" />
          <div className="menu">
            <h5>Jonathan Doe</h5>
            <p>Founder & Editor</p>
            <nav>
              <i className="sidebar_icon fa-brands fa-twitter" id='twitter'></i>
              <i className="sidebar_icon fa-brands fa-instagram" id='instagram'></i>
              <i className="sidebar_icon fa-brands fa-facebook" id="facebook"></i>
            </nav>
          </div>
        </div>
        <p id='descript'>{localStorage.getItem('lang') === 'en' ? footerproducts.aboutme.en : footerproducts.aboutme.az }</p>
      </section>

      <section className='my-5'>
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
      </section>

      <section className='my-5'>
        <div className="about">{localStorage.getItem('lang') === 'en' ? footerproducts.followme.en : footerproducts.followme.az}</div>
        <ul>
          <li><div className="sidebar_box"><i className="sidebar_icon fa-brands fa-twitter" id='twitter'></i></div><a href="\">Facebok</a></li>
          <li><div className="sidebar_box"><i className="sidebar_icon fa-brands fa-facebook" id='facebook'></i></div><a href="\">Twitter</a></li>
          <li><div className="sidebar_box"><i className="sidebar_icon fa-brands fa-instagram" id='instagram'></i></div><a href="\">Instagram</a></li>
          <li><div className="sidebar_box"><i className="sidebar_icon fa-solid fa-rss" id='rss'></i></div><a href="\">Rss</a></li>

        </ul>
      </section>

      <section>
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
      </section>
    </div>
  )
}

export default SideBar