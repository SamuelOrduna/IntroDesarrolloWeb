# Uso de Matchers en JEST

## Introducción
En JEST trabajamos con **expectativas** y **matchers**. La idea es que `expect()` reciba el resultado de una función, y luego lo compares con un matcher que describe lo que debería pasar.

El más común es:

```js
expect(valor).toBe(valorEsperado)
```

`.toBe()` usa comparación estricta (`Object.is`). Sin embargo, para objetos, errores, truthiness y otros casos, JEST ofrece más matchers mucho más útiles :D

---

## `.toEqual()`
Sirve para comparar objetos o arreglos revisando **toda su estructura interna**.

```js
test('object assignment', () => {
  const data = { one: 1 };
  data['two'] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});
```

---

## `.toBeTruthy()`
Valida que algo sea **verdadero** según un `if`.

```js
expect("hola").toBeTruthy();
expect(1).toBeTruthy();
```

# Notaaaa!!!!

## Valores **falsy** en JavaScript  
Los valores *falsy* son exactamente **7**:

- `false`
- `0`
- `""` (string vacío)
- `null`
- `undefined`
- `NaN`
- `0n` (bigint cero) -> que esta cosa en un tipo especial de notación para números enooormes! (se agrega n al final)

## Todo lo demás es **truthy**:

- `"hola"` → truthy  
- `1` → truthy  
- `[]` → truthy  
- `{}` → truthy  
- `"0"` → truthy  
- `"false"` → truthy  

---

## `.toBeFalsy()`
Valida valores considerados **falsos** por JavaScript.
# Es lo mismo que el caso anterior, solo que al revés, pasa si el valor es falso en un if
```js
expect(0).toBeFalsy();
expect("").toBeFalsy();
```

---

## `.toBeNull()`
Solo pasa cuando el valor es **null**.

```js
expect(null).toBeNull();
```

---

## `.toBeUndefined()`
Solo pasa cuando el valor es **undefined**.

```js
expect(variable).toBeUndefined();
```

---

## `.toStrictEqual()`
Versión estricta de `.toEqual()`, no ignora:
- propiedades con `undefined`
- huecos en arreglos
- diferencias de tipo de objeto

```js
expect([1,,3]).not.toStrictEqual([1, undefined, 3]);
```

---

## `.toThrow()`
Valida que una función **lance un error**.

```js
function boom() {
  throw new Error("Boom!");
}

test('debe lanzar error', () => {
  expect(() => boom()).toThrow();
  // esta solo valida que arroje un error sim importar cuál.
  expect(() => boom()).toThrow("Boom!");
  // esta forma valida que el mensaje del error contenga ese string.
  // Nota; No tiene que ser idéntico, solo contenerlo.
  expect(() => boom()).toThrow(/Boom/);
  // Valida que el mensaje del error haga match con una expresión regular.
  // esto está genial pq se podría ocupar REGEX (regular expresions) :o, cool!
});
```

---

## Conclusión
Estan muy útiles estas formas de hacer UT´s (: Me gustó bastante esta investigación..