const graphql = require ('graphql');
const _ = require ('lodash');
const {
  GraphQLObjectType,
  GraphQLList,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt
} = graphql;

//dummy data
var executives = [
  {name:'Mary Barra', title:'CEO', preferences:'Allergic to gluten', currentEvent:'4', id:'1'},
  {name:'Wrigley Payano', title:'CEO', preferences:'Loves carrots and kills lizards', currentEvent:'4', id:'2'},
  {name:'John Smith', title:'CFO', preferences:'Loves Pinot Noir from Beune', currentEvent:'5', id:'3'},
];

var preferences = [
  {allergy:'none', food:'Cupckes', preferences:'Allergic to gluten', id:'1'},
  {name:'Wrigley Payano', title:'CEO', preferences:'Loves carrots and kills lizards', id:'2'},
  {name:'John Smith', title:'CFO', preferences:'Loves Pinot Noir from Beune', id:'3'},
];

var events = [
  {organizationName:'Cengage', eventName:'Engage', dates:'Sunday December 12, 2018 through Thursday December 16, 2018', resumeType:'',id:'4'},
  {organizationName:'Cisco', eventName:'Cisco Live', dates:'Sunday October 12, 2018 through Thursday October 16, 2018', resumeType:'',id:'5'},
  {organizationName:'MicroSoft', eventName:'Azure Live', dates:'Sunday November 12, 2018 through Thursday November 16, 2018', resumeType:'',id:'6'}
];


const ExecutiveType = new GraphQLObjectType({
    name:'Executive',
    fields:()=>({
      id:{type:GraphQLID},
      name:{type:GraphQLString},
      title:{type:GraphQLString},
      preferences:{type:GraphQLString},
      currentEvent:{type:GraphQLString}
    })
});

const PreferenceType = new GraphQLObjectType({
    name:'Preference',
    fields:()=>({
      id:{type:GraphQLID},
      name:{type:GraphQLString},
      title:{type:GraphQLString},
      preferences:{type:GraphQLString}
    })
});

const EventType = new GraphQLObjectType({
    name:'event',
    fields:()=>({
      id:{type:GraphQLID},
      organizationName:{type:GraphQLString},
      eventName:{type:GraphQLString},
      dates:{type:GraphQLString},
      resumeType:{type:GraphQLString},
      executives: {
        type: new GraphQLList(ExecutiveType),
        resolve(parent, args) {
          //return _.filter(books, {authorid: parent.id})
          return _.filter(executives,{currentEvent:parent.id});
        }

      }
    })
});
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    executive:{
      type: ExecutiveType,
      args:{id:{type:GraphQLID}},
      resolve(parent, args){
        //code to get data from db/other source
        return _.find(executives, {id:args.id});
      }
    },
    preference: {
      type: PreferenceType,
      args:{id:{type:GraphQLID}},
      resolve(parent, args){
        return _.find(preferences, {id:args.id});
      }
    },
    event:{
     type: EventType,
     args:{id:{type:GraphQLID}},
     resolve(parent, args){
       return _.find(events, {id:args.id});
     }
    }
  }
})

module.exports = new GraphQLSchema({
  query:RootQuery
});
