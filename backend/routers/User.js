const { Router } = require("express");
const { check } = require("express-validator");
const { esRolValido, emailExiste } = require("../helpers/db-validator");
const { validarCampos } = require("../middlewares/validar-campos");
const {
  usuariosGet,
  usuariosPost,
  usuariosPut,
  usuariosDelete,
  usuariosPatch,
} = require("../controllers/User");

const router = Router();

router.get("/", usuariosGet);
router.put("/:id", usuariosPut);
router.post(
  "/",
  [
    check("nombre", "El nombre es obligatorio").not().isEmpty(),
    check("password", "El password es obligatorio + de 6 letras").isLength({
      min: 6,
    }),
    check("correo", "El correo no es valido").isEmail(),
    check("correo").custom(emailExiste),
    // check("rol", "No es un rol Valido").isIn(["ADMIN_ROL", "USER_ROL"]),
    check("rol").custom(esRolValido),
    validarCampos,
  ],
  usuariosPost
);
router.delete("/", usuariosDelete);
router.patch("/", usuariosPatch);

module.exports = router;
