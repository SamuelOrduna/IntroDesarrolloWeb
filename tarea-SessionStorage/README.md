# sessionStorage (versión simple) — vs localStorage

## ¿Qué es `sessionStorage`?
`window.sessionStorage` es un almacenamiento **clave–valor** (tipo `Storage`) que:
- Dura **solo durante la sesión de la pestaña/ventana actual**.
- Sobrevive a **recargas** de la página.
- Se **borra** al **cerrar** esa pestaña/ventana.
- **No** se comparte con otras pestañas, aunque sean del mismo sitio.
- Guarda **strings** (para objetos usa `JSON.stringify` / `JSON.parse`).

## API (Storage)
- `length`, `setItem(key, value)`, `getItem(key)`, `removeItem(key)`, `clear()`, `key(index)`.

## Estructura
- Modelo **clave–valor** por **origen** (mismo protocolo + host + puerto).

## Requerimientos
- Navegador moderno con **Web Storage** habilitado y mismo origen.

## Diferencias con `localStorage`

| Aspecto                 | `sessionStorage`                         | `localStorage`                         |
|-------------------------|------------------------------------------|----------------------------------------|
| Vida                    | Hasta cerrar la pestaña/ventana          | Hasta borrarlo (no expira)             |
| Entre pestañas          | No se comparte                           | Se comparte en pestañas del mismo origen |
| Tras recargar           | Se mantiene                              | Se mantiene                            |
| Uso típico              | Datos temporales de sesión               | Preferencias/cachés ligeras duraderas  |

## Ejemplos
```js
// Guardar string
sessionStorage.setItem("token", "abc123");

// Leer
const t = sessionStorage.getItem("token"); 

// Borrar una clave
sessionStorage.removeItem("token");

// Borrar todo
sessionStorage.clear();

// Guardar objeto 
sessionStorage.setItem("user", JSON.stringify({ id: 1, name: "Ana" }));
const user = JSON.parse(sessionStorage.getItem("user") ?? "null");
