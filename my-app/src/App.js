// import logo from './logo.svg';
import './App.css';

getData();
  
  async function getData(){
   let temp="";
   fetch('http://www.raydelto.org/agenda.php')
   .then(res => res.json())
   .then(res =>{
      for(let element of res){
         temp+="<tr>";
         temp+="<td>"+element['nombre']+"</td>";
         temp+="<td>"+element['apellido']+"</td>";
         temp+="<td>"+element['telefono']+"</td></tr>";

      }
      document.getElementById("data").innerHTML=temp;
   })
   .catch( err => console.error(err));
     }
    let loginForm = document.getElementById("myForm");
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
    
      let username = '';
      let password = '';
      let telf = '';
    
      if (username.value === "" || password.value === "" ||telf.value ==="") {
        console.log("Anormal asi no,  como que vacio!");
      } else {
        fetch('http://www.raydelto.org/agenda.php', {
              method: 'POST',
              headers: {
                 "accept": "application/json",
              },
              body: JSON.stringify({ nombre:username.value, apellido: password.value ,telefono:telf.value})
           })
           .then(res => res.json())
           .then(res=> {
                 console.log('success');
        }).catch( err => alert(err));
    
        username.value = "";
        password.value = "";
        telf.value="";
      }
    });
    
function App() {
  return (
    <div className="App">
    
      <h1><center>Agenda </center></h1>
      <hr></hr>
      <div class="employee-form">
        <form method="get" id="myForm">
          <div>
            <label>Nombre</label>
            <input type="text" name="nm" id="nm"/>
          </div>
          <div>
            <label>Apellido</label>
            <input type="text" name="ap" id="ap"/>
          </div>
          <div>
              <label>Telefono</label>
              <input type="text" name="tl" id="tl"/>
          </div>
          <div class="form-action-buttons">
            <input type="submit"  value="Submit"/>
          </div>
        </form>

      </div>
      <br/>
      <div class = "employees-table">
                <table class="list" id="employeeList">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Telefono</th>
                            
                        </tr>
                    </thead>
                    <tbody id="data">
                        

                    </tbody>
                </table>
        </div>
      
    </div>
  );
}

export default App;
