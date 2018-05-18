import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

import testType from '../../types/test';


export default {
  type: testType,
  args: {
    id: {
      name: 'id',
      type: GraphQLID
    }
  },
  resolve (root, params, options) {

    return {
      _id: params.id,
      postId: params.id,
      text: "this is test"
    }
  }
};