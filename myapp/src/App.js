import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';

function App() {
  const[input,setInput] = useState([
    {
      id: 1,
      name: '',
      email: '',
      role: '',
      phone: '',
    }
  ])

   
   const addmore = () => {
      let singleFiled = {id: input.length + 1, name : '', email : '',role : '' ,phone : ''};
      let data = [...input,singleFiled];
      setInput(data)
   }

   const Deletedata = (id) => {
    let data = input.filter(item => item.id !== id);
    setInput(data);
   }

   return(
   <body>
     <center>
      <h1 style={{backgroundColor:"#212529 " , color:"white" , padding:"10px"}}>SHRUTI INFOTECH</h1>
      <h3 style={{backgroundColor:"#566573  ", color:"white" , padding:"5px" }}>Employ Record</h3>
    <table border={2} cellPadding={10}  class="table table-dark table-striped">
      <thead style={{textAlign:"center"}}>
        <tr style={{fontSize:"16px"}}>
          <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Phone</th>
          <th><button type="button" class="btn btn-outline-success" onClick={() => addmore()}>Add</button></th>
        </tr>
      </thead>
      <tbody style={{textAlign:"center"}}>
        {input.map((item, index) => {
          return (
            <tr key={item.id} >
              <td>{item.id}</td>
              <td><input type="text" style={{textAlign:"center"}}/></td>
              <td><input type="text" style={{textAlign:"center"}}/></td>
              <td><input type="text" style={{textAlign:"center"}}/></td>
              <td><input type="text"  style={{textAlign:"center"}}/></td>
              <td><input type="button" class="btn btn-outline-danger" value="Delete" onClick={() =>  Deletedata(item.id)} /></td>
            </tr>
          )
        })}
      </tbody>
    </table>
    
  </center>
   </body>
   )

}

export default App;
