import React, { useEffect, useRef } from 'react'
import Typed from 'typed.js'

const TypingEffect = () => {
    const el = useRef();
    useEffect(()=>{
        const type = new Typed(el.current,{
            strings : ['Developer','Freelancer','Designer'],
            typeSpeed: 100,
            backSpeed: 100,
            loop : true,
            backDelay: 2000,
        })
    },[])

  return (
    <div>
        <span ref={el} className=' hero-h-2 text-white'></span>
    </div>
  )
}

export default TypingEffect