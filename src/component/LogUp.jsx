import React from 'react'
import Details from './Details'
import { Outlet } from 'react-router-dom'

const LogUp = () => {
  return (
    <div>
      <h1>
        LogUp
      </h1>

      <Outlet />
    </div>
  )
}

export default LogUp