import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";

export enum TaskStatus {
  DONE = "DONE",
  PENDING = "PENDING"
}



type DistrictMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type TaskMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class District {
  readonly id: string;
  readonly lea_id: number;
  readonly name?: string | null;
  readonly address?: string | null;
  readonly city?: string | null;
  readonly logos?: string | null;
  readonly website?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<District, DistrictMetaData>);
  static copyOf(source: District, mutator: (draft: MutableModel<District, DistrictMetaData>) => MutableModel<District, DistrictMetaData> | void): District;
}

export declare class User {
  readonly id: string;
  readonly name?: string | null;
  readonly email?: string | null;
  readonly tasks?: (Task | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Task {
  readonly id: string;
  readonly title?: string | null;
  readonly description?: string | null;
  readonly due_date?: string | null;
  readonly status?: TaskStatus | keyof typeof TaskStatus | null;
  readonly district_id?: number | null;
  readonly user?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Task, TaskMetaData>);
  static copyOf(source: Task, mutator: (draft: MutableModel<Task, TaskMetaData>) => MutableModel<Task, TaskMetaData> | void): Task;
}