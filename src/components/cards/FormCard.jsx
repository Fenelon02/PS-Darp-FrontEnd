import '../../assets/fonts.css';
import Form from '../ui/Form'

export default function FormCard({ className }) {
  return (
    <div className={`m-8 ${className}`}>
      <div className='flex justify-center items-center'>
        <h2 className='stack-sans-notch-font text-5xl text-center text-blue-900'>Get in!</h2>
      </div>
      <Form />
    </div>
  )
}