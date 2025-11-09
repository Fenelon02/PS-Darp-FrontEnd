 import '../../assets/fonts.css';
 import LogoFront from '../../assets/logoFront-endPiaui.svg';

export default function HeroCardPiaui(props) {
 return (
    <div className={`bg-blue-900 grid grid-rows-3 rounded-r-4xl ${props.className}`}>
                <div className="row-span-1 flex flex-col justify-center items-center">
                    <h1 className='stack-sans-notch-font text-8xl text-amber-100 flex flex-col'> 
                        <span className='stack-sans-notch-font text-2xl'>XVI Simpólio</span> 
                        Front-end Piauí
                    </h1>
                        <h2 className='stack-sans-notch-font text-6xl text-amber-100'>Feel the creative</h2>
                </div>
                <div className="row-span-1 flex flex-col justify-center items-center">
                </div>
                <div className="row-span-1">
                    <img src={LogoFront} alt="Logo Simpólio Front-end Piauí" className="mx-auto w-3/5"/>
                </div>
            </div>
 )
}