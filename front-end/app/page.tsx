/* eslint-disable @next/next/no-img-element */
"use client"


import InputEmail from "./components/InputEmail";
import InputPassword  from "./components/InputPassword";


export default function Home() {
  const []
  return (
    <div className="flex justify-center items-center h-screen">
        <main className="w-drawer gap-8 flex flex-col ">
          <div className="flex items-center gap-2 size-5">
            <img src="logo.svg" alt="logo" />
            ritimo
          </div>
          <div>
            <h1 className="text-title" >Entrar</h1>
            <p>Que bom te ver de novo continue de onde parou na sua semana.</p>
          </div>
          <form action="" className="flex flex-col gap-4">
            <button className="ritmo-outlined  w-full" type="button">
              <img src="google.svg" alt="icone da google" />
              Continuar com Google
            </button>
            
            <div className="my-4 flex items-center gap-3">
              <span aria-hidden="true" className="h-px flex-1 bg-divider" />
              <span className="whitespace-nowrap text-small text-muted">
                ou com e-mail
              </span>
              <span aria-hidden="true" className="h-px flex-1 bg-divider" />
            </div>
            <InputEmail/>
            <InputPassword/>
            <div className="w-full flex justify-end"><a
                  href="#"
                  className="text-small-strong text-text-muted hover:text-primary-text underline"
            >
              Esqueci minha senha
            </a></div>
            <button className="ritmo-primary" type="submit">Entrar</button>
          </form>
        <span className="w-full flex justify-center gap-1">Ainda não tem conta? <a href="" className="text-primary-text underline">Criar conta</a></span>
        </main>
    </div>
  );
}
