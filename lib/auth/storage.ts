export function isBrowser() {
  return typeof window !== "undefined";
}

export function getStorageItem(key: string) {
  if (!isBrowser()) {
    return null;
  }

  return localStorage.getItem(key);
}

export function setStorageItem(key: string, value: string) {
  if (!isBrowser()) {
    return;
  }

  localStorage.setItem(key, value);
}

export function removeStorageItem(key: string) {
  if (!isBrowser()) {
    return;
  }

  localStorage.removeItem(key);
}
