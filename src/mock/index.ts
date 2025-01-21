import getTasksList from './data/getTasksList.json'
import getRecentTasks from './data/getRecentTasks.json'

export const mockMapping = {
  '/api/tasks/recent': getRecentTasks,
  '/api/tasks/list': getTasksList,
} as const;


const mockResponses = Object.entries(mockMapping).map(([url, data]) => ({
  url,
  method: 'get',
  response: () => {
    return {
      code: 0,
      data
    }
  }
}))

// const mockResponses = [
//   {
//     url: '/api/tasks/list',
//     method: 'get',
//     response: () => {
//       return {
//         code: 0,
//         data: getTasksList
//       }
//     }
//   }
// ]

export default mockResponses