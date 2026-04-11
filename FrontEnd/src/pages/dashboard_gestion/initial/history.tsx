// -- RESOURCES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faWheelchair,
    faUser,
    faClockRotateLeft,
} from '@fortawesome/free-solid-svg-icons';


// ─── Historial de Recargas ────────────────────────────────────────────────────
const historialData = [
    { id: 1, nombre: 'Andelson',  fecha: '25/2/2025', monto: 1500, institucion: 'OGTIC'  },
    { id: 2, nombre: 'Brady',     fecha: '10/3/2025', monto: 800,  institucion: 'MINERD' },
    { id: 3, nombre: 'Andersson', fecha: '18/3/2025', monto: 1200, institucion: 'OGTIC'  },
    { id: 4, nombre: 'Carla',     fecha: '01/4/2025', monto: 950,  institucion: 'MINERD' },
    { id: 5, nombre: 'Ana smell', fecha: '03/4/2025', monto: 2000, institucion: 'UASD'   },
];

export default function HistorialRecargas() {
    return (
        <div className="bg-white rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.07)] border border-gray-100 flex-1 min-w-72">

            {/* Header */}
            <div className="flex items-center gap-2.5 px-5 pt-5 pb-4 border-b border-gray-100">
                <span className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center">
                    <FontAwesomeIcon icon={faClockRotateLeft} className="text-blue-500 text-sm" />
                </span>
                <div>
                    <h2 className="text-lg font-extrabold text-gray-800 leading-tight">Historial de Recargas</h2>
                </div>
            </div>

            {/* List */}
            <ul className="divide-y divide-gray-50 px-3 py-2">
                {historialData.map(persona => (
                    <li key={persona.id} className="flex items-center gap-3 py-3 px-2 rounded-xl hover:bg-gray-50 transition-colors">

                        {/* Avatar */}
                        <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                            <FontAwesomeIcon icon={faUser} className="text-blue-400 text-base" />
                        </span>

                        {/* Info */}
                        <div className="flex-1 min-w-0">
                            <p className="text-sm font-bold text-gray-700 truncate">{persona.nombre}</p>
                        </div>

                        {/* Detalles button */}
                        <button className="flex items-center gap-1.5 bg-blue-500 text-white text-xs font-bold px-3 py-2 rounded-xl shadow-sm shrink-0">
                            Detalles
                            <FontAwesomeIcon icon={faWheelchair} className="text-xs" />
                        </button>

                    </li>
                ))}
            </ul>
        </div>
    );
}
