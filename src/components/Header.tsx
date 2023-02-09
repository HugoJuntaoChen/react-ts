import { useAppDispatch, useAppSelector } from "@/hooks";
import { decrement, increment, RootState } from "@/redux/counter/counterSlice";
import store from "@/redux/store";


export default function () {
    console.log(store.getState());

    console.log('header render');
    const dispatch = useAppDispatch();
    const addFn = () => {
        dispatch(increment());
    }
    const reFn = () => {
        dispatch(decrement());
    }
    return (
        <header>
            header
            <button onClick={addFn}>
                button add
            </button>
            <button onClick={reFn}>
                button re
            </button>
            <span>{useAppSelector((state) => state.counter.value)}</span>
        </header>
    )
}