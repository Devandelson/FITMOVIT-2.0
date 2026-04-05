// ─── Hooks ────────────────────────────────────────────────────────────────
import { useState } from "react";
import { Link, useNavigate } from "react-router";

// ** resources: **
import fondo_login from '../../assets/fondo_login.webp';
import logo from '../../assets/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faEnvelope, 
  faLock, 
  faUserPlus, 
  faBuilding, 
  faArrowRightToBracket, 
  faEye, 
  faEyeSlash 
} from '@fortawesome/free-solid-svg-icons';

// ─── Sub-components ───────────────────────────────────────────────────────────

function Background() {
  return (
    <div className="absolute inset-0 z-0">
      <img
        src={fondo_login}
        alt="Modern tour bus on urban street at dusk"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[#0a192f]/60 backdrop-blur-xs" />
    </div>
  );
}

function Logo() {
  return (
    <div className="mb-20 text-center flex flex-col items-center gap-4">
      <img src={logo} alt="FITMOVIT Logo" className="w-60 aspect-square object-cover" />
      <h1 className="font-black text-4xl tracking-tighter text-white">
        FITMOVIT
      </h1>
    </div>
  );
}

function Header() {
  return (
    <div className="mb-10">
      <h2 className="font-extrabold text-3xl text-white tracking-tight">
        Inicio de sesión
      </h2>
      <p className="text-white/60 mt-2 text-sm">
        Bienvenido de nuevo. Introduce tus datos.
      </p>
    </div>
  );
}

function Form() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  return (
    <form className="space-y-6 grow" onSubmit={(e) => e.preventDefault()}>
      {/* Campo Correo */}
      <div className="space-y-2">
        <label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
          Correo electrónico
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black">
            <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
          </span>
          <input
            id="email"
            type="email"
            placeholder="tu@email.com"
            className="w-full pl-11 pr-5 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all duration-300 placeholder:text-white/30 text-white outline-none"
          />
        </div>
      </div>

      {/* Campo Contraseña */}
      <div className="space-y-2">
        <label htmlFor="password" className="text-xs font-bold uppercase tracking-widest text-white/50 ml-1">
          Contraseña
        </label>
        <div className="relative">
          <span className="absolute left-4 top-1/2 -translate-y-1/2 text-black">
            <FontAwesomeIcon icon={faLock} className="text-sm" />
          </span>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="w-full pl-11 pr-12 py-4 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 focus:bg-white/10 transition-all duration-300 placeholder:text-white/30 text-white outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/30 hover:text-white/70 transition-colors"
          >
            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} className="text-sm" />
          </button>
        </div>
      </div>

      {/* Botón de Submit */}
      <button
        type="submit"
        className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full shadow-lg shadow-blue-600/30 active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2"
        onClick={() => navigate('/dashboard')}
      >
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        Iniciar sesión
      </button>
    </form>
  );
}

function AccessLinks() {
  return (
    <div className="pt-10 mt-auto border-t border-white/5">
      <div className="flex flex-col space-y-4">
        <Link 
          to="/solicitud/usuario" 
          className="text-sm font-bold text-blue-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faUserPlus} className="text-base" />
          Solicitud de acceso para un usuario
        </Link>
        <Link 
          to="/solicitud/institucion" 
          className="text-sm font-bold text-blue-400 hover:text-white transition-colors flex items-center gap-2"
        >
          <FontAwesomeIcon icon={faBuilding} className="text-base" />
          Solicitud de acceso para una institución
        </Link>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LoginPage() {
  return (
    <main className="relative min-h-screen w-full flex flex-col md:flex-row overflow-hidden">
      <Background />

      <div
        className="relative z-10 w-full md:w-140 min-h-screen flex flex-col p-8 md:p-12 shadow-2xl"
        style={{
          background: "rgba(10, 25, 47, 0.70)",
          backdropFilter: "blur(24px)",
          borderRight: "1px solid rgba(255, 255, 255, 0.08)",
        }}
      >
        <Logo />
        <Header />
        <Form />
        <AccessLinks />
      </div>

      <div className="hidden md:block grow" />
    </main>
  );
}