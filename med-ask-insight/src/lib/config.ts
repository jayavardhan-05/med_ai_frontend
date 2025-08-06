// Backend API configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_BACKEND_URL || 'https://med-ai-backend-2-sc17.onrender.com',
  ENDPOINTS: {
    CHAT: '/chat',
    HEALTH: '/health',
  }
} as const;

// Helper function to build full API URLs
export const buildApiUrl = (endpoint: string): string => {
  return `${API_CONFIG.BASE_URL}${endpoint}`;
};
