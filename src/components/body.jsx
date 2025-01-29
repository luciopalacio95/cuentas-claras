import Calculador from "./formula/calculador";

export default function Body(){
    return (
        <section className="mt-14 sm:mt-18 pt-2 sm:pt-4 items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <h1 id="titulo" className="mt-5 mb-5 text-2xl text-center sm:text-4xl">Todos sabemos que las cuentas claras, hacen las relaciones duraderas</h1>
            <Calculador/>
        </section>
    )
}

