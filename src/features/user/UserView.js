import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserView = () => {
    const userData = useSelector((state) => state.user);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchUsers());
    }, []);
    console.log(userData.users);
    return (
        <div>
            <h2>List of users- </h2>
            {userData.loading && <div>Loading...</div>}
            {!userData.loading && userData.error && (
                <div> Error: {userData.error}</div>
            )}
            {!userData.loading && userData.users.length ? (
                <ul>
                    {userData.users.map((user) => (
                        <li key={user.id}>{user.name}</li>
                    ))}
                </ul>
            ) : null}
        </div>
    );
};

export default UserView;
