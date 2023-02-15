import React from 'react'
import { connect } from 'react-redux'
import MyGrid from '../components/Grid/MyGrid'
import SideBar from '../components/Sidebar/Sidebar'

const Grids = (props) => {
  return (
     <div className="row g-5">
      {props.pvalue.map((element, i) => (
        <MyGrid title={element.title} img={element.img} desc={element.desc} date={element.date} header={element.header} key={i} />
        ))}
        <SideBar/>   
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    pvalue: state
  }
}

export default connect(mapStateToProps)(Grids)