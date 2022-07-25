interface State {
  books: boolean;
  universities: boolean;
  progress: boolean;
  events: boolean;
}

interface Action {
  type: number;
  payload: string;
}

enum ActionType {
  BOOKS = 0,
  UNIVERSITIES = 1,
  PROGRESS = 2,
  EVENTS = 3,
}

const menu = {
  books: true,
  universities: false,
  progress: false,
  events: false,
};

const menuData = {};

const menuReducer = (state: State = menu, action: Action) => {
  switch (action.type) {
    case ActionType.BOOKS:
      return { ...state, books: true };
    case ActionType.UNIVERSITIES:
      return { ...state, books: true };
    case ActionType.PROGRESS:
      return { ...state, books: true };
    case ActionType.EVENTS:
      return { ...state, books: true };
    default:
      return state;
  }
};

export { menuReducer };
