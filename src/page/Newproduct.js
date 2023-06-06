import React, { useState } from 'react'
import {MdCloudUpload} from "react-icons/md"
import { ImagetoBase64 } from '../utility/ImagetoBase64'

const Newproduct = () => {
  const [data,setData] = useState({
    name : "",
    category : "",
    image : "",
    price : "",
    description : ""
  })

  const handleOnChange = (e)=>{
    const {name, value} = e.target

    setData((preve)=>{
      return{
        ...preve,
        [name] : value
      }
    })
  }

  const uploadImage = async(e) =>{
      const data = await ImagetoBase64(e.target.files[0])
     //  console.log(data)

    setData((preve)=>{
      return{
        ...preve,
        image : data
      }
    })

  }

  const handleSubmit = (e)=>{
    e.preventDefault()

    console.log(data)
  }

  return (
    <div className="p-4 ">
        <form className='m-auto w-full max-w-md shadow flex flex-col p-3 bg-indigo-800 text-white rounded' onSubmit={handleSubmit}>
          <label htmlFor='name'>Nombre</label>
          <input type={"text"} name="name" className='bg-yellow-100 text-black p-1 my-1' onChange={handleOnChange}/>

          <label htmlFor='category'>Categoria</label>
          <select className='bg-yellow-100 text-black p-1 my-1' id='category' name='category' onChange={handleOnChange}>
            <option>Señuelos</option>
            <option>Cañas</option>
            <option>Carretes</option>
            <option>Anzuelos    </option>
            <option>Linea</option>            
          </select>

          <label htmlFor='image'>Imagen
          <div className='h-40 w-full bg-yellow-100 text-black rounded flex items-center justify-center'>
            {
              data.image ? <img src={data.image} className="h-full" /> :<span className='text-7xl'><MdCloudUpload/></span>
            }
            
            
            <input type={"file"} id="image" onChange={uploadImage} className="hidden"/>      
          </div> 
          </label>

          <label htmlFor='price' className='my-1'>Precio</label>
          <input type={"text"} className='bg-yellow-100 text-black p-1 my-1' name='price' onChange={handleOnChange}/>

          <label htmlFor='description'>Descripción</label>
          <textarea rows={2} className='bg-yellow-100 text-black p-1 my-1 resize-none' name='description' onChange={handleOnChange}></textarea>
        
          <button className='bg-gray-900 hover:bg-red-600 text-white text-lg font-medium drop-shadow rounded'>Guardar</button>
        </form>  
    </div>
  )
}

export default Newproduct