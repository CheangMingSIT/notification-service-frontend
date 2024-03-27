export type OverviewDataTypes = {
  data: {
    record: number;
    InQueue: number;
    Fail: number;
    month: string[];
    countMonthData: number[];
    undeliveredMonth: string[];
    undeliveredCount: number[];
  };
};

export type UserDataType = {
  data: {
    userId: string;
    name: string;
    email: string;
    isDisabled: boolean;
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
    organisationId: string;
    organisationName: string;
  };
};

export type RoleDropDownDataTypes = {
  data: {
    id: number;
    role: string;
  }[];
};

export type RoleDataType = {
  data: {
    id: number;
    role: string;
    isDisabled: boolean;
    hasFullDataControl: boolean;
    organisation: {
      id: string;
      name: string;
    };
  }[];
};

export type RoleListDataTypes = {
  data: {
    id: number;
    role: string;
    isDisabled: boolean;
    hasFullDataControl: boolean;
  }[];
};

export type IndividualRoleDataTypes = {
  data: {
    id: number;
    role: string;
    hasFullDataControl: boolean;
    permissions: [];
  };
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
    isDisabled: boolean;
    organisationId: string;
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

export type OrganisationUserListDataTypes = {
  data: {
    id: string;
    name: string;
    condition: object;
    isDisabled: boolean;
    users: {
      userId: string;
      name: string;
      role: string;
      email: string;
      isDisabled: boolean;
    }[];
  }[];
};
export type OrganisationListDataTypes = {
  data: {
    id: string;
    name: string;
    condition: object;
    isDisabled: boolean;
  }[];
};

export type OrganisationDataType = {
  id: string;
  organisation: string;
  condition: object;
};

export type ErrorDataTypes = { statusCode: number; message: string };
