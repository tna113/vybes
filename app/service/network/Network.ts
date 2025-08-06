import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

export class Network {
  private static baseUrl: string = 'https://zwbbzxleomraswznvsnd.supabase.co';
  private static LEGACY_API_KEY: string =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inp3YmJ6eGxlb21yYXN3em52c25kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUzNDg2OTQsImV4cCI6MjA2MDkyNDY5NH0.CJiKl6OERmD-HoDU6w0gFVjbR_TGyTU7Dl-EF_e64tA';

  private static axiosInstance: AxiosInstance = axios.create({
    baseURL: this.baseUrl,
    headers: {
      'Content-Type': 'application/json',
      apikey: this.LEGACY_API_KEY,
      Authorization: `Bearer ${this.LEGACY_API_KEY}`,
    },
  });

  static async get<T>(
    endpoint: string,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.get<T>(endpoint, config);
    return response.data;
  }

  static async post<T>(
    endpoint: string,
    data: Record<string, unknown>,
    config?: AxiosRequestConfig,
  ): Promise<T> {
    const response = await this.axiosInstance.post<T>(endpoint, data, config);
    return response.data;
  }
}
