import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';
import {userList} from '../Data/Userdata';

//Initial State
const initState = {
	userList: userList
};

//Create Gobal Context
export const GlobalContext = createContext(initState);

//Provider Component
export const GlobalProvider = ({children}) => {
	const [state, dispatch] = useReducer(AppReducer, initState);

	return <GlobalContext.Provider value={{userList: state.userList}}>{children}</GlobalContext.Provider>;
};
