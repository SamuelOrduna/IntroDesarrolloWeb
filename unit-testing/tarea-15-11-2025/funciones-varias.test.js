const {
  obtenerIP,
  escanearPuerto,
  obtenerToken,
  buscarUsuario,
  hackearNASA,
  configurarPayload,
} = require("./funciones-varias");

test("obtenerIP debe regresar la IP esperada (toEqual)", () => {
  expect(obtenerIP()).toEqual("192.168.0.15");
});

test("El puerto 22, que sería el de SSH, debe ser considerado abierto (toBeTruthy) ", () => {
  expect(escanearPuerto(22)).toBeTruthy();
});

test("El puerto 80 no debe ser SSH (toBeFalsy)", () => {
  expect(escanearPuerto(80)).toBeFalsy();
});

test("obtenerToken debe regresar null (toBeNull)", () => {
  expect(obtenerToken()).toBeNull();
});

test("buscarUsuario(0) debe regresar undefined (toBeUndefined)", () => {
  expect(buscarUsuario(0)).toBeUndefined();
});

test("hackearNASA [xDDD] debe lanzar un error (toThrow)", () => {
  expect(() => hackearNASA()).toThrow("Acceso denegado");
});

test("configurarPayload debe regresar un objeto exacto (toStrictEqual)", () => {
  expect(configurarPayload()).toStrictEqual({
    tipo: "reverse-shell",
    activo: true,
  });
});
