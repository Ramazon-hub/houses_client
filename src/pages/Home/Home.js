import "./Home.css";




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
