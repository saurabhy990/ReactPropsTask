import React from 'react'
import MoviePage from './MoviePage';
const Home = () => {
 
 const movieData = [
   {
     logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSF18olWMjM4fN_dtEDm8YQRUWdpXXTereddj5OgegEHVU3XmZ8",
     title: "Brigth",
     year: "2017,David Ayer",
     movietime: "117 min",
     type: "Action,Crime",
     desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellat tempore totam quia facilis ipsa",
     banner:"https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/E8vDc_W8CLv7-yMQu8KMEC7Rrr8/AAAABffPAIPjEhT-aDZ2CPJqSvpx5OnrhKOXDYgwT2PIskGUmpJtnTgSHsWnJv84EVD_6XUt0hcgOVdyF2REM8Mvcia5Dx7rLq1QprqQ.jpg?r=b7e"
   },
   {
    logo: "https://m.media-amazon.com/images/M/MV5BZDkxMjExZjgtYWQwMi00OGYxLTgwZmMtMWY2MWU0ZTBkNGM0XkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_.jpg",
    title: "Tomb Raider",
    year: "2023",
    movietime: "120 min",
    type: "Action",
    desc:  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellat tempore",
    banner:"https://www.gamespot.com/a/uploads/original/1179/11799911/4185349-lara1.jpg"
  },
  {
    logo: "https://m.media-amazon.com/images/I/81BtU9dQIJL._AC_UF1000,1000_QL80_.jpg",
    title: "TOP Guns",
    year: "2021",
    movietime: "134 mins",
    type: "Action, Thriller",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellat tempore test test",
    banner:"https://sportshub.cbsistatic.com/i/2023/07/12/510d08be-35b7-4c3f-8e70-24ff97e28008/81btu9dqijl-sl1500.jpg?auto=webp&width=1200&height=675&crop=1.778:1,smart"
  },
  {
    logo: "https://i.pinimg.com/736x/ba/35/ab/ba35abfebe9ba7c313a07d34fa50e8ea.jpg",
    title: "Marvels",
    year: "2019",
    movietime: "200 mins",
    type: "Action",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum repellat tempore test tes",
    banner:"https://wallpapercave.com/wp/3f544I0.jpg"
  },
 ]; 

  return (
    <div>
     {movieData.map((ele,index)=>{

        return(
        < MoviePage 
          
         Logo = {ele.logo}
         Title ={ele.title}
         Year = {ele.year}
         Movietime = {ele.movietime}
         Type = {ele.type}
         Desc = {ele.desc}
         Banner = {ele.banner}
        key = {index}
        />
        )



        })


}
    </div>
  )
}

export default Home
