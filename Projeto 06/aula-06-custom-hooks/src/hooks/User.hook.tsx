import { createContext, useContext, useEffect, useState } from "react";
import { IUser } from "../global/@types/User.types";

interface IUserContextProps {
  user: IUser;
}

// Contexto
const UserContext = createContext({} as IUserContextProps);

// Provider

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({} as IUser);

  useEffect(() => {
    // Chamada de API

    setUser({
      "id": 1,
      "name": "Leanne Graham",
      "username": "Bret",
      "email": "Sincere@april.biz",
      "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
          "lat": "-37.3159",
          "lng": "81.1496"
        }
      },
      "phone": "1-770-736-8031 x56442",
      "website": "hildegard.org",
      "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
      }
    })
  }, []);

  return (
    <UserContext.Provider value={{ user }} >
      {children}
    </UserContext.Provider>
  )
}

// Use
const useUser = () => {
  const { user } = useContext(UserContext)

  return {
    user
  }
}

export {
  UserProvider,
  useUser
}