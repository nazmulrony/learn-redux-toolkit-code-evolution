import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { ordered, reStocked } from "./cakeSlice";

const CakeView = () => {
    const numOfCakes = useSelector((state) => state.cake.numOfCake);
    // console.log(numOfCakes);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Number of Cakes- {numOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order cake</button>
            <button onClick={() => dispatch(reStocked())}>Restock cakes</button>
        </div>
    );
};

export default CakeView;
