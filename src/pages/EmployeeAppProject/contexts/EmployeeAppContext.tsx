import { useState, createContext, PropsWithChildren } from "react";

import { Employee } from "pages/EmployeeAppProject/Layout_Team_1/types";

export interface EmployeeContextType {
  employee: Employee;
  setEmployee: (e: Employee) => void;
}

export const EmployeeAppContext = createContext<EmployeeContextType>({
  employee: {
    name: "",
    surName: "",
    age: "",
    jobPosition: "",
  },
  setEmployee: () => {},
});

// сделать компонентом через function 
export const EmployeeAppContextProvider = ({ children }: PropsWithChildren) => {
  const [employee, setEmployee] = useState<Employee>({
    name: "",
    surName: "",
    age: "",
    jobPosition: "",
  });

  return (
    <EmployeeAppContext.Provider
      value={{ employee: employee, setEmployee: setEmployee }}
    >
      {children}
    </EmployeeAppContext.Provider>
  );
};
