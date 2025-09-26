// src/app/environments/environment.ts
export const environment = {
  production: false,
  backendUrl:
    (typeof window !== 'undefined' && (window as any).__env?.BACKEND_URL) ||
    '' // vuoto in dev => usa il proxy /q e /api
};