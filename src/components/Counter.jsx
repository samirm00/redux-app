import { useSelector, useDispatch } from 'react-redux';

import counterSlice from '../features/counter/counterSlice.js';

import './Counter.css';

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    return (
        <div className="counter">
            <p className="count-display">{count}</p>
            <div className="button-container">
                <button
                    className="decrement-button"
                    onClick={() => dispatch(counterSlice.actions.decrement())}
                >
                    -
                </button>
                <button
                    className="reset-button"
                    onClick={() => dispatch(counterSlice.actions.reset())}
                >
                    Reset
                </button>
                <button
                    className="increment-button"
                    onClick={() => dispatch(counterSlice.actions.increment())}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default Counter;
