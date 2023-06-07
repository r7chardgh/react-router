import React from 'react'
import { useCurrentVan } from './HostVanDetail'

function HostVanPricing() {

  const {price} = useCurrentVan();
  return (
    <h3 className="host-van-price">${price}<span>/day</span></h3>
  )
}

export default HostVanPricing