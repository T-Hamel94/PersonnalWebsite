export function useAuth() {
    return !!localStorage.getItem('authToken');
  }