/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createDistrict = /* GraphQL */ `
  mutation CreateDistrict(
    $input: CreateDistrictInput!
    $condition: ModelDistrictConditionInput
  ) {
    createDistrict(input: $input, condition: $condition) {
      lea_id
      name
      address
      city
      logos
      website
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateDistrict = /* GraphQL */ `
  mutation UpdateDistrict(
    $input: UpdateDistrictInput!
    $condition: ModelDistrictConditionInput
  ) {
    updateDistrict(input: $input, condition: $condition) {
      lea_id
      name
      address
      city
      logos
      website
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteDistrict = /* GraphQL */ `
  mutation DeleteDistrict(
    $input: DeleteDistrictInput!
    $condition: ModelDistrictConditionInput
  ) {
    deleteDistrict(input: $input, condition: $condition) {
      lea_id
      name
      address
      city
      logos
      website
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      name
      email
      tasks {
        items {
          id
          title
          description
          due_date
          status
          district_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTasksId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      name
      email
      tasks {
        items {
          id
          title
          description
          due_date
          status
          district_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTasksId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      name
      email
      tasks {
        items {
          id
          title
          description
          due_date
          status
          district_id
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          userTasksId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createTask = /* GraphQL */ `
  mutation CreateTask(
    $input: CreateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    createTask(input: $input, condition: $condition) {
      id
      title
      description
      due_date
      status
      district_id
      user {
        id
        name
        email
        tasks {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userTasksId
    }
  }
`;
export const updateTask = /* GraphQL */ `
  mutation UpdateTask(
    $input: UpdateTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    updateTask(input: $input, condition: $condition) {
      id
      title
      description
      due_date
      status
      district_id
      user {
        id
        name
        email
        tasks {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userTasksId
    }
  }
`;
export const deleteTask = /* GraphQL */ `
  mutation DeleteTask(
    $input: DeleteTaskInput!
    $condition: ModelTaskConditionInput
  ) {
    deleteTask(input: $input, condition: $condition) {
      id
      title
      description
      due_date
      status
      district_id
      user {
        id
        name
        email
        tasks {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      userTasksId
    }
  }
`;
