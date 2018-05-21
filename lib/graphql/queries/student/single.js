import {
  GraphQLList,
  GraphQLID,
  GraphQLNonNull,
  GraphQLString,
  GraphQLInt
} from 'graphql';

import type from '../../types/student';
import StudentModel from '../../models/comment';


export default {
  type: type,
  args: {
    studentNo: {
      name: 'studentNo',
      type: GraphQLString
    }
  },
  resolve (root, params, options) {

    return StudentModel.findOne({studentNo:params.studentNo}).exec();
  }
};