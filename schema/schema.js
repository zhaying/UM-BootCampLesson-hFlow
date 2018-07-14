const graphql = require ('graphql');
const _ = require ('lodash');
const Executive = require('../models/executive');
const Event = require('../models/event');
const Preference = require('../models/preference');
const Resume = require('../models/resume');

const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull
} = graphql;

const ResumeType = new GraphQLObjectType({
  name: 'Resume',
  fields:() =>({
    id:{type: GraphQLID},
    info:{type:GraphQLString},
    organization:{type:GraphQLString},
    event: {type:GraphQLString},
    dates: {type:GraphQLString},
    resumeType: {type:GraphQLString},
    conventionServicesRepresentative: {type:GraphQLString},
    cateringRepresentative: {type:GraphQLString},
    salesRepresentative: {type:GraphQLString},
    meetingOverview: {type:GraphQLString},
    summary: {type:GraphQLString},
    attendance: {type:GraphQLString},
    numberOfGuests:{type:GraphQLString},
    percentageOfSpousalAttendance: {type:GraphQLString},
    repeatEvent: {type:GraphQLString},
    keyMeetingContacts: {type:GraphQLString},
    name: {type:GraphQLString},
    title: {type:GraphQLString},
    mobile: {type:GraphQLString},
    email: {type:GraphQLString},
    offSiteActivities: {type:GraphQLString},
    dayandDate: {type:GraphQLString},
    time: {type:GraphQLString},
    eventNumberofPeople: {type:GraphQLString},
    location: {type:GraphQLString},
    transportationDeparturePoint: {type:GraphQLString},
    shuttleSchedules: {type:GraphQLString},
    dayandDate: {type:GraphQLString},
    time: {type:GraphQLString},
    numberofVehicles: {type:GraphQLString},
    frequency: {type:GraphQLString},
    destination: {type:GraphQLString},
    executives: {type:GraphQLString},
    name: {type:GraphQLString},
    title: {type:GraphQLString},
    dates: {type:GraphQLString},
    amenities: {type:GraphQLString},
    preferences: {type:GraphQLString},
    authorizedSignatures: {type:GraphQLString},
    authorizedSignerName: {type:GraphQLString},
    masterAccount: {type:GraphQLString},
    whichCharges: {type:GraphQLString}
  })
});


const ExecutiveType = new GraphQLObjectType({
    name:'Executive',
    fields:()=>({
      id:{type:GraphQLID},
      name:{type:GraphQLString},
      title:{type:GraphQLString},
      preferences:{type:GraphQLString},
      currentEvent:{type:GraphQLString},
      preference:{
        type:PreferenceType,
        resolve(parent, args){
          //console.log(parent)
          //return _.find(preferences, {id:parent.preferenceId})
          return Preference.findById(parent.preferenceId);
        }
      },
      events: {
        type: new GraphQLList(EventType),
        resolve(parent, args){
          //return _.filter(events,{executiveId:parent.id});
          return Event.find({executiveId:parent.id});
        }
      }
    })
});

const PreferenceType = new GraphQLObjectType({
    name:'Preference',
    fields:()=>({
      id:{type:GraphQLID},
      allergy:{type:GraphQLString},
      amenity:{type:GraphQLString},
      favorites:{type:GraphQLString},
      executiveId: {type:GraphQLID},
      eventId: {type:GraphQLID}
    })
});

const EventType = new GraphQLObjectType({
    name:'Event',
    fields:()=>({
      id:{type:GraphQLID},
      meeting:{type:GraphQLString},
      eventName:{type:GraphQLString},
      dates:{type:GraphQLString},
      resumeType:{type:GraphQLString},
      executiveId: {type:GraphQLID},
      preferenceId: {type:GraphQLID},
      executive:{
          type:ExecutiveType,
          resolve(parent, args){
            console.log(parent);
            //return _.find(authors, {id: parent.authorid});
            return Executive.findById(parent.executiveId);

          }
          },
    })
      // executives: {
      //   type: new GraphQLList(ExecutiveType),
      //   resolve(parent, args){
      //     //return _.filter(events,{executiveId:parent.id});
      //     return Executive.find(executiveId);
      //   }
      // }
    /*  Executive:{
        type:ExecutiveType,
        resolve(parent, args){
          //code to get data from db/other source
          console.log('eventparent=',parent.id);
          return _.filter(executives, { 'currentEvent': parent.id});
        }

      }*/
});
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields:{
    executive:{
      type: ExecutiveType,
      args:{id:{type:GraphQLID}},
      resolve(parent, args){
        //code to get data from db/other source
        //return _.find(executives, {id:args.id});
        return Executive.findById(args.id);
      }
    },
    preference: {
      type: PreferenceType,
      args:{id:{type:GraphQLID}},
      resolve(parent, args){
        //return _.find(preferences, {id:args.id});
        return Preference.findById(args.id);
      }
    },
    event:{
     type: EventType,
     args:{id:{type:GraphQLID}},
     resolve(parent, args){
       //return _.find(events, {id:args.id});
       return Event.findById(args.id);
     }
   },
   resume:{
     type: ResumeType,
     args:{id:{type:GraphQLID}},
     resolve(parent, args){
       return Resume.findById(args.id);
     }
   }
   executives:{
     type:new GraphQLList(ExecutiveType),
     resolve(parent, args){
       //return executives
       return Executive.find({});
     }
   },
   preferences: {
     type: new GraphQLList(PreferenceType),
     resolve(parent, args){
       //return preferences
       return Preference.find({});
     }
   },
   events: {
     type: new GraphQLList(EventType),
     resolve(parent, args){
      // return events
      return Event.find({});
     }
   },
   resumes:{
     type: ResumeType,
     resolve(parent, args){
       return Resume.find({});
     }
   }
  }
})

