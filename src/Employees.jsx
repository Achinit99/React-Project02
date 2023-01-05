import { useState } from "react";
import femaleProfile from "./images/femaleProfile.jpg";
import maleProfile from "./images/maleProfile.jpg";

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
    <main className="container">
      <div class="row">
        <div class="col-8">
          {employees.map((employee) => (
            <div id={employee.id} className="card">
              <img src={femaleProfile} className="card-img-top" />
              <div className="card-body">
                <h6 className="card-title">Full Name: {employee.fullName}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default Employees;
