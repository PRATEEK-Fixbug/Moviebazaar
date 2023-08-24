import { useEffect } from "react";
import Footer from "../common/footer";
import Header from "../common/header";
import ImgMediaCard from "../common/main";
import axios from "axios";
function Homepage (){

    // const options = {
    //     method: 'GET',
    //     url: 'https://imdb-top-100-movies.p.rapidapi.com/',
    //     headers: {
    //       'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
    //       'X-RapidAPI-Host': 'imdb-top-100-movies.p.rapidapi.com'
    //     }
    //   };
      
    //   async function getMoviesData() {
    //       try{
    //       const response = await axios.request(options);
    //       console.log(response.data);
    //   } catch (error) {
    //       console.error(error);
    //   }}
    //   useEffect(() => 
    //   {
    //       getMoviesData();
    //   }, []);



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