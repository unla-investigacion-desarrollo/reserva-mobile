import { ApiResponse } from '../types';

export type LoginParams = {
  usernameOrEmail: string;
  password: string;
};

export type UserData = {
  id: number;
  username: string;
  role: string;
  accessToken: string;
  typeToken: string;
};

export type LoginResponse = ApiResponse<{
  success: boolean;
  result: string;
  data: UserData;
}>;
