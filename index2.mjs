import pkg from '@reduxjs/toolkit';
const { createSlice, configureStore } = pkg;

const todosSlice = createSlice( {
    name: 'todos',
    initialState: [],
    reducers: {
        addTask(state, action) {
            state.push({
                text: action.payload.text
            })
        }
    }
});

const { addTask } = todosSlice.actions;

// Store 生成
const store = configureStore({
    reducer: {
        todos: todosSlice.reducer,
    }
})
console.log('1: ' + JSON.stringify(store.getState()));

// サブスクライブ
const handler = () => console.log('S: ' + JSON.stringify(store.getState()));
const unsubscribe = store.subscribe(handler);

// ディスパッチ
store.dispatch(addTask({ text: 'Storeを学ぶ'}));
console.log('2: ' + JSON.stringify(store.getState()));
