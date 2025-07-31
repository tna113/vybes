export class Network {
  private static baseUrl: string = 'https://zwbbzxleomraswznvsnd.supabase.co';
  private static LEGACY_API_KEY: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3YmJ6eGxlb21yYXN3em52c25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNDg2OTQsImV4cCI6MjA2MDkyNDY5NH0.CJiKl6OERmD-HoDU6w0gFVjbR_TGyTU7Dl-EF_e64tA';

  private static getDefaultHeaders(): Record<string, string> {
    return {
      'Content-Type': 'application/json',
      apikey: this.LEGACY_API_KEY,
      Authorization: `Bearer ${this.LEGACY_API_KEY}`,
    };
  }

  /**
   * Makes a GET request to the specified endpoint
   * @param endpoint - The endpoint to fetch from (will be appended to baseUrl)
   * @param options - Optional fetch options
   * @returns Promise with the response data
   */
  static async get<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          ...this.getDefaultHeaders(),
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Makes a POST request to the specified endpoint
   * @param endpoint - The endpoint to post to (will be appended to baseUrl)
   * @param data - The data to send
   * @param options - Optional fetch options
   * @returns Promise with the response data
   */
  static async post<T>(
    endpoint: string,
    data: Record<string, unknown>,
    options?: RequestInit,
  ): Promise<T> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          ...this.getDefaultHeaders(),
          ...options?.headers,
        },
        body: JSON.stringify(data),
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Makes a PUT request to the specified endpoint
   * @param endpoint - The endpoint to put to (will be appended to baseUrl)
   * @param data - The data to send
   * @param options - Optional fetch options
   * @returns Promise with the response data
   */
  static async put<T>(
    endpoint: string,
    data: Record<string, unknown>,
    options?: RequestInit,
  ): Promise<T> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          ...this.getDefaultHeaders(),
          ...options?.headers,
        },
        body: JSON.stringify(data),
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Makes a DELETE request to the specified endpoint
   * @param endpoint - The endpoint to delete (will be appended to baseUrl)
   * @param options - Optional fetch options
   * @returns Promise with the response data
   */
  static async delete<T>(endpoint: string, options?: RequestInit): Promise<T> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        method: 'DELETE',
        headers: {
          ...this.getDefaultHeaders(),
          ...options?.headers,
        },
        ...options,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }

  /**
   * Makes a custom fetch request
   * @param endpoint - The endpoint to request (will be appended to baseUrl)
   * @param options - Fetch options
   * @returns Promise with the response
   */
  static async request<T>(endpoint: string, options: RequestInit): Promise<T> {
    try {
      const url = `${this.baseUrl}${endpoint}`;
      const response = await fetch(url, {
        ...options,
        headers: {
          ...this.getDefaultHeaders(),
          ...options.headers,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      throw error;
    }
  }
}
