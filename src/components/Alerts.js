import React from 'react'

export default function Alerts(props) {
  return (
    <div style={{height:'25px'}}>
      {props.alert && <div className={`alert alert-warning alert-dismissible fade show`} role="alert">
         {props.alert.msg}
    </div>}
    </div>
  )
}
