/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateDistrict = /* GraphQL */ `
  subscription OnCreateDistrict {
    onCreateDistrict {
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
export const onUpdateDistrict = /* GraphQL */ `
  subscription OnUpdateDistrict {
    onUpdateDistrict {
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
export const onDeleteDistrict = /* GraphQL */ `
  subscription OnDeleteDistrict {
    onDeleteDistrict {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreateTask = /* GraphQL */ `
  subscription OnCreateTask {
    onCreateTask {
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
export const onUpdateTask = /* GraphQL */ `
  subscription OnUpdateTask {
    onUpdateTask {
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
export const onDeleteTask = /* GraphQL */ `
  subscription OnDeleteTask {
    onDeleteTask {
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
