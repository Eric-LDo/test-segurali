"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

type Props = {
  autoComplete?: "current-password" | "new-password";
};



const InputPassword = ({ autoComplete = "current-password" }: Props) => {
  const [visivel, setVisivel] = useState(false);
  const Icone = visivel ? EyeOff : Eye;

  return (
    <div className="input-label">
      <label htmlFor="senha" className="">
        Senha
      </label>

      <div className="relative">
        <input
          id="senha"
          name="senha"
          type={visivel ? "text" : "password"}
          autoComplete={autoComplete}
          placeholder="Sua senha"
          className=""
          required
        />

        <button
          type="button"
          aria-label={visivel ? "Ocultar senha" : "Mostrar senha"}
          aria-controls="senha"
          onClick={() => setVisivel((valor) => !valor)}
          className="absolute inset-y-0 right-0 grid w-11 place-items-center rounded-md text-muted hover:text-text"
        >
          <Icone className="ritmo-icon-button" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
export default InputPassword