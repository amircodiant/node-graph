import {
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import testType from '../../types/test';


export default {
  type: new GraphQLList(testType),
  args: {
  },
  resolve (root, params, options) {
    // const projection = getProjection(options.fieldASTs[0]);

    return [
      {
        _id: "101",
        postId: "101",
        text: "this is test 101"
      },
      {
        _id: "102",
        postId: "102",
        text: "this is test 102"
      }
    ];
  }
};