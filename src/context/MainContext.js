// import { useContext, createContext, useState } from "react";

// const context = createContext();

// export const useMainContext = () => {
//   return useContext(context);
// };

// const MainContextProvider = ({ children }) => {
//   const initialData = { username: "" };
//   const [formData, setFormData] = useState(initialData);

//   return (
//     <context.Provider value={{ formData, setFormData }}>
//       {children}
//     </context.Provider>
//   );
// };

// export default MainContextProvider;
