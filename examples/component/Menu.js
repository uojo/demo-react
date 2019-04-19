import React from "react"


function keysMap(req,callback){
  req.keys().map(callback)
}
let menuItems = []
keysMap(require.context("./pages/", true, /index\.js$/),(p)=>{
  let mr = p.match(/\/([^\/]*)\//)
  if(mr){
    menuItems.push(mr[1])
  }
})
console.log("menuItems: ", menuItems)
// menuItems = ["Event","Nest"]

// v.charAt(0).toLocaleLowerCase()+v.slice(1)

class Menu extends React.Component {
  render(){
    
    return (
      <div style={{borderBottom:"1px solid #ccc",padding:"0 0 5px 0"}}>
        {
          menuItems.map((v,i)=>(
            <a key={i} style={{marginRight:"10px"}} href={"#/"+v}>{v}</a>
          ))
        }
      </div>
    )
  }
}

export {
  menuItems,
  Menu
} 
  