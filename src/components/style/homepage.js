import { useEffect } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import ImgMediaCard from "../common/main";
import axios from "axios";
function Homepage (){


    return<>
    <div>
    <Header/>
    <h1>Welcome to MOVIEBAZAAR</h1>
   
    <ImgMediaCard/>
    <Footer/>
    </div>
    </>
}



export default Homepage;