import React, {useState} from 'react'
import './hotel.css'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import MailList from '../../components/mailList/MailList'
import Footer from '../../components/footer/Footer'

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/square600/95058973.webp?k=979587fd2ac8f7777a34758264d557eef57d0e98e58bdaeb121f5b968a20f810&o=&s=1'
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/square600/115324092.webp?k=6ff9b4ee66f8f5e44f3d90f38e4113e3a3cee81be1f4cb9b9e1c4eabb61ead4d&o=&s=1'
    },
    {
      src:'https://cf.bstatic.com/xdata/images/hotel/square600/87428762.webp?k=9a065fcd92168145d8c8358701662c76793535597b678efc8f6921c8e3c188e6&o=&s=1'
    },
    {
      src:'https://q-xx.bstatic.com/xdata/images/xphoto/300x240/45450082.jpeg?k=beb101b827a729065964523184f4db6cac42900c2415d71d516999af40beb7aa&o='
    },
    {
      src:'https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450064.jpeg?k=4d4ea22dc4828fd55a3889e90531c9841ddb2d9abf460c420cdd24f2a9b658d2&o='
    },
    {
      src:'https://r-xx.bstatic.com/xdata/images/xphoto/300x240/45450075.jpeg?k=d23cf8443780ac09f46f59e40393d75dbe64b06029b4959c60b81b7fdefc9be0&o='
    }
  ]

  const handleOpen = (i)=>{
    setSlideNumber(i);
    setOpen(true)
  };

  const handleMove = (direction) =>{
    let newSlideNumber;
    
     if(direction==='l'){
     newSlideNumber = slideNumber === 0 ? 5 : slideNumber-1
     }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber+1
     }

     setSlideNumber(newSlideNumber)
    };

  return (
    <div>
      <Navbar/>
      <Header type='list'/>
      <div className='hotelContainer'>
        {open && <div className="slider">
           <FontAwesomeIcon icon={faCircleXmark} className='close' onClick={()=>setOpen(false)}/> 
           <FontAwesomeIcon icon={faCircleArrowLeft} className='arrow' onClick={()=>handleMove('l')}/>
           <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt='' className='sliderImg'/> 
           </div> 
           <FontAwesomeIcon icon={faCircleArrowRight} className='arrow' onClick={()=>handleMove('r')}/>
        </div>}
        <div className="hotelWrapper">
          <button className='bookNow'>Reserve or Book Now!</button>
          <h1 className="hotelTitle">Grand Hotel</h1>
          <div className='hotelAddress'>
            <FontAwesomeIcon icon={faLocationDot}/>
            <span>Elton St 125 New Delhi</span>
          </div>
          <span className='hotelDistance'>
            Excellent location - 500m from ceter
          </span>
          <span className='hotelPriceHighlight'>Book a stay over Rs.1123 at this property and get a free airport taxi</span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className='hotelImageWrapper'>
                <img onClick={()=>handleOpen(i)} src={photo.src} alt='' className='hotelImg'/>
                </div>
            ))}
          </div>
          <div className='hotelDetails'>
            <div className="hotelDetailsTexts">
              <h1 className='hotelTitle'>Stay in the heart of Delhi</h1>
              <p className='hotelDesc'>
                Located a 5-minute walk from St.Florians Gate in Delhi, Tower Street Apartment. Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius reprehenderit voluptatum nam illo, nulla quisquam tempore, asperiores quia eum, eveniet quos impedit cumque quibusdam aspernatur vel numquam tenetur commodi reiciendis. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi, reiciendis ad illo quibusdam magni ipsum totam et tenetur assumenda laborum recusandae corrupti tempora excepturi cumque soluta esse mollitia at porro!
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for a 9-night stay!</h1>
              <span>
                Located in the real heart of delhi, this property has an excellent location score of 9.4!
              </span>
              <h2>
                <b>Rs.2345</b> (9 nights)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList/>
        <Footer/>
      </div>
    </div>
  )
}

export default Hotel
