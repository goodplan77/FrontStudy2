// 공용 state 저장소
import {createStore} from 'redux';
import counterReducer from '../features/CounterReducer';

const store = createStore(counterReducer);

export type RootState = ReturnType<typeof store.getState>
export default store;