import React from 'react'
import './Sidebar.css'
const SideBar = () => {
  return (
    <div className="g-5" id='sidebar'>

      <section className='my-5'>
        <div className="about">About Me</div>
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
        <p id='descript'>Hello! My name is Jonathan Doe working from Chile. I create some Ghost and Wordpress themes for differents markets, also, i offer live support via our ticket system.</p>
      </section>

      <section className='my-5'>
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
      </section>

      <section className='my-5'>
        <div className="about">Follow me!</div>
        <ul>
          <li><div className="sidebar_box"><i className="sidebar_icon fa-brands fa-twitter" id='twitter'></i></div><a href="\">Facebok</a></li>
          <li><div className="sidebar_box"><i className="sidebar_icon fa-brands fa-facebook" id='facebook'></i></div><a href="\">Twitter</a></li>
          <li><div className="sidebar_box"><i className="sidebar_icon fa-brands fa-instagram" id='instagram'></i></div><a href="\">Instagram</a></li>
          <li><div className="sidebar_box"><i className="sidebar_icon fa-solid fa-rss" id='rss'></i></div><a href="\">Rss</a></li>

        </ul>
      </section>

      <section>
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
      </section>
    </div>
  )
}

export default SideBar