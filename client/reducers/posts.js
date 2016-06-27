// a reducer takes in 2 things

// 1. it takes in the action (what happened)
// 2. it takes in a copy of the current state

function posts(state = [], action) {
  console.log('The post will change');
  console.log(state, action);
  return state;
}

export default posts;
