import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Tilt } from 'react-tilt'
import github from '../assets/github.png'
const Proj = ({ thumbnail, title, desc, live,repo }) => {
  return (
    <Tilt options={{
      max:45,
      scale:1,
      speed:450}} 
      style={{width: 250,background:"#5c6ac4",padding
      :"10px", borderRadius:"10px",height:"100%"}}
    >
        <div 
          style={{position:"relative",
                  width:"full",
                  height:"170px",
                  marginBottom:"20px",
                  cursor:"pointer"
          }}
          onClick={()=>{
                window.open(live,"_blank")
              }}
          >
            <img src={thumbnail} alt={title} 
                style={{
                  height:"100%",
                  width:"full",
                  borderRadius:"10px",
                  
                }}
                
            /> 
            <div className="card-img_hower "
              style={{
                position:"absolute",
                display:"flex",
                justifyContent:"end",
                margin:"12px",
                inset: "0px",
              }}>
              <div onClick={()=>{
                window.open(repo,"_blank")
              }} className=""
                style={{
                  width:"40px",
                  height:"40px",
                  borderRadius:"full",
                  display:"flex",
                  justifyContent:"center",
                  alignItems:"center",
                  cursor:"pointer",
                  background:"#000000",
                  
                }}>
                <img src={github} alt="" className="w-1/2 h-1/2 object-contain"
                  style={{
                    width:"50%",
                    height:"50%",
                    objectFit:"contain"
                  }}
                />
              </div>
            </div>
          </div>
          <div className="mt-1">
            <h2 className=""
              style={{
                color:"white",
                font:"bold",
                text:"24px",
                lineHeight:"1.8rem",
                marginBottom:"10px"
              }}>{title.substring(0,35)}</h2>  
            <p className="text-secondary text-[14px] mt-2"
              style={{
                color:"#9ca3af",
                text:"14px",
                marginTop:"2"
              }}>{desc.substring(0,100)}...</p>
              
          </div>
    </Tilt>
  );
};

export default Proj;
