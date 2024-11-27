export default function HeadingHome() {
  return (
    <div className="flex flex-col gap-5 pl-10 pt-11 duration-500 animate-in fade-in slide-in-from-top-8">
      <h1 className="flex flex-col gap-5 text-dark-900 text-5xl font-bold after:content-[''] after:h-[3px] after:w-[90px] after:bg-primary after:rounded">
        Calculadora e locais
      </h1>
      <p className="text-dark-500 text-2xl">
        Saiba o impacto que será evitado com descarte correto de medicamentos e
        encontre um local de descarte.
      </p>
    </div>
  )
}
