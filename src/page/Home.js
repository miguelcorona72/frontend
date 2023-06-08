import React from "react";
import { useSelector } from "react-redux";
import logo from "../assets/pelicano.gif";
import robalon from "../assets/Captura Mayor.png";
import pelicanlogo from "../assets/PELICAN LOGO5.gif";
//import basshunter from "../assets/basshunter.png";
import HomeCard from "../component/HomeCard";


const Home = () => {
  const productData = useSelector((state) => state.product)
  console.log(productData)
  
  return (
    <div className="p-2 md:p-3">
      <div className="md:flex gap-4 py-2">

        <div className="md:w-1/2">
          <div className="flex gap-3 px-2 items-center">
            <img src={logo} className="h-16"></img> 
            <p className="bg-yellow-400 text-black hover:bg-black hover:text-yellow-300 p-2 text-medium font-bold rounded-md drop-shadow-md shadow-md cursor-pointer">¡¡Super PROMOS cada Mes!!</p>
            
           {/* bg-blue-400 hover:bg-blue-600 cursor-pointer */}
           {/* <img src="https://thumbs.dreamstime.com/b/dise%C3%B1o-de-ilustraci%C3%B3n-vectores-peces-bass-objeto-aislado-sobre-fondo-blanco-en-187269674.jpg" className="h-12"/> */}
          </div>
            <h2 className="text-4xl md:text-7xl font-bold py-3">La Mejor Tienda de Pesca <span className="text-blue-900 text-">en Internet</span></h2>
          <div className="md:flex">
          <div className="md:w-1/2">
            <img src={ robalon } className="h-auto m-auto p-4"></img>          
          </div>
          <div className="md:w-1/2">
            <p className="py-3 text-lg md:text-lg text-black font-bold">No solo vendemos artículos de pesca. La pesca es NUESTRA PASION.</p>
            <p className="text-lg md:text-medium text-red-700 font-bold text-center">¡¡Gracias por tu PREFERENCIA!!</p>
           {/*} <img src={ basshunter } className="w-52 py-3 m-auto"></img> */}
            <img src={ pelicanlogo } className="w-52 py-3 m-auto"></img>
          </div>
          </div>
          <div className="m-3">
            <button className="font-bold bg-black text-yellow-400 px-3 py-1 hover:bg-yellow-500 hover:text-black  rounded-md drop-shadow-md shadow-md">Nuevos Productos</button>
          </div>
        </div>
        <div className="md:w-1/2">
          <HomeCard/>
        </div>
      </div>
    </div>
  );
};

export default Home;