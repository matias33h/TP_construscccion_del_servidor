const router= require("express").Router();  //Router es para crear  la ruta

const {
getTareas,
postTareas,
putTareas,
deleteTareas,
getTareas,
putTareas


}=require("../controllers/tareas.controllers") //importamos los datos de home controllers


router.get("/acceder",getTareas)
router.post("/leer",postTareas)
router.put("/actualizar",putTareas)
router.delete("/eliminar",deleteTareas)

module.exports= router

