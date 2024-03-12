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
    id: number;
    role: string;
  }[];
};

export type PermissionDataTypes = {
  permissions: any;
  data: { permissionId: number; operation: string; resource: string }[];
};

export type ApiKeyDataTypes = {
  data: {
    id: string;
    name: string;
    secretKey: string;
  }[];
};

export type OrganisationUserTypes = {
  data: {
    [organisationId: string]: {
      userId: string;
      name: string;
      role: string;
      organisationId: string;
      organisationName: string;
    }[];
  };
};

export type OrganisationListDataTypes = {
  data: {
    id: string;
    name: string;
  }[];
};

export type ErrorDataTypes = { statusCode: number; message: string };
