import React, { createContext,PropsWithChildren,useState } from 'react';
import { userInfo } from '../types';


export const UserContext:any = createContext({});

export default function UserContextProvider(props: PropsWithChildren){
    const [userInfo, setUserInfo] = useState<userInfo>({
        imgUrl:'',
        userName:'',
        email:'',
        token:'',
    });
    return(
        <UserContext.Provider value={{userInfo, setUserInfo}}>
            {props.children}
        </UserContext.Provider>
    )
}