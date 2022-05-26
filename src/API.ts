/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateDistrictInput = {
  lea_id: number,
  name?: string | null,
  address?: string | null,
  city?: string | null,
  logos?: string | null,
  website?: string | null,
  _version?: number | null,
};

export type ModelDistrictConditionInput = {
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  logos?: ModelStringInput | null,
  website?: ModelStringInput | null,
  and?: Array< ModelDistrictConditionInput | null > | null,
  or?: Array< ModelDistrictConditionInput | null > | null,
  not?: ModelDistrictConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type District = {
  __typename: "District",
  lea_id: number,
  name?: string | null,
  address?: string | null,
  city?: string | null,
  logos?: string | null,
  website?: string | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type UpdateDistrictInput = {
  lea_id: number,
  name?: string | null,
  address?: string | null,
  city?: string | null,
  logos?: string | null,
  website?: string | null,
  _version?: number | null,
};

export type DeleteDistrictInput = {
  lea_id: number,
  _version?: number | null,
};

export type CreateUserInput = {
  id?: string | null,
  name?: string | null,
  email?: string | null,
  _version?: number | null,
};

export type ModelUserConditionInput = {
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserConditionInput | null > | null,
  or?: Array< ModelUserConditionInput | null > | null,
  not?: ModelUserConditionInput | null,
};

export type User = {
  __typename: "User",
  id: string,
  name?: string | null,
  email?: string | null,
  tasks?: ModelTaskConnection | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
};

export type ModelTaskConnection = {
  __typename: "ModelTaskConnection",
  items:  Array<Task | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type Task = {
  __typename: "Task",
  id: string,
  title?: string | null,
  description?: string | null,
  due_date?: string | null,
  status?: TaskStatus | null,
  district_id?: number | null,
  user?: User | null,
  createdAt: string,
  updatedAt: string,
  _version: number,
  _deleted?: boolean | null,
  _lastChangedAt: number,
  userTasksId?: string | null,
};

export enum TaskStatus {
  DONE = "DONE",
  PENDING = "PENDING",
}


export type UpdateUserInput = {
  id: string,
  name?: string | null,
  email?: string | null,
  _version?: number | null,
};

export type DeleteUserInput = {
  id: string,
  _version?: number | null,
};

export type CreateTaskInput = {
  id?: string | null,
  title?: string | null,
  description?: string | null,
  due_date?: string | null,
  status?: TaskStatus | null,
  district_id?: number | null,
  _version?: number | null,
  userTasksId?: string | null,
};

export type ModelTaskConditionInput = {
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  due_date?: ModelStringInput | null,
  status?: ModelTaskStatusInput | null,
  district_id?: ModelIntInput | null,
  and?: Array< ModelTaskConditionInput | null > | null,
  or?: Array< ModelTaskConditionInput | null > | null,
  not?: ModelTaskConditionInput | null,
  userTasksId?: ModelIDInput | null,
};

export type ModelTaskStatusInput = {
  eq?: TaskStatus | null,
  ne?: TaskStatus | null,
};

export type ModelIntInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateTaskInput = {
  id: string,
  title?: string | null,
  description?: string | null,
  due_date?: string | null,
  status?: TaskStatus | null,
  district_id?: number | null,
  _version?: number | null,
  userTasksId?: string | null,
};

export type DeleteTaskInput = {
  id: string,
  _version?: number | null,
};

export type ModelDistrictFilterInput = {
  lea_id?: ModelIntInput | null,
  name?: ModelStringInput | null,
  address?: ModelStringInput | null,
  city?: ModelStringInput | null,
  logos?: ModelStringInput | null,
  website?: ModelStringInput | null,
  and?: Array< ModelDistrictFilterInput | null > | null,
  or?: Array< ModelDistrictFilterInput | null > | null,
  not?: ModelDistrictFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelDistrictConnection = {
  __typename: "ModelDistrictConnection",
  items:  Array<District | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelUserFilterInput = {
  id?: ModelIDInput | null,
  name?: ModelStringInput | null,
  email?: ModelStringInput | null,
  and?: Array< ModelUserFilterInput | null > | null,
  or?: Array< ModelUserFilterInput | null > | null,
  not?: ModelUserFilterInput | null,
};

export type ModelUserConnection = {
  __typename: "ModelUserConnection",
  items:  Array<User | null >,
  nextToken?: string | null,
  startedAt?: number | null,
};

export type ModelTaskFilterInput = {
  id?: ModelIDInput | null,
  title?: ModelStringInput | null,
  description?: ModelStringInput | null,
  due_date?: ModelStringInput | null,
  status?: ModelTaskStatusInput | null,
  district_id?: ModelIntInput | null,
  and?: Array< ModelTaskFilterInput | null > | null,
  or?: Array< ModelTaskFilterInput | null > | null,
  not?: ModelTaskFilterInput | null,
  userTasksId?: ModelIDInput | null,
};

export type CreateDistrictMutationVariables = {
  input: CreateDistrictInput,
  condition?: ModelDistrictConditionInput | null,
};

export type CreateDistrictMutation = {
  createDistrict?:  {
    __typename: "District",
    lea_id: number,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    logos?: string | null,
    website?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateDistrictMutationVariables = {
  input: UpdateDistrictInput,
  condition?: ModelDistrictConditionInput | null,
};

export type UpdateDistrictMutation = {
  updateDistrict?:  {
    __typename: "District",
    lea_id: number,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    logos?: string | null,
    website?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteDistrictMutationVariables = {
  input: DeleteDistrictInput,
  condition?: ModelDistrictConditionInput | null,
};

export type DeleteDistrictMutation = {
  deleteDistrict?:  {
    __typename: "District",
    lea_id: number,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    logos?: string | null,
    website?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateUserMutationVariables = {
  input: CreateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type CreateUserMutation = {
  createUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        title?: string | null,
        description?: string | null,
        due_date?: string | null,
        status?: TaskStatus | null,
        district_id?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userTasksId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type UpdateUserMutationVariables = {
  input: UpdateUserInput,
  condition?: ModelUserConditionInput | null,
};

export type UpdateUserMutation = {
  updateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        title?: string | null,
        description?: string | null,
        due_date?: string | null,
        status?: TaskStatus | null,
        district_id?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userTasksId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type DeleteUserMutationVariables = {
  input: DeleteUserInput,
  condition?: ModelUserConditionInput | null,
};

export type DeleteUserMutation = {
  deleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        title?: string | null,
        description?: string | null,
        due_date?: string | null,
        status?: TaskStatus | null,
        district_id?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userTasksId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type CreateTaskMutationVariables = {
  input: CreateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type CreateTaskMutation = {
  createTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    description?: string | null,
    due_date?: string | null,
    status?: TaskStatus | null,
    district_id?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userTasksId?: string | null,
  } | null,
};

export type UpdateTaskMutationVariables = {
  input: UpdateTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type UpdateTaskMutation = {
  updateTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    description?: string | null,
    due_date?: string | null,
    status?: TaskStatus | null,
    district_id?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userTasksId?: string | null,
  } | null,
};

export type DeleteTaskMutationVariables = {
  input: DeleteTaskInput,
  condition?: ModelTaskConditionInput | null,
};

export type DeleteTaskMutation = {
  deleteTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    description?: string | null,
    due_date?: string | null,
    status?: TaskStatus | null,
    district_id?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userTasksId?: string | null,
  } | null,
};

export type GetDistrictQueryVariables = {
  lea_id: number,
};

export type GetDistrictQuery = {
  getDistrict?:  {
    __typename: "District",
    lea_id: number,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    logos?: string | null,
    website?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListDistrictsQueryVariables = {
  lea_id?: number | null,
  filter?: ModelDistrictFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  sortDirection?: ModelSortDirection | null,
};

export type ListDistrictsQuery = {
  listDistricts?:  {
    __typename: "ModelDistrictConnection",
    items:  Array< {
      __typename: "District",
      lea_id: number,
      name?: string | null,
      address?: string | null,
      city?: string | null,
      logos?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncDistrictsQueryVariables = {
  filter?: ModelDistrictFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncDistrictsQuery = {
  syncDistricts?:  {
    __typename: "ModelDistrictConnection",
    items:  Array< {
      __typename: "District",
      lea_id: number,
      name?: string | null,
      address?: string | null,
      city?: string | null,
      logos?: string | null,
      website?: string | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetUserQueryVariables = {
  id: string,
};

export type GetUserQuery = {
  getUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        title?: string | null,
        description?: string | null,
        due_date?: string | null,
        status?: TaskStatus | null,
        district_id?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userTasksId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type ListUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListUsersQuery = {
  listUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncUsersQueryVariables = {
  filter?: ModelUserFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncUsersQuery = {
  syncUsers?:  {
    __typename: "ModelUserConnection",
    items:  Array< {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type GetTaskQueryVariables = {
  id: string,
};

export type GetTaskQuery = {
  getTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    description?: string | null,
    due_date?: string | null,
    status?: TaskStatus | null,
    district_id?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userTasksId?: string | null,
  } | null,
};

export type ListTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListTasksQuery = {
  listTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      title?: string | null,
      description?: string | null,
      due_date?: string | null,
      status?: TaskStatus | null,
      district_id?: number | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userTasksId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type SyncTasksQueryVariables = {
  filter?: ModelTaskFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
  lastSync?: number | null,
};

export type SyncTasksQuery = {
  syncTasks?:  {
    __typename: "ModelTaskConnection",
    items:  Array< {
      __typename: "Task",
      id: string,
      title?: string | null,
      description?: string | null,
      due_date?: string | null,
      status?: TaskStatus | null,
      district_id?: number | null,
      user?:  {
        __typename: "User",
        id: string,
        name?: string | null,
        email?: string | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
      userTasksId?: string | null,
    } | null >,
    nextToken?: string | null,
    startedAt?: number | null,
  } | null,
};

export type OnCreateDistrictSubscription = {
  onCreateDistrict?:  {
    __typename: "District",
    lea_id: number,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    logos?: string | null,
    website?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateDistrictSubscription = {
  onUpdateDistrict?:  {
    __typename: "District",
    lea_id: number,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    logos?: string | null,
    website?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteDistrictSubscription = {
  onDeleteDistrict?:  {
    __typename: "District",
    lea_id: number,
    name?: string | null,
    address?: string | null,
    city?: string | null,
    logos?: string | null,
    website?: string | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateUserSubscription = {
  onCreateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        title?: string | null,
        description?: string | null,
        due_date?: string | null,
        status?: TaskStatus | null,
        district_id?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userTasksId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnUpdateUserSubscription = {
  onUpdateUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        title?: string | null,
        description?: string | null,
        due_date?: string | null,
        status?: TaskStatus | null,
        district_id?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userTasksId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnDeleteUserSubscription = {
  onDeleteUser?:  {
    __typename: "User",
    id: string,
    name?: string | null,
    email?: string | null,
    tasks?:  {
      __typename: "ModelTaskConnection",
      items:  Array< {
        __typename: "Task",
        id: string,
        title?: string | null,
        description?: string | null,
        due_date?: string | null,
        status?: TaskStatus | null,
        district_id?: number | null,
        createdAt: string,
        updatedAt: string,
        _version: number,
        _deleted?: boolean | null,
        _lastChangedAt: number,
        userTasksId?: string | null,
      } | null >,
      nextToken?: string | null,
      startedAt?: number | null,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
  } | null,
};

export type OnCreateTaskSubscription = {
  onCreateTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    description?: string | null,
    due_date?: string | null,
    status?: TaskStatus | null,
    district_id?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userTasksId?: string | null,
  } | null,
};

export type OnUpdateTaskSubscription = {
  onUpdateTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    description?: string | null,
    due_date?: string | null,
    status?: TaskStatus | null,
    district_id?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userTasksId?: string | null,
  } | null,
};

export type OnDeleteTaskSubscription = {
  onDeleteTask?:  {
    __typename: "Task",
    id: string,
    title?: string | null,
    description?: string | null,
    due_date?: string | null,
    status?: TaskStatus | null,
    district_id?: number | null,
    user?:  {
      __typename: "User",
      id: string,
      name?: string | null,
      email?: string | null,
      tasks?:  {
        __typename: "ModelTaskConnection",
        nextToken?: string | null,
        startedAt?: number | null,
      } | null,
      createdAt: string,
      updatedAt: string,
      _version: number,
      _deleted?: boolean | null,
      _lastChangedAt: number,
    } | null,
    createdAt: string,
    updatedAt: string,
    _version: number,
    _deleted?: boolean | null,
    _lastChangedAt: number,
    userTasksId?: string | null,
  } | null,
};
