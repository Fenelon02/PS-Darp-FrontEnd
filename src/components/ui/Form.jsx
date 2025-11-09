import { useForm } from 'react-hook-form'
import { postUser} from '../../services/apiServices'
import Input from './Input';
import Button from './Button';
import { useState, useEffect } from 'react';
import '../../assets/fonts.css'

export default function Form() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [errMsg, setErrMsg] = useState('')
  const [sucessMsg, setSucessMsg] = useState('')
  const [showSucessMessage, setShowSucessMessage] = useState(false)

  useEffect (() => {
    if(showSucessMessage){
      const timer = setTimeout(() => {
        setShowSucessMessage(false)
      }, 5000)

      return () => clearTimeout(timer)
    }
  }, [showSucessMessage])

  const onSubmit = async (data) => {
    try {
      setErrMsg("")
      setSucessMsg("")

      const registrationResult = await postUser(data)
      if(!registrationResult){
        setErrMsg("Username ou email já cadastrados.")
      } else{
        setSucessMsg("Usuário cadastrado com sucesso!")
        setShowSucessMessage(true)
      }

    } catch (error) {
      setErrMsg("Erro ao cadastrar usuário. Tente novamente.")
    }
  }

  

  return (
  <div>
  <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        label="Nome"
        labelclassname="mb-2 font-semibold text-lg stack-sans-notch-font text-blue-900"
        variant="ghost"
        size="large"
        placeholder="Nome"
        id="name"
        error={errors.name?.message}
        {...register("name", { 
          required: "O nome pessoal é obrigatório.", 
        })}
      />

      <Input
        label="Username"
        labelclassname="mb-2 font-semibold text-lg stack-sans-notch-font text-blue-900"
        variant="ghost"
        size="large"
        type="text"
        placeholder="Username"
        id="username"
        error={errors.username?.message}
        {...register("username", { 
          required: "O username é obrigatório.", 
        })}
      />

      <Input
        label="Email"
        labelclassname="mb-2 font-semibold text-lg stack-sans-notch-font text-blue-900"
        variant="ghost"
        size="large"
        type="email" 
        placeholder="Email"
        id="email"
        error={errors.email?.message}
        {...register("email", { 
          required: "O email é obrigatório", 
          pattern: {
            value: /^\S+@\S+\.\S+$/i,
            message: "Insira um email válido."
          }
        })}
      />

      <Input
        label="Data de Nascimento"
        labelclassname="mb-2 font-semibold text-lg stack-sans-notch-font text-blue-900"
        variant="ghost"
        size="large"
        type="date" 
        id="dateBirth"
        className="text-gray-800"
        error={errors.dateBirth?.message}
        {...register("dateBirth", { 
          required: "A data de nascimento é obrigatória." 
        })}
      />

      <Input
        label="Número de Celular"
        labelclassname="mb-2 font-semibold text-lg stack-sans-notch-font text-blue-900"
        variant="ghost"
        size="large"
        type="tel" 
        placeholder="Celular (Ex: 88994578916)"
        id="phone"
        error={errors.phone?.message}
        {...register("phone", { 
          required: "O número de celular é obrigatório.", 
          minLength: { value: 11, message: "Mínimo de 11 dígitos" },
          maxLength: { value: 14, message: "Máximo de 14 dígitos" }
        })}
      />

      <Input
        label="Observação"
        labelclassname="mb-2 font-semibold text-lg stack-sans-notch-font text-blue-900"
        variant="ghost"
        size="large"
        type="text"
        placeholder="Alguma observação"
        id="note"
        {...register("note", { required: false })}
      />

      <Button
        type='submit'
        variant='primary'
        size = "medium"
        content = "Inscreva-se"
        className='self-center my-2 stack-sans-notch-font'
        disabled = {false}
      />
    </form>
    {errMsg && (
        <p className="text-red-600 stack-sans-notch-font text-center my-2">{errMsg}</p>
      )}
    { showSucessMessage && (
      <p className='text-blue-900 stack-sans-notch-font text-center my-2'>{sucessMsg}</p>
    )}
    
    </div>
  )
}
