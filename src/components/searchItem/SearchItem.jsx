import React from 'react'
import './searchItem.css'

const SearchItem = () => {
  return (
    <div className='searchItem'>
        <img src="https://cf.bstatic.com/xdata/images/hotel/square600/439217636.webp?k=f94537827755771c57865aae6e73c6536a2bcd55722c7ed55bb98e04b6bd73cd&o=&s=1" alt="" className="siImg" />
        <div className="siDesc">
          <h1 className='siTitle'>Oaks Inn Plaza at Delhi Airport</h1>
          <span className='siDistance'>13.3km from center</span>
          <span className='siTaxiOp'>Free airport taxi</span>
          <span className='siSubtitle'>
            Studio Apartment with Air conditioning
          </span>
          <span className='siFeatures'>
            Entire studio . 1 bathroom . 21m2 1 full bed
          </span>
          <span className='siCancelOp'>Free cancellation</span>
          <span className='siCancelOpSubtitle'>
            You can cancel later, so lock in this great price today!
          </span>
        </div>
        <div className='siDetails'>
          <div className="siRating">
            <span>Excellent</span>
            <button>8.9</button>
          </div>
          <div className='siDetailTexts'>
            <span className='siPrice'>Rs.1123</span>
            <span className='siTaxOp'>Includes taxes and fees</span>
            <button className='siCheckButton'>See availability</button>
          </div>
        </div>
    </div>
  )
}

export default SearchItem
