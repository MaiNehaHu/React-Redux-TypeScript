import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface UserCredentials {
    key: string;
    userName: string;
    userMail: string;
    userPassword: string;
}

type userListState = UserCredentials[]

const User_ID_LS = "Logged Users List";

function getUsersCredentialsList(): userListState {
    let data = localStorage.getItem(User_ID_LS);

    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}

function uniqueKey(): string {
    return `${Math.ceil(Math.random() * Math.pow(10, 4))}DEMO${Math.ceil(
        Math.random() * Math.pow(10, 4)
    )}`;
}

const usersListSlice = createSlice({
    name: "Authentication",
    initialState: getUsersCredentialsList(),
    reducers: {
        Signup(state, action: PayloadAction<UserCredentials>) {
            const { userName, userMail, userPassword } = action.payload;

            if (userName == "" || userMail == "" || userPassword == "") {
                alert("You have not typed any of the things");
                return;
            }

            let alreadyRegistered = state.find((user) => {
                return user.userMail === userMail;
            });

            if (alreadyRegistered) {
                alert("Account already exists. Please log-in");
            } else {
                const newUser: UserCredentials = {
                    key: uniqueKey(),
                    userName,
                    userMail,
                    userPassword,
                };

                const updatedList = [newUser, ...state];
                localStorage.setItem(User_ID_LS, JSON.stringify(updatedList));

                state.push(newUser);
            }
        },
    }
})

export default usersListSlice.reducer;
export const { /**reducers */ Signup } = usersListSlice.actions;
