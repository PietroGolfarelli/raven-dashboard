export const environment = {
  production: true,
  backendUrl:
    (typeof window !== 'undefined' && (window as any).__env?.BACKEND_URL) ||
    ''
};
