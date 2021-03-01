import React from "react";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Cards from "./Components/Cards";
import Review from "./Components/Review";
import Profile1 from "./assets/Img.png";
import Profile2 from "./assets/Img(4).png";
import Profile3 from "./assets/Img(5).png";
import Profile4 from "./assets/Img(6).png";
import Reviewer_1 from "./assets/Img(7).png";
import Reviewer_2 from "./assets/Img (1).png";
import Reviewer_3 from "./assets/Img (3).png";
import Flag from "./assets/flag_1.png";
import Flag_1 from "./assets/flag.png";
export default function App() {
  let profiles=[{
    profile:Profile1,
    button:"Folk",
    name:"Benny Dayal",
    info:"More Info"
  },
  {
    profile:Profile2,
    button:"Bollywood",
    name:"Vijay Yesudas",
    info:"More Info" 
  },
  {
    profile:Profile3,
    button:"Folk",
    name:"Andrea Jeremiah",
    info:"More Info" 
  },
  {
    profile:Profile4,
    button:"Folk",
    name:"Shilpa Rao",
    info:"More Info" 
  }

]

let reviews =[{
      profile:Reviewer_1,
      name:"Hellen Jummy",
      flag:Flag,
      palo:"PALO ALTO,CA",
      info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. "    
},
{
  profile:Reviewer_2,
  name:"Issac Oluwatemilorun",
  flag:Flag_1,
  palo:"PALO ALTO,CA",
  info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. "    
},
{
  profile:Reviewer_3,
  name:"Hellen Jummy",
  flag:Flag,
  palo:"PALO ALTO,CA",
  info:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. "    
}
];
  return (
    <div>
      <Header/>
      <Home/>
      <div className="cards">
      <div className="col-12  d-flex justify-content-between" >
           <h5 className="text-white">Reviews</h5>
           <span className="text-white">View all</span>
         </div>
        <div className="d-flex w-100 justify-content-around">
        {profiles.map(prof=>(
            <Cards value={prof}/>
        ))}
        </div>
       </div> 
       <div className="row m-0 py-5 dark d-flex justify-content-around">
         <div className="col-12 d-flex justify-content-between">
           <h5 className="text-white">Reviews</h5>
           <span className="text-white">View all</span>
         </div>
        {reviews.map(review=>(
            <div className="col-3">
              <Review data={review}/>
            </div>
        ))}
       </div> 
       
    </div>
  )
}

