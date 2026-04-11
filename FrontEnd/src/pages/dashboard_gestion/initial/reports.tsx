// -- RESOURCES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLayerGroup,
    faChartPie,
    faBuildingColumns,
    faCalendarDays,
    faUsers,
    faClockRotateLeft,
    faChartColumn,
} from '@fortawesome/free-solid-svg-icons';

const reportesBotones = [
    { icon: faUsers,           label: 'Reporte de Usuarios',      description: 'Listado completo de usuarios registrados',     color: 'bg-blue-500',   hover: 'hover:bg-blue-600'   },
    { icon: faLayerGroup,      label: 'Reporte de Grupos',        description: 'Resumen de grupos por institución',             color: 'bg-indigo-500', hover: 'hover:bg-indigo-600' },
    { icon: faClockRotateLeft, label: 'Reporte de Recargas',      description: 'Historial de recargas realizadas',             color: 'bg-sky-500',    hover: 'hover:bg-sky-600'    },
    { icon: faBuildingColumns, label: 'Reporte de Instituciones', description: 'Estado actual de instituciones vinculadas',     color: 'bg-violet-500', hover: 'hover:bg-violet-600' },
    { icon: faChartPie,        label: 'Reporte General',          description: 'Vista consolidada de todas las métricas',      color: 'bg-cyan-500',   hover: 'hover:bg-cyan-600'   },
    { icon: faCalendarDays,    label: 'Reporte por Período',      description: 'Filtrar estadísticas por rango de fechas',     color: 'bg-teal-500',   hover: 'hover:bg-teal-600'   },
];

export default function Reportes() {
    return (
        <div className="bg-white rounded-2xl shadow-[0_2px_24px_rgba(0,0,0,0.07)] border border-gray-100 flex-1 min-w-72">

            {/* Header */}
            <div className="flex items-center gap-2.5 px-5 pt-5 pb-4 border-b border-gray-100">
                <span className="w-9 h-9 rounded-xl bg-indigo-50 flex items-center justify-center">
                    <FontAwesomeIcon icon={faChartColumn} className="text-indigo-500 text-sm" />
                </span>
                <div>
                    <h2 className="text-lg font-extrabold text-gray-800 leading-tight">Reportes</h2>
                    <p className="text-xs text-gray-400">Selecciona el tipo de reporte a generar</p>
                </div>
            </div>

            {/* Buttons grid */}
            <div className="p-5 flex flex-wrap gap-3">
                {reportesBotones.map(btn => (
                    <button
                        key={btn.label}
                        className={`${btn.color} ${btn.hover} transition-colors text-white rounded-2xl p-4 flex items-start gap-3 flex-1 min-w-48 text-left shadow-sm`}
                    >
                        <span className="w-9 h-9 rounded-xl bg-white/20 flex items-center justify-center shrink-0 mt-0.5">
                            <FontAwesomeIcon icon={btn.icon} className="text-base" />
                        </span>
                        <div>
                            <p className="text-sm font-bold leading-tight">{btn.label}</p>
                            <p className="text-xs opacity-75 mt-0.5 leading-snug">{btn.description}</p>
                        </div>
                    </button>
                ))}
            </div>
        </div>
    );
}
