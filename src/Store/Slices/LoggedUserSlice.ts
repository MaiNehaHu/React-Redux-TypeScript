import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userData {
    userName: string | null;
    userMail: string | null;
    userPassword: string | null;
}

const key = "Logged User";
function getUserDetails(): userData {
    let details = localStorage.getItem(key);

    if (details) {
        return JSON.parse(details);
    } else {
        return { userName: null, userMail: null, userPassword: null };
    }
}

interface LoggedUserSlice extends userData {}

const LoggedUserSlice = createSlice({
    name: "Name of User",
    initialState: getUserDetails(),
    reducers: {
        setLoggedUserDetails(state, action: PayloadAction<userData>) {
            const toReturn = { ...action.payload };

            localStorage.setItem(key, JSON.stringify(toReturn));
            return toReturn;
        },
    },
});

export default LoggedUserSlice.reducer;
export const { setLoggedUserDetails } = LoggedUserSlice.actions;