import { useContext } from "react";

import { EmployeeAppContext } from "pages/EmployeeAppProject/contexts/EmployeeAppContext";

import { EmployeesCard, TextDiv, TextLabel, TextContent } from "./styles";

function Employees_Card() {
  const { employee } = useContext(EmployeeAppContext);

  // перенести в папку styles 
  const isCardVisible = () => {
    if (employee.name == "") {
      return "none";
    } else return "flex";
  };

  const isJobInserted = () => {
    if (employee.jobPosition == "") {
      return "none";
    } else return "flex";
  };

  return (
    <EmployeesCard style={{ display: isCardVisible() }}>
      <TextDiv>
        <TextLabel>Name</TextLabel>
        <TextContent>{employee.name}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Surname</TextLabel>
        <TextContent>{employee.surName}</TextContent>
      </TextDiv>
      <TextDiv>
        <TextLabel>Age</TextLabel>
        <TextContent>{employee.age}</TextContent>
      </TextDiv>
      <TextDiv style={{ display: isJobInserted() }}>
        <TextLabel>Job Position</TextLabel>
        <TextContent>{employee.jobPosition}</TextContent>
      </TextDiv>
    </EmployeesCard>
  );
}

export default Employees_Card;
