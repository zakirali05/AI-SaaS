"use client"

import { useEffect, useState } from "react"
import { ProModal } from "./pro-model"

export const ModelProvider = ()=>{
   const [mounted,setMounted] = useState(false)
   
   useEffect(()=>{
    setMounted(true)
   },[])

   if(!mounted){
    return null
   }


    return ( 
        <>
        <ProModal/>
        </>
    )

}