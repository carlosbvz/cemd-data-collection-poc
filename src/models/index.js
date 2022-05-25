// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { District, Blog, Post, Comment } = initSchema(schema);

export {
  District,
  Blog,
  Post,
  Comment
};