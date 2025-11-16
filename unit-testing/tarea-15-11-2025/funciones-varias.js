function obtenerIP() {
  return "192.168.0.15";
}

// esta para el boolean
function escanearPuerto(puerto) {
  return puerto === 22; // Verdadero solo si es SSH :D
}

function obtenerToken() {
  return null;
}

function buscarUsuario(id) {
  if (id === 0) return undefined;
  return { id, nombre: "root" };
}

function hackearNASA() {
  throw new Error("Acceso denegado");
}

function configurarPayload() {
  return { tipo: "reverse-shell", activo: true };
}

module.exports = {
  obtenerIP,
  escanearPuerto,
  obtenerToken,
  buscarUsuario,
  hackearNASA,
  configurarPayload
};
