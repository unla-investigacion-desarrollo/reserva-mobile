export type LoginParams = {
  usernameOrEmail: string;
  password: string;
};

export type LoginResponse = {
  success: boolean;
  result: string;
  data: {
    username: string;
    role: string;
    accessToken: string;
    typeToken: string;
  };
};
