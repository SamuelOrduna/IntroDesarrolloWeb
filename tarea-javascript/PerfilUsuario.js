/* Pensé en esta y en las otras clases como parte de un sistema de emparejamiento tipo "app de citas" xd
 esto para que tenga sentido tener perfiles, likes, bloqueos, sugerencias y chat... */

export class PerfilUsuario {
  //publicos
  id;
  nombre;
  edad;
  biografia;
  intereses; 
  ubicacion; 
  // privados
  #likes;   
  #bloqueos;

  constructor({
    id,
    nombre,
    edad,
    biografia = "",
    intereses = [],
    ubicacion = { lat: 0, lon: 0 },
  }) {
    if (!id || !nombre || typeof edad !== "number") {
      throw new Error("PerfilUsuario: id, nombre y edad son obligatorios");
    }
    this.id = id;
    this.nombre = nombre;
    this.edad = edad;
    this.biografia = biografia;
    this.intereses = Array.from(new Set(intereses.map(String)));
    this.ubicacion = ubicacion;
    this.#likes = new Set();
    this.#bloqueos = new Set();
  }

  //Métodos ≥3
  darLike(idUsuarioObjetivo) {
    if (this.#bloqueos.has(idUsuarioObjetivo)) return false;
    this.#likes.add(idUsuarioObjetivo);
    return true;
  }

  bloquear(idUsuarioObjetivo) {
    this.#bloqueos.add(idUsuarioObjetivo);
    this.#likes.delete(idUsuarioObjetivo);
    return true;
  }
  // que si este usuario instanciado le ha dado like a otro usuario en específico
  haDadoLike(idUsuarioObjetivo) {
    return this.#likes.has(idUsuarioObjetivo);
  }

  actualizarBiografia(texto) {
    this.biografia = String(texto).slice(0, 500);
    return this.biografia;
  }

  agregarInteres(interes) {
    const v = String(interes).trim();
    if (!v) return this.intereses;
    if (!this.intereses.includes(v)) this.intereses.push(v);
    return this.intereses;
  }  
 
  // Todo esto lo investigué y lo adapté de aquí: https://en.wikipedia.org/wiki/Haversine_formula
    /**
     * Calcula la distancia aproximada (en km) entre la ubicación del perfil y otra ubicación,
     * usando la fórmula de Haversine
     * @param {{ lat: number, lon: number }} otraUbicacion
     * @returns {number} Distancia en km con 2 decimales
     */
    distanciaA(otraUbicacion) {
    const RADIO_TIERRA_KM = 6371;
    // esto sí es de primaria xd
    const gradosARadianes = (grados) => (grados * Math.PI) / 180;

    // Extrae y convierte a radianes
    const { lat: lat1Deg, lon: lon1Deg } = this.ubicacion;
    const { lat: lat2Deg, lon: lon2Deg } = otraUbicacion;

    const lat1 = gradosARadianes(lat1Deg);
    const lon1 = gradosARadianes(lon1Deg);
    const lat2 = gradosARadianes(lat2Deg);
    const lon2 = gradosARadianes(lon2Deg);

    // Diferencias
    const deltaLat = lat2 - lat1;
    const deltaLon = lon2 - lon1;

    // y esto es ya la propia formula de Haversine
    const a =
        Math.sin(deltaLat / 2) ** 2 +
        Math.cos(lat1) * Math.cos(lat2) * Math.sin(deltaLon / 2) ** 2;
    // acá dejo la imagen de esta parte de la formula por si se quiere ver: 
    // https://wikimedia.org/api/rest_v1/media/math/render/svg/7d207a172060d22f590df9226d6074748a1c326f
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = RADIO_TIERRA_KM * c;
    return +distancia.toFixed(2);
    }

    /**
     * Combina dos factores:
     *  1. Similitud de intereses
     *  2. Cercanía geográfica (en km)
     *
     * @param {PerfilUsuario} otroPerfil
     * @param {{ maxKm?: number }} [opciones={}] - distancia máxima considerada ideal
     * @returns {number} Puntaje de compatibilidad entre 0 y 1
     */
    compatibilidadCon(otroPerfil, { maxKm = 30 } = {}) {
    const A = new Set(this.intereses.map((x) => x.toLowerCase()));
    const B = new Set(otroPerfil.intereses.map((x) => x.toLowerCase()));

    // Calcula la intersección (intereses en común)
    const interseccion = [...A].filter((x) => B.has(x)).length;
    // Calcula la unión (intereses totales de los dos sin repetir)
    const union = new Set([...A, ...B]).size || 1; // evita dividir entre 0

    // Índice de Jaccard: mide similitud entre conjuntos (0 = nada en común, 1 = idénticos).
    const jaccard = interseccion / union;

    /**
     * Aquí una explicación de cómo funciona y qué es eso del jaccard:
     * https://es.wikipedia.org/wiki/%C3%8Dndice_de_Jaccard
     */

    // Calcula la distancia geográfica entre ambos con la funcion que ya había hecho arriba de distanciaA...
    const d = this.distanciaA(otroPerfil.ubicacion);

    // Calcula un "factor de distancia" que vale 1 si están muy cerca y disminuye conforme se alejan.
    // Si la distancia supera maxKm, el factor llega a 0.
    const factorDistancia = Math.max(0, 1 - d / maxKm);

    // Combina los factores: 70% intereses + 30% cercanía geográfica.
    const compatibilidad = (0.7 * jaccard) + (0.3 * factorDistancia);

    // Redondea a 3 decimales y devuelve el resultado.
    return +compatibilidad.toFixed(3);
    }

    //P.D. Me divertí mucho haciendo esta clase y las otras dos :D
    // yo sé que no es un sistema realista ni nada, pero me gustó la idea de hacer algo así
    // y chance si está medio loco o es mucho pero pues... es que me gusta programar cosas locas xD
}
