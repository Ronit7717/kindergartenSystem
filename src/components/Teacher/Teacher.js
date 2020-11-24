import React, { Component , useState} from 'react';
import './Teacher.css'



 function Teacher(props){

    const teachers=
    [
      {
        f_name:"חנה",
        l_name:"כהן",
        adress:"התמר 18",
        email:"chana@gmail.com",
        phone_1:"03-9099999",
        phone_2:"052-2222222",
      },
      {
        f_name:"מיכל",
        l_name:"לוי",
        adress:" התמר 16",
        email:" michal@gmail.com",
        phone_1:"03-9099995",
        phone_2:"052-2222225",
      },
      {
        f_name:"שירה",
        l_name:" כץ",
        adress:" האגוז 18",
        email:" shira@gmail.com",
        phone_1:"03-9099997",
        phone_2:"052-2222227",
      }
    ]


   // function handleTeacherList(){
   //      setTeacherList(<tr>
   //       <td>{teachers[0].f_name}</td>
   //       <td>{teachers[0].l_name}</td>
   //       <td>{teachers[0].adress}</td>
   //       <td>{teachers[0].email}</td>
   //       <td>{teachers[0].phone_1}</td>
   //       <td>{teachers[0].phone_2}</td>
   //     </tr>)
   // }



    const [teacherList, setTeacherList] = useState(null);


    return(
      <div className = "main">
        <table onLoad = {setTeacherList("hey")}>
          <tr>
            <th>שם פרטי</th>
            <th>שם משפחה</th>
            <th>כתובת</th>
            <th>מייל</th>
            <th>טלפון 1</th>
            <th>טלפון 2</th>
          </tr>
          {teacherList}
        </table>
      </div>
    );
}


export default Teacher;