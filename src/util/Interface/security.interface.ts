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

export type Permission = {
  permissionId: number;
};

export type IndividualRoleDataTypes = {
  data: {
    id: number;
    role: string;
    hasFullDataControl: boolean;
    permissions: Permission[];
  };
};

export type PermissionDataTypes = {
  data: { permissionId: number; operation: string; resource: string }[];
};

export type GroupPermissionDataTypes = {
  data: {
    resource: string;
    permissions: { permissionId: number; operation: string }[];
  }[];
};
