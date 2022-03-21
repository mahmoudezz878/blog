import { createContext, useState } from "react";

const CardContext = createContext();

const PostContext = ({ children }) => {
  const [post, setPost] = useState({id: '1', name: 'mahmoud'});
  return (
    <CardContext.Provider value={{ post, setPost }}>
      {children}
    </CardContext.Provider>
  );
};

export { PostContext, CardContext };
