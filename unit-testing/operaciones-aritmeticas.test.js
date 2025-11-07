const { sumar, restar, dividir, modulo, operar } = require("./operaciones-aritmeticas.js");

test("Debe sumar dos números correctamente", () => {
  expect(sumar(2, 3)).toBe(5);
});

test("Debe restar dos números correctamente", () => {
  expect(restar(2, 3)).toBe(-1);
  expect(restar(10, 7)).toBe(3);
});

test("Debe lanzar un error al dividir entre cero", () => {
  try {
    dividir(10, 0);
  } catch (e) {
    expect(e.message).toBe("No se puede dividir entre cero :(");
  }
});

test("Debe dar el residuo al dividir dos números",()=>{
    expect(modulo(21,5)).toBe(1);
});

test("Debe sumar dos números",()=>{
    expect(operar(7,8,"sumar")).toBe(15);
});

test("Debe restar dos números",()=>{
    expect(operar(7,8,"restar")).toBe(-1);
});

test("Debe multiplicar dos números",()=>{
    expect(operar(7,8,"multiplicar")).toBe(56);
});

test("Debe dividir dos números",()=>{
    expect(operar(16,4,"dividir")).toBe(4);
});

test("Debe dar el residuo al dividir dos números usando operar",()=>{
    expect(operar(22,6,"modulo")).toBe(4);
});

test("Debe de lanzar el default de operar",()=>{
    try{
        operar(5,3,"elevar");
    }catch(e){
        expect(e.message).toBe("Operación no válida");
    }
});