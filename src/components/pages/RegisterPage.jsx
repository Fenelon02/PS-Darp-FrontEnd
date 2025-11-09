import HeroCardPiaui from '../cards/HeroCardPiaui'
import FormCard from '../cards/FormCard'

export default function RegisterPage() {
  return (
    <div className="grid grid-cols-5 gap-8 w-full h-screen bg-blue-900">
        <HeroCardPiaui className = "col-span-3" />
        <FormCard className = "col-span-2 flex flex-col justify-center align-center bg-white rounded-4xl px-8 shadow-blue-600 shadow-xl/30 " />
    </div>
  )
}