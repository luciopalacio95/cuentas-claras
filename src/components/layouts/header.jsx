import logo from '../../assets/images/cuentas-color.png';

export default function Header() {

  return (
    <header className="w-full z-50 top-0 border-solid border-slate-950/30 border-b">
        <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-3 lg:px-8">
            <div className=""> 
                <div
                    className="flex items-center flex-row space-x-4 -m-1.5 p-1.5 cursor-pointer"
                    >
                    <img 
                        src={logo}
                        className='img-responsive w-auto h-8 sm:h-10'
                        alt='logo'
                    />
                    <span className="text-gray-900 text-lg">Cuentas Claras</span>
                </div>
            </div>
        </nav>
    </header>
  )
}
