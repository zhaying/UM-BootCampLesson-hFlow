import {gql} from 'apollo-boost';


const getExecutivesQuery = gql`
  {
    executives{
      name,
      title,
      preferences,
      currentEvent,
      id
    }
  }
`
const getEventsQuery = gql`
  {
    events {
      id
      eventName
      month
      dates
    }
  }
`
/*const getEventsQuery = gql`
  {
    events{
      meeting,
      eventName,
      dates,
      resumeType,
      executiveId,
      preferenceId
    }
  }
`
*/

const addExecutiveMutation = gql`
  mutation AddExecutive($name:String!, $title:String!, $preferences:String!){
    addExecutive(name:$name, title:$title, preferences:$preferences){
      name
      title
      preferences
    }
  }
`

const getExecutiveQuery = gql`
  query($id:ID){
      executive(id:$id){
        name
        title
        preferences
        events {
          dates
        }
    }
  }
`


export{getExecutivesQuery, addExecutiveMutation, getExecutiveQuery,getEventsQuery};