const Mutation = new GraphQLObjectType({
  name:'Mutation',
  fields:{
    addExecutive: {
      type: ExecutiveType,
      args:{
        name:{type: new GraphQLNonNull(GraphQLString)},
        title: {type: new GraphQLNonNull(GraphQLString)},
        preferences: {type: new GraphQLNonNull(GraphQLString)},
        currentEvent: {type:GraphQLString},
        preferenceId:{type:GraphQLID},
        eventId:{type:GraphQLID}
      },
      resolve(parent, args){
        let executive = new Executive({
          name: args.name,
          title: args.title,
          preferences: args.preferences,
          currentEvent: args.currentEvent,
          preferenceId: args.preferenceId,
          eventId: args.eventId
        });
        return executive.save();
      }
    },
    addEvent: {
      type:EventType,
      args:{
        meeting: {type:new GraphQLNonNull(GraphQLString)},
        eventName: {type:new GraphQLNonNull(GraphQLString)},
        dates: {type:GraphQLString},
        resumeType: {type:GraphQLString},
        executiveId: {type:GraphQLID},
        preferenceId: {type:GraphQLID}
      },
      resolve(parent, args){
        let event = new Event({
          meeting: args.meeting,
          eventName: args.eventName,
          dates: args.dates,
          resumeType: args.resumeType,
          executiveId: args.executiveId,
          preferenceId: args.preferenceId
        });
        return event.save();
      }
    },
    addPreference: {
      type: PreferenceType,
      args:{
        allergy:{type:new GraphQLNonNull(GraphQLString)},
        amenity: {type:GraphQLString},
        favorites: {type:GraphQLString},
        executiveId: {type:GraphQLID},
        eventId:{type:GraphQLID}
      },
      resolve(parent, args){
        let preference = new Preference({
          allergy: args.allergy,
          amenity: args.amenity,
          favorites: args.favorites,
          executiveId: args.executiveId,
          eventId: args.eventId
        });
        return preference.save();
      }
    }
  }
})


module.exports = new GraphQLSchema({
  query:RootQuery,
  mutation: Mutation
});

/*
//dummy data
var executives = [
  {name:'Mary Barra', title:'CEO', preferences:'Allergic to gluten', currentEvent:'4', id:'1', preferenceId:'1', eventId:'1'},
  {name:'Wrigley Payano', title:'CEO', preferences:'Loves carrots and kills lizards', currentEvent:'4', id:'2', preferenceId:'2', eventId:'2'},
  {name:'Elon Musk', title:'CFO', preferences:'Loves Pinot Noir from Beune', currentEvent:'5', id:'3', preferenceId:'3', eventId:'3'},
];

var preferences = [
  {allergy:"Nuts", amenity:"Sliced fruit and Lime La Croix", favorites: "Apples", executiveId:1", eventId:"1", id:'1'},
  {allergy:"None", amenity:'Carrots and Hard Boiled Eggs', favorites:'Killing lizards', id:'2', executiveId:'2', eventId:'2'},
  {allergy:"Gluten", amenity:'Kombucha Ginger and Nuts', favorites:'Swimming', id:'3', executiveId:'3', eventId:'3'},
];

var events = [
  {meeting:'Cengage', eventName:'Engage', dates:'Sunday December 12, 2018 through Thursday December 16, 2018', resumeType:'',id:'1', executiveId: '1'},
  {meeting:'Cisco', eventName:'Cisco Live', dates:'Sunday October 12, 2018 through Thursday October 16, 2018', resumeType:'',id:'2', executiveId:'3'},
  {meeting:'MicroSoft', eventName:'Azure Live', dates:'Sunday November 12, 2018 through Thursday November 16, 2018', resumeType:'',id:'3', executiveId:'1'},
  {meeting:'Apple', eventName:'Developer Conference', dates:'Sunday March 5, 2018 through Thursday March 10, 2018', resumeType:'',id:'3', executiveId:'2'},
  {meeting:'General Motors', eventName:'Cadillac Launch', dates:'Sunday January 9, 2019 through Thursday January 16, 2019', resumeType:'',id:'3', executiveId:'1'},
  {meeting:'Tesla', eventName:'Model X Launch', dates:'Sunday June 9, 2019 through Thursday June 16, 2019', resumeType:'',id:'3', executiveId:'3'}
];
*/
