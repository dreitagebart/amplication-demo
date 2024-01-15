import { InputJsonValue } from "../../types";

export type UserCreateInput = {
  about?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  username: string;
};
