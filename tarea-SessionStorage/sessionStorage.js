const SS = (() => {
  const s = window.sessionStorage;

  function setString(key, value) {
    s.setItem(key, String(value));
  }

  function getString(key) {
    return s.getItem(key); 
  }

  function setJSON(key, obj) {
    s.setItem(key, JSON.stringify(obj));
  }

  function getJSON(key, fallback = null) {
    const raw = s.getItem(key);
    if (raw === null) return fallback;
    try {
      return JSON.parse(raw);
    } catch {
      return fallback;
    }
  }

  function has(key) {
    return s.getItem(key) !== null;
  }

  function remove(key) {
    s.removeItem(key);
  }

  function clearAll() {
    s.clear();
  }

  function clearByPrefix(prefix) {
    const toDelete = [];
    for (let i = 0; i < s.length; i++) {
      const k = s.key(i);
      if (k && k.startsWith(prefix)) toDelete.push(k);
    }
    toDelete.forEach((k) => s.removeItem(k));
    return toDelete.length; 
  }

  return {
    setString,
    getString,
    setJSON,
    getJSON,
    has,
    remove,
    clearAll,
    clearByPrefix,
  };
})();
