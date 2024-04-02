export type UserDataType = {
  data: {
    userId: string;
    name: string;
    email: string;
    isDisabled: boolean;
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
