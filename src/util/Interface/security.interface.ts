export type UserDataType = {
  payload: {
    userId: string;
    name: string;
    email: string;
    disabled: boolean;
    roleId: number;
    role: string;
  }[];
};

export type GetUserDataTypes = {
  data: {
    name: string;
    email: string;
    roleId: number;
    role: string;
  };
};

export type RoleDataType = {
  data: {
    role: string;
  }[];
};

export type PermissionDataTypes = {
  data: { action: string; subject: string }[];
};

export type ApiKeyDataTypes = {
  data: {
    id: string;
    name: string;
    secretKey: string;
  }[];
};
