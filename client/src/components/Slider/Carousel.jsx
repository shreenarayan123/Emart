import ArrowBackIosRoundedIcon from '@mui/icons-material/ArrowBackIosRounded';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



const Carousel = () => {
  const ArrowNext = ({ currentSlide, slideCount, ...props }) => (
    <ArrowForwardIosRoundedIcon {...props}  style={{color:"white" ,opacity:"0.7", fontSize:"5rem", position:'absolute',right:"3rem" }}/>
  );

  const ArrowPrev = ({ currentSlide, slideCount, ...props }) => (
    <ArrowBackIosRoundedIcon {...props} style={{color:"white" ,opacity:"0.7", fontSize:"5rem",zIndex:"10",position:'absolute',left:"3rem"}}/>
  );
 

    const settings = {
        dots: true ,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <ArrowNext/>,
        prevArrow:  <ArrowPrev/>,
        appendDots: dots => (
          <div>
            <ul style={{ margin: "0px"}}> {dots} </ul>
          </div>
        )
      };



  return (
    <Slider {...settings}>
      

      <div>
        <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Flip/CML/PC/V1/V2/PC_01.gif" alt="" style={{width:"100vw",height:"68.5vh"}} />
      </div>
      <div>
        <img src="/img/carousel1_.png" alt="" style={{width:"100vw" }}/>
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/pc/CML/CML-2._SX3000_QL85_.jpg" alt="" style={{width:"100vw" }} />
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/pc/CML/CML-1._SX3000_QL85_.jpg" alt="" style={{width:"100vw" }}/>
      </div>
      <div>
        <img src="https://m.media-amazon.com/images/G/31/img23/Fashion/Event/JuneWRS/eventpage/pc/CML/CML-7._SX3000_QL85_.jpg" alt="" style={{width:"100vw" }}/>
      </div>
      
     
      
    </Slider>
    
  )
}

export default Carousel

