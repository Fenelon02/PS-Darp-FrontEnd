import axios from 'axios';

export async function postUser(user) {
   try{
    const response = await axios.post('http://localhost:3000/auth/register', user)
    if(response.data.message === "Usuário criado com sucesso"){
      return true
    } else{
      return false
    }
   } catch (error){
    throw error
  }
}