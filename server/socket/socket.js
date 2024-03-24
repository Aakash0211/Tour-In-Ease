const socket=require("socket.io")(3000,({origin:"http://localhost:3000/"}))

socket.on("connection",(message)=>{
    console.log("user connected",message)
    
  })
  