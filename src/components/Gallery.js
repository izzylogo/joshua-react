import React, { useState } from 'react'
import './Gallery.css'
import {IoMdClose} from 'react-icons/io'
import { data } from './constant'
import vid from '../assets/video1.mp4'

const Gallery = () => {

  const [model, setModel] = useState(false)
  const [tempimgSrc, setTempimgSrc] = useState('')

  const getImg = (imgSrc) => {
    setTempimgSrc(imgSrc)
    setModel(true)
  }

  return (
    <>
        <div className={model ? "model open" : "model"}>
            <IoMdClose className='close' onClick={() => setModel(false)}/>
            <img src={tempimgSrc}/>
        </div>
        <div className='gallery'>
            {data.map((item, index) => {
                return(
                    <div className='pics' key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width: '100%'}} alt='pictures'/>
                    </div>
                )
            })}
            <video autoPlay muted loop controls className='video'>
                <source src={vid} type="video/mp4" />
            </video>
        </div>
    </>
  )
}

export default Gallery