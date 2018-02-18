function makeActionCreator(type, ...argNames) {
  return function(...args) {
    let action = { type };
    argNames.forEach((arg, index) => {
      action[argNames[index]] = args[index];
    });
    return action;
  };
}

const TASK_ADD = "TASK_ADD";
const TASK_REMOVE = "TASK_REMOVE";
const TASK_ACTIVE_CHANGE = "TASK_ACTIVE_CHANGE";
const COMMENT_ADD = "COMMENT_ADD";

export const addTask = makeActionCreator(TASK_ADD, "title");
export const removeTask = makeActionCreator(TASK_REMOVE, "id");
export const addComment = makeActionCreator(COMMENT_ADD, "text");
export const changeActiveTask = makeActionCreator(TASK_ACTIVE_CHANGE, "id");
