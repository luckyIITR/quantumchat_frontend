import axios from 'axios';

export const userRegister = (data) => {
     return async (dispatch) => {

          const config = {
               headers: {
                    'Content-Type':'application/json'
               }
          }
          try{
               const response = await axios.post('http://localhost:5000/api/signup',data,config);
               console.log(response.data);

          } catch(error){
               console.log(error.response.data);
          }

     }
}