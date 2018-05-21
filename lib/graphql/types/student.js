import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} from 'graphql';

export default new GraphQLObjectType({
  name: 'Student',
  fields: {
    _id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    studentNo: {
      type: GraphQLString
    },
    firtName: {
      type: GraphQLString
    },
    lastName: {
      type: GraphQLString
    },
    gender: {
      type: GraphQLString
    }
  }
});