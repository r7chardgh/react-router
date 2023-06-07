import React from 'react'
import { useCurrentVan } from './HostVanDetail'
function HostVanPhotos() {

  const {imageUrl} = useCurrentVan();
  console.log('current van retrived ? ',imageUrl
  );
  return (<>
    <div>HostVanPhotos</div>
  <img src={imageUrl}className="host-van-detail-image"  />
  </>
  )
}

export default HostVanPhotos