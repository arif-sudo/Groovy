import React from 'react'
import DashboardItem from '../components/Dashboard/DashboardItem'
import { connect } from 'react-redux'

const Dashboard = (props) => {
  return (
        <div className="row">
           { props.svalue.map((element, i) => (
            <DashboardItem title={element.title} description={element.desc} date={element.date} header={element.header} img={element.img} key={i} i={i} />
        ))}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        svalue: state
    }
}


export default connect(mapStateToProps)(Dashboard)