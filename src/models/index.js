// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const TaskStatus = {
  "DONE": "DONE",
  "PENDING": "PENDING"
};

const { District, User, Task } = initSchema(schema);

export {
  District,
  User,
  Task,
  TaskStatus
};