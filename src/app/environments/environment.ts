export const environment = {
  production: false,
  backendUrl:
    (typeof window !== 'undefined' && (window as any).__env?.BACKEND_URL) ||
    'http://localhost:8080'
};
