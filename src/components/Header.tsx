import { useAppDispatch, useAppSelector } from "@/hooks";
import { decrement, increment } from "@/redux/counter/counterSlice";
import { setIsOn } from "@/redux/header/headerSlice";
import { RootState } from "@/redux/store";
import { ConnectedProps, connect } from "react-redux";

const headerState = (state: RootState) => {
    isOn: state.header.isOn
};

const headerDispatch = {
    toggleOn: () => { type: 'TOGGLE_IS_ON' }
}

const connector = connect(headerState, headerDispatch);
console.log(connector);

type PropsFormRedux = ConnectedProps<typeof connector>;

const Header = () => {
    // const { toggleOn } = props;
    console.log('header render');
    const dispatch = useAppDispatch();
    const addFn = () => {
        dispatch(increment());
    }
    const reFn = () => {
        dispatch(decrement());
    }

    const isOn = useAppSelector(state => state.header.isOn);
    console.log(isOn);

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
            <div>
                <button onClick={() => dispatch(setIsOn())}>change</button>
                <span>isOn: {isOn}</span>
            </div>
        </header>
    )
}

export default connector(Header);