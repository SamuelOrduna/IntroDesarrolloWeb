/* contexto: esto lo hice para una app de citas...
   Esta clase agrupa mensajes entre 2+ usuarios, con "acuses" de lectura básicos */

export class HiloMensajes {
  // públicos
  idHilo;
  participantes;
  mensajes;     

  constructor({ idHilo, participantes = [] }) {
    if (!idHilo || participantes.length < 2) {
      throw new Error("HiloMensajes: idHilo y al menos 2 participantes son requeridos");
    }
    // primero convierto todo a string 
    const lista = participantes.map(String).filter(Boolean); 
    /*
    * Nota: .filter(Boolean)
    * elimina valores vacíos o falsos (como null, undefined, "", 0, false)
    * y así es como ya me garantizo que no haya participantes “vacíos”
    */
    if (new Set(lista).size < 2) {
      throw new Error("HiloMensajes: se requieren al menos 2 participantes distintos");
    }
    this.idHilo = String(idHilo);
    this.participantes = new Set(lista);
    this.mensajes = [];
  }

  // Métodos ≥3

  //marca como leído por quien lo envía
  enviarMensaje(deId, texto) {
    // friendly reminder: remitente es la persona que envía el mensaje... 
    const remitente = String(deId);
    if (!this.participantes.has(remitente)) {
      throw new Error("El remitente no pertenece a este hilo");
    }
    const msg = {
      from: remitente,
      text: String(texto ?? "").trim(),
      ts: new Date(),
      readBy: new Set([remitente]),
    };
    this.mensajes.push(msg);
    return msg;
  }

  ultimoMensaje() {
    return this.mensajes[this.mensajes.length - 1] || null;
  }

  noLeidos(paraId) {
    const uid = String(paraId);
    if (!this.participantes.has(uid)) return 0;
    return this.mensajes.filter((m) => !m.readBy.has(uid)).length;
  }

  marcarLeidos(paraId) {
    const uid = String(paraId);
    if (!this.participantes.has(uid)) return 0;
    let marcados = 0;
    for (const m of this.mensajes) {
      if (!m.readBy.has(uid)) {
        m.readBy.add(uid);
        marcados++;
      }
    }
    return marcados;
  }
}
