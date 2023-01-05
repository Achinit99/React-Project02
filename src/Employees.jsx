import { useState } from "react";

const Employees = () => {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      fullName: "Achini Kawshalya ",
      designation: "Developer",
      gender: "Female",
    },

    {
      id: 1,
      fullName: "Avishka Supun ",
      designation: "Web Developer",
      gender: "male",
    },

    {
      id: 1,
      fullName: "Navoda Nirmani ",
      designation: "Software Developer",
      gender: "male",
    },

    {
      id: 1,
      fullName: "Imali Upeksha",
      designation: "Software Engineer",
      gender: "Female",
    },

    {
      id: 1,
      fullName: "Susil PremaKumara",
      designation: "Assistan Developer",
      gender: "male",
    },

    {
      id: 1,
      fullName: "Navod Warnakula Sooriya",
      designation: "HR Manager",
      gender: "male",
    },

    {
      id: 1,
      fullName: "Sachini Sewwandi",
      designation: "Team Manager",
      gender: "Female",
    },
  ]);

  return (
    <main>
      {employees.map((employee) => (
        <p>{employee.fullName}</p>
      ))}
    </main>
  );
};
export default Employees;
