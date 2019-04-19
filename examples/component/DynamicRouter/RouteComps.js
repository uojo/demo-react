import React from "react"
import Bundle from "./Bundle"
import {menuItems} from "../Menu"

let handle = {}

/* const Event=(props)=>(
  <Bundle load={
    (cb)=>{
      require.ensure([],require=>{
        let a = "./Component.es6"
        let cpt = require(`${a}`).default
        // console.log("cpt: ", cpt)
        cb(cpt)
      })
    }
  }>
    {Component=><Component {...props}/>}
  </Bundle>
)

const Nest=(props)=>(
  <Bundle load={
    (cb)=>{
      require.ensure([],require=>{
        cb(require("../Nest").default)
      },"about")
    }
  }>
    {(Component)=><Component {...props}/>}
  </Bundle>
)

handle = {
  Event,
  Nest
} */

menuItems.map(v=>{
  handle[v] = (props)=>(
    <Bundle load={
      (cb)=>{
        require.ensure([],require=>{
          // let a = "./Component.es6"
          // let cpt = require("../"+v).default
          let cpt = require("../pages/"+v+"/index").default
          cb(cpt)
        })
      }
    }>
      {Component=><Component {...props}/>}
    </Bundle>
  )
})

// console.log("handle: ", handle)

export default handle
