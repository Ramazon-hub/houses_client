import { Link } from "react-router-dom/cjs/react-router-dom.min";
import "./Home.css";




const Home = ({ company }) => {

  
    return (
    <>
     <div id="container" >
       <h2>Biz bilan hamkorlik qilganingizdan hursandmiz !</h2>
       <h2>Uzingiz uchun qulay va shinam uylarni tanlash uchun <Link className='buy-link' to='/buy'  >sotuv</Link> bo'limiga o'ting</h2>
        {
          company && (
           <ul id="company-list" >
             {
               company.map(c=>(
                 <li id="company-item" key={c.id} >
                 <img src={c.media[0]} width={200} alt="img"/>
              <h1>{c.name}</h1>
              <a href={c.link}  target='_blank' id="company-link" rel="noreferrer" >Companiya haqida batafsil</a>

                 </li>
               ))
             }
           </ul>
          )
        }
       
     </div>
    </>
  );
};

export default Home;
