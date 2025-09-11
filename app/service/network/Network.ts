/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios';

export class Network {
  private static backendUrl: string =
    process.env.EXPO_PUBLIC_BACKEND_URL || 'http://localhost:3001';

  static async backendGet<ResponseType>(
    endpoint: string,
  ): Promise<ResponseType> {
    const response = await axios.get<ResponseType>(
      `${this.backendUrl}${endpoint}`,
    );
    return response.data;
  }

  static async backendPost<ResponseType>(
    endpoint: string,
    data: any,
  ): Promise<ResponseType> {
    const response = await axios.post<ResponseType>(
      `${this.backendUrl}${endpoint}`,
      data,
    );
    return response.data;
  }

  static async backendPut<ResponseType>(
    endpoint: string,
    data: any,
  ): Promise<ResponseType> {
    const response = await axios.put<ResponseType>(
      `${this.backendUrl}${endpoint}`,
      data,
    );
    return response.data;
  }

  static async backendDelete<ResponseType>(
    endpoint: string,
  ): Promise<ResponseType> {
    const response = await axios.delete<ResponseType>(
      `${this.backendUrl}${endpoint}`,
    );
    return response.data;
  }
}
