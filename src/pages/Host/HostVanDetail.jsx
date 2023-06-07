import React from "react";
import { useParams } from "react-router-dom";

function HostVanDetail() {
  const [currentVan, setCurrentVan] = React.useState(null);
  const params = useParams();
  React.useEffect(() => {
    fetch(`/api/host/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans[0]));
  }, [params.id]);

  if(!currentVan){
    return <h1>Loading...</h1>
  }

  return (
    <div>
        <img src={currentVan.imageUrl} width={150}/>
        <h2>{currentVan.name}</h2>
        <p>{currentVan.price}</p>
        <p>{currentVan.type}</p>

    </div>
  )
}

export default HostVanDetail;
