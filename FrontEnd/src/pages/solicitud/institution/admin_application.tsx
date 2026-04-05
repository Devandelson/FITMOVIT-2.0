import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';

// resources
import logo from '../../../assets/logo.png';

// components
import { TextInput, Button } from '../components.tsx';

// ─── AppHeader ────────────────────────────────────────────────────────────────
function AppHeader() {
    return (
        <div className="flex items-center gap-3 w-full bg-white justify-center flex-wrap p-3">
            <img
                src={logo}
                alt="FITMOVIT Logo"
                className="w-16 aspect-square object-cover"
            />
            <h2
                className="font-black text-2xl tracking-tighter text-gray-800"
            >
                FITMOVIT
            </h2>
        </div>
    );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function UserApplicationPage() {
    const navigate = useNavigate();

    function ChangeView(address: string) {
        navigate?.(address);
    }

    return (
        <main className="min-h-screen w-full bg-[#3d3d3d] grid grid-rows-[auto_1fr]">

            {/* Header: logo + name centered */}
            <AppHeader />

            {/* Card */}
            <motion.section className="w-full relative flex items-center justify-center p-7"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ duration: 0.2 }}
            >

                {/* Card body */}
                <div className="p-12 pb-10 flex flex-col gap-6 w-full max-w-xl
                bg-white rounded-2xl shadow-2xl shadow-black/30 h-max
                ">

                    {/* Title */}
                    <div className="text-center mb-7">
                        <h1
                            className="text-2xl font-extrabold text-gray-800 tracking-tight"
                        >
                            Solicitud de acceso
                        </h1>
                        <p className="text-sm text-gray-400 mt-1">
                            Únase a la red de transporte inteligente FITMOVIT, colaborando con su institución para mejorar la movilidad urbana.
                        </p>
                    </div>

                    {/* Tabs */}
                    <div className="flex rounded-xl border border-gray-200 overflow-hidden">
                        <button
                            type="button"
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer text-gray-400 hover:bg-gray-50`}

                            onClick={() => { ChangeView("/solicitud/usuario") }}
                        >
                            <i className="fa-solid fa-user text-xs" />
                            Usuario
                        </button>
                        <button
                            type="button"
                            className={`flex-1 flex items-center justify-center gap-2 py-2.5 text-sm font-semibold transition-all duration-200 cursor-pointer bg-teal-600 text-white`}
                        >
                            <i className="fa-solid fa-building text-xs" />
                            Institución
                        </button>
                    </div>

                    {/* Form */}
                    <form className="flex flex-col gap-4" onSubmit={(e) => e.preventDefault()}>

                        <TextInput
                            id="name"
                            label="Nombre de la institución"
                            placeholder="Ej. Universidad XYZ"
                            required
                        />

                        <TextInput
                            id="phone"
                            label="Teléfono corporativo o de contacto"
                            placeholder="Ej. 555-1234"
                            required
                        />

                        <span className='w-full h-auto flex items-center gap-4 flex-wrap'>
                            <TextInput
                                id="password"
                                label="Contraseña"
                                placeholder="Ingrese una contraseña segura"
                                required
                            />

                            <TextInput
                                id="passwordConfirm"
                                label="Confirmar contraseña"
                                placeholder="Ingrese nuevamente la contraseña"
                                required
                            />
                        </span>

                        <TextInput
                            id="address"
                            label="Dirección de la institución"
                            placeholder="Ej. Calle 123, Ciudad ABC"
                            required
                        />

                        <TextInput
                            id="email"
                            label="Correo electrónico corporativo"
                            type="email"
                            placeholder="nombre@empresa.com"
                            required
                        />

                        {/* Buttons */}
                        <div className="flex flex-col gap-2 pt-2">
                            <Button
                                variant="filled"
                                type="submit"
                                icon="fa-solid fa-arrow-right"
                            >
                                Enviar solicitud
                            </Button>

                            <Button
                                variant="ghost"
                                icon="fa-solid fa-arrow-left"
                                href="/login"
                            >
                                Volver al inicio de sesión
                            </Button>
                        </div>
                    </form>
                </div>
            </motion.section>
        </main>
    );
}