import { createStore } from "redux";
import { devToolsEnhancer } from "@redux-devtools/extension";

const initialState = {
    tasks: [
        { id: 0, text: "Learn HTML and CSS", completed: true },
        { id: 1, text: "Get good at JavaScript", completed: true },
        { id: 2, text: "Master React", completed: false },
        { id: 3, text: "Discover Redux", completed: false },
        { id: 4, text: "Build amazing apps", completed: false },
    ],
    filters: {
        status: "all",
    },
};

const rootReducer = (state = initialState, action) => {
    return state;
};

// змінна для інструментів розробника
const enhencer = devToolsEnhancer();

// створення стору (перший аргумент функція редюсер з логікою зміни стану redux)
// другий аргумент че початковий стан і він не обовязковий
// третій аргумент це функція розширення можливостей стору не обовязкова, може бути другим аргументом якщоо не вкащаний початковий стан тут це розширення для браузера
export const store = createStore(rootReducer, enhencer);
