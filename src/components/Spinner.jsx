import React from 'react'
import { ClipLoader } from "react-spinners";

const Spinner = ({loading}) => {
  return (
    <ClipLoader
        color='#4338ca'
        loading={loading}
        cssOverride={{
            display: 'block',
            margin: "100px auto"
        }}
        size={150}
    />
  )
}

export default Spinner
