const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

function getToken() {
  if (typeof window === 'undefined') return null;
  return localStorage.getItem('token');
}

async function request<T>(path: string, options: RequestInit = {}): Promise<T> {
  const token = getToken();
  const res = await fetch(`${BASE_URL}${path}`, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...options.headers,
    },
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(error.message || 'Request failed');
  }

  return res.json();
}

export const api = {
  auth: {
    register: (data: object) => request('/auth/register', { method: 'POST', body: JSON.stringify(data) }),
    login: (data: object) => request('/auth/login', { method: 'POST', body: JSON.stringify(data) }),
  },
  users: {
    me: () => request('/users/me'),
    update: (data: object) => request('/users/me', { method: 'PATCH', body: JSON.stringify(data) }),
  },
  questions: {
    list: (params: Record<string, string>) => {
      const qs = new URLSearchParams(params).toString();
      return request(`/questions?${qs}`);
    },
  },
  attempts: {
    submit: (data: object) => request('/attempts/submit', { method: 'POST', body: JSON.stringify(data) }),
    history: () => request('/attempts'),
    get: (id: string) => request(`/attempts/${id}`),
  },
};
