import  { createContext, useContext, useEffect, useState } from 'react';

export type UserType = {
  user?: any;
  token?: string;
};

export type AuthContextType = {
  user?: UserType|null;
  setLogin?: (data: UserType|null) => void;
};

const AuthContext = createContext<AuthContextType>({});

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<UserType|null>({});

  useEffect(() => {
    const authState = localStorage.getItem('authState');
    if (authState) setUser(JSON.parse(authState));
  }, []);

  const setLogin = (data: UserType|null) => {
    localStorage.setItem('authState', JSON.stringify(data));
    setUser(data);
  };

  return (
    <AuthContext.Provider value={{ user, setLogin }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
