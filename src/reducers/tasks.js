const tasks = (state = [], action) => {
  switch (action.type) {
    case "TASK_ADD":
      return [
        ...state,
        {
          id: Math.random().toString(36),
          title: action.title,
          active: state.length === 0,
          comments: []
        }
      ];
    case "TASK_REMOVE":
      let removingIndex;
      const removingItem = state.find((item, index) => {
        if (item.id === action.id) {
          removingIndex = index;
        }
        return item.id === action.id;
      });
      const newArr = [
        ...state.slice(0, removingIndex),
        ...state.slice(removingIndex + 1)
      ];

      return removingItem.active
        ? newArr.map((task, index) => {
            return index === 0 ? { ...task, active: true } : task;
          })
        : newArr;
    case "COMMENT_ADD":
      return state.map(task => {
        return task.active
          ? {
              ...task,
              comments: [...task.comments, action.text]
            }
          : task;
      });
    case "TASK_ACTIVE_CHANGE":
      return state.map(task => {
        return task.id === action.id
          ? { ...task, active: true }
          : { ...task, active: false };
      });
    default:
      return state;
  }
};

export default tasks;
