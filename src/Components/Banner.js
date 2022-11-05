import {React ,useState} from 'react'
import "./banner.css"
import {Button} from "@mui/material"
import Search from './Search'

function Banner() {
  const [showDates, setShowDates] =  useState(false)
  return (
    <div className="banner">
      <div className="banner_search">
        {
          showDates && <Search />
        }
        <Button variant="outlined" className='banner_searchBtn' onClick={() => setShowDates(!showDates)} >
          {
            showDates ? "Hide" : "Show Dates"
          }
        </Button>
      </div>
          <div className="banner_info">
              <h1>Get Out And strectch your imagination </h1>
              <h5>plan different kind of getway to uncover the hidden gems near you.</h5>
              <Button variant="outlined">Explore Nearby</Button>
          </div>
     </div>
  )
}

export default Banner