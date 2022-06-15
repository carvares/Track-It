import React, { createContext,PropsWithChildren,useState } from 'react';


const UserContext:any = createContext(null);
const [userInfo, setUserInfo] = useState({});

export default function UserContextProvider(props: PropsWithChildren){
    return(
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {props.children}
        </UserContext.Provider>
    )
}