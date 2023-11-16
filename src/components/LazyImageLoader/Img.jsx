import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css"
import React from 'react'

const Img = ({src, className}) => {
  return (
    <LazyLoadImage
    className={className||""}
    alt=""
    src={src}
    effect="blur"

    />
  )
}

export default Img
