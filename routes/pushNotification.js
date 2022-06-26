const router = require("express").Router();
const push = require("../push");

router.post("/subscribe", (req, res) => {
  const suscription = req.body;
  push.addSubcription(suscription);
  res.json("subscribe");
  console.log("suscrito", suscription);
});

router.get("/key", (req, res) => {
  const key = push.getKey();
  res.send(key);
  console.log("key", key);
});

router.post("/push", (req, res) => {
  const notificacion = {
    titulo: req.body.titulo,
    cuerpo: req.body.cuerpo,
    usuario: req.body.usuario,
  };
  push.sendPush(notificacion);
  res.json(notificacion);
  console.log("notification enviada", notificacion);
});

module.exports = router;
