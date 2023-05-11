/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useSocket } from "../hooks/useSocket";

export const SocketContext = createContext();

export const SocketProvider = ({ children }) => {

    
    const {socket, onLine} = useSocket('https://bandnames-dmp.herokuapp.com/')
    // const {socket, onLine} = useSocket('http://localhost:8080')

    return (
        <SocketContext.Provider value={{
            socket,
            onLine
        }}>
            {children}
        </SocketContext.Provider>
    )
}


