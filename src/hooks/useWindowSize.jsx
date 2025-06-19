import React, { useEffect, useState } from 'react'

const useWindowSize = () => {
    const [size, setSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })
    useEffect(()=> {
        window.addEventListener('resize', ()=>{
            setSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        })
    }, [])
  return (
    <h1 style={{textAlign: 'center'}}>{size.width} X {size.height}</h1>
  )
}

export default useWindowSize
