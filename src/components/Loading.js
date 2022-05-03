import React from 'react'
import Load from "./Loading.gif"

const Loading = () => {
  return (
    <div className="text-center" style={{height:"40vh"}}>
        <img src={Load} alt="Loading...." />
    </div>
  )
}

export default Loading