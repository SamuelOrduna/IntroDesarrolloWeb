import { PerfilUsuario } from "./src/PerfilUsuario.js";
import { MotorEmparejamiento } from "./src/MotorEmparejamiento.js";
import { HiloMensajes } from "./src/HiloMensajes.js";

const ana = new PerfilUsuario({
  id: "u1",
  nombre: "Ana",
  edad: 25,
  intereses: ["café", "arte", "correr"],
  ubicacion: { lat: 19.4326, lon: -99.1332 },
});

const luis = new PerfilUsuario({
  id: "u2",
  nombre: "Luis",
  edad: 26,
  intereses: ["arte", "cine", "yoga"],
  ubicacion: { lat: 19.36, lon: -99.18 },
});

const motor = new MotorEmparejamiento().agregarPerfil(ana).agregarPerfil(luis);
motor.darLike("u1", "u2");
motor.darLike("u2", "u1");
console.log("Matches de u1:", motor.obtenerMatchesMutuos("u1"));

const chat = new HiloMensajes({ idHilo: "t1", participantes: ["u1", "u2"] });
chat.enviarMensaje("u1", "¿Café el domingo?");
console.log("Último mensaje:", chat.ultimoMensaje());
