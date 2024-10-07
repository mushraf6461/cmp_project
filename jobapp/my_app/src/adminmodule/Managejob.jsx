import React from 'react'
import Adminnavbar from './Adminnavbar'

const Managejob = () => {
  return (
    <>
      <Adminnavbar />
      <div style={{ marginLeft: 240, padding: 20,color:"white" }}> {/* Offset for the sidebar */}
        <h1>Manage Job</h1>
      </div>
    </>
  )
}

export default Managejob