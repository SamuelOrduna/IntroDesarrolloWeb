export class MotorEmparejamiento {
  constructor() {
    this.perfiles = new Map();
    this.likes = new Map();   
    this.bloqueos = new Map();
  }

  agregarPerfil(perfil) {
    this.perfiles.set(perfil.id, perfil);
    if (!this.likes.has(perfil.id)) this.likes.set(perfil.id, new Set());
    if (!this.bloqueos.has(perfil.id)) this.bloqueos.set(perfil.id, new Set());
    return this;
  }

  darLike(deId, aId) {
    if (!this.perfiles.has(deId) || !this.perfiles.has(aId)) return false;
    if (this.bloqueos.get(deId)?.has(aId) || this.bloqueos.get(aId)?.has(deId)) return false;
    this.likes.get(deId).add(aId);
    return true;
  }

  bloquear(deId, aId) {
    if (!this.perfiles.has(deId) || !this.perfiles.has(aId)) return false;
    this.bloqueos.get(deId).add(aId);
    this.likes.get(deId).delete(aId);
    return true;
  }

  obtenerMatchesMutuos(paraId) {
    const resultado = [];
    const misLikes = this.likes.get(paraId) || new Set();
    for (const likedId of misLikes) {
      const likesDelOtro = this.likes.get(likedId) || new Set();
      const bloqueado =
        this.bloqueos.get(paraId)?.has(likedId) ||
        this.bloqueos.get(likedId)?.has(paraId);
      if (likesDelOtro.has(paraId) && !bloqueado) resultado.push(likedId);
    }
    return resultado;
  }

  sugerir(paraId, { limite = 5 } = {}) {
    const yo = this.perfiles.get(paraId);
    if (!yo) return [];
    const candidatos = [];
    for (const [id, p] of this.perfiles) {
      if (id === paraId) continue;
      if (this.bloqueos.get(paraId)?.has(id) || this.bloqueos.get(id)?.has(paraId)) continue;
      candidatos.push([id, yo.compatibilidadCon(p)]);
    }
    return candidatos
      .sort((a, b) => b[1] - a[1])
      .slice(0, limite)
      .map(([id]) => id);
  }
}
