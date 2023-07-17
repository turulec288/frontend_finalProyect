import adService from "../services/ad.service";
import {useEffect, useState} from "react"


function AllAdsPages(params) {
    const [allAds, setAllAds] = useState([])

  useEffect(()=>{
    getData()
    
}, []);

const getData = async()=>{
    const apiResponse = await adService.getAll()
    setAllAds(apiResponse.data)
    console.log(allAds)
  }

  return (<>ESTO FUNCIONA
    {
        allAds.map((ad)=>{
           return <div key={ad._id}>
            <hr />
            <h2>Title: {ad.title}</h2>
            <p>Description: {ad.description}</p>
            <h2>Author: {ad.author.name }</h2>
           </div>
        })
    }
  
  </>);
}

export default AllAdsPages;
