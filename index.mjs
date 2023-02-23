import { createStore } from 'redux';

// 初期状態
const initialState = {
    tasks: []
};

// リデューサー
const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TASK':
            return {
                ...state,
                tasks: state.tasks.concat([action.payload.task])
            };
        default:
            return state;
    }
}

// Action 生成
const addTask = (task) => ({
    type: 'ADD_TASK',
    payload: {
        task
    }
});

// Store 生成
const store = createStore(tasksReducer, initialState);
console.log('1: ' + JSON.stringify(store.getState()));

// サブスクライブ
const handler = () => console.log('S: ' + JSON.stringify(store.getState()));
const unsubscribe = store.subscribe(handler);

// ディスパッチ
store.dispatch(addTask('Storeを学ぶ'));
console.log('2: ' + JSON.stringify(store.getState()));
