import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, reStocked } from "./iceCreamSlice";

const IceCreamView = () => {
    const numOfIceCreams = useSelector(
        (state) => state.iceCream.numOfIceCreams
    );
    // console.log(numOfIceCreams);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of ice creams - {numOfIceCreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order ice cream</button>
            <button onClick={() => dispatch(reStocked(5))}>
                Restock ice creams
            </button>
        </div>
    );
};

export default IceCreamView;
