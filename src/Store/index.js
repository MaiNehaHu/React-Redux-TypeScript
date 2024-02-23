import { configureStore } from "@reduxjs/toolkit";
import LoggedUserSlice from "./Slices/LoggedUserSlice";
import newUserStatusSlice from "./Slices/newUserStatusSlice";
import usersListSlice from "./Slices/usersListSlice";

const store = configureStore({
    reducer: {

        usersList: usersListSlice,

        loggedUser: LoggedUserSlice,

        newUserStatus: newUserStatusSlice,

        /**Access of all micro reducers. */
    },
});

export default store;