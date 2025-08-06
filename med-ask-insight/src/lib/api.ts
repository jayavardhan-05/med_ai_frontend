import { buildApiUrl, API_CONFIG } from './config';

export interface ChatRequest {
  question: string;
}

export interface ChatResponse {
  answer?: string;
  response?: string;
  sources?: Array<{
    content: string;
    metadata?: Record<string, any>;
  }>;
  citations?: Array<{
    content: string;
    metadata?: Record<string, any>;
  }>;
}

export class ApiService {
  private static async makeRequest<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = buildApiUrl(endpoint);
    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json',
        ...options.headers,
      },
      ...options,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  }

  static async sendChatMessage(request: ChatRequest): Promise<ChatResponse> {
    return this.makeRequest<ChatResponse>(API_CONFIG.ENDPOINTS.CHAT, {
      method: 'POST',
      body: JSON.stringify(request),
    });
  }

  static async checkHealth(): Promise<{ status: string }> {
    return this.makeRequest<{ status: string }>(API_CONFIG.ENDPOINTS.HEALTH);
  }
}
