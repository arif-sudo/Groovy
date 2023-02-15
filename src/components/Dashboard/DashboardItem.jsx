import React from 'react'
const DashboardItem = ({title, header, date, description, img, i}) => {
  return (
    
    <table className="table mt-5" style={{fontSize: 18, border: '1px solid black', backgroundColor: 'lightblue'}}>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Title</th>
      <th scope="col">Image</th>
      <th scope="col">Style</th>
      <th scope="col">Description</th>
      <th scope="col">Date</th>
    </tr>
  </thead>
  <tbody style={{}}>
    <tr >
      <th scope="row">{i + 1}</th>
      <td style={{width: '250px'}}>{title}</td>
      <td  style={{width: '130px'}}><img style={{border: '1px solid #333333'}} src={img} alt="err" width={100} height={100} /></td>
      <td >{header}</td>
      <td >{description}</td>
      <td >{date}</td>
    </tr>
  </tbody>
</table>
    
  )
}

export default DashboardItem