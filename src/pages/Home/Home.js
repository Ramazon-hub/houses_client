import "./Home.css";

// import { localUrl,herokuUrl } from '../../assets/config'

// Components


const Home = ({ company }) => {

  
    return (
    <>
     <div>
        {
          company && (
           <ul>
             {
               company.map(c=>(
                 <li>

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
