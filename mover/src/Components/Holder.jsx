import { useEffect, useState } from 'react'
import {getImage} from '../Photo'
import {IoArrowForwardCircleOutline, IoArrowBackCircleOutline} from 'react-icons/io5'

const Holder = () => {
    const [index, setIndex] = useState(0)
    const image = getImage()
    function forward(){
        setIndex(index => index < image.length - 1 ? index + 1:0)
    }
    

    function backward(){
        index > 0 ? setIndex(index => index - 1) : setIndex(image.length - 1)

    }
   
    console.log(index)

    useEffect(() => {
        
        let move = setInterval(() => {
            setIndex(index => index < image.length - 1 ? index + 1:0)

        }, 3000)

        return () => clearInterval(move)
    }, [])
    
    return(
        <>
        <h1>The Carousel</h1>
        <div className='main'>

            <IoArrowBackCircleOutline size={28} onClick={backward}/>
            <section className='hero'>
                <img className={'play'} src={image[index]} alt="some image" />
            </section>
            <IoArrowForwardCircleOutline size={28} onClick={forward}/>
        </div>
        </>
    )
}
export {Holder}