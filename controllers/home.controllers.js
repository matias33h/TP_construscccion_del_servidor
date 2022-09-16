const ctrlHome={}

ctrlHome.getHome=(req,res)=>{

res.send(
    
    "PETICION GET CON EXITO",
    
)

}

ctrlHome.postHome=(req,res)=>{

res.send("PETICION POST CON EXITO",

    "    INSTITUTO POLITECTCO FORMOSA   ",
    "----------------------------------------  "
    
)

}

ctrlHome.putHome=(req,res)=>{

res.send("PETICION PUT CON EXITO"

 
)


}

ctrlHome.deleteHome=(req,res)=>{

res.send("PETICION DELETE CON EXITO"

         

)


}

module.exports= ctrlHome;