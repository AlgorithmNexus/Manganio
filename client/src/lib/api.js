const API = import.meta.env.VITE_API_URL || '/api';

export async function get(path) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 5000);
  try {
    const response = await fetch(`${API}${path}`, { signal: controller.signal });
    if (!response.ok) throw new Error(`API ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}
