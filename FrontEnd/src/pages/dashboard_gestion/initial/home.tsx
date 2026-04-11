// --- HOOKS
import { useState } from 'react';

// -- RESOURCES
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLayerGroup,
    faChartPie,
    faChevronDown,
    faBuildingColumns,
    faCalendarDays,
    faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

// -- COMPONENTS
import { HeaderMenu, DashboardContainer, HeaderInside } from '@components/componentes.tsx';
import StatCard from './stadistic_card.tsx';
import HistorialRecargas from './history.tsx';
import Reportes from './reports.tsx';

// ─── FANCY SELECT ─────────────────────────────────────────────────────────────
interface FancySelectProps {
    id: string;
    label: string;
    icon: any;
    options: { value: string; label: string }[];
}

function FancySelect({ id, label, icon, options }: FancySelectProps) {
    return (
        <div className="flex flex-col items-start group">
            <label htmlFor={id} className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-blue-500 uppercase mb-1 translate-x-1">
                <FontAwesomeIcon icon={icon} className="text-xs" />
                {label}
            </label>
            <div className="relative">
                <select id={id} className="appearance-none bg-white text-sm text-gray-700 font-medium rounded-xl pl-4 pr-10 py-2.5 shadow-[0_2px_20px_rgba(0,0,0,0.08)] border border-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400 transition-all cursor-pointer min-w-50">
                    {options.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
                <FontAwesomeIcon icon={faChevronDown} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none" />
            </div>
        </div>
    );
}

// ─── Info Banner ──────────────────────────────────────────────────────────────
function InfoBanner() {
    return (
        <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-blue-700 text-sm mb-0">
            <FontAwesomeIcon icon={faCircleInfo} className="text-blue-400 text-base shrink-0" />
            <p>Tiene que seleccionar una institución para mostrar las métricas correspondientes.</p>
        </div>
    );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function DashboardAplication() {
    // --- Data of select options ---
    const instituciones = [
        { value: '', label: 'Selecciona una institución' },
        { value: '1', label: 'Institución 1' },
        { value: '2', label: 'Institución 2' },
    ];

    const grupos = [
        { value: '', label: 'Selecciona un grupo' },
    ];

    // -- function to toggle menu
    const [stateMenu, setStateMenu] = useState<boolean>(false);
    function toggleMenu() {
        setStateMenu(prev => !prev);
    }

    return (
        <DashboardContainer>
            <HeaderMenu indexActive={0} stateMenu={stateMenu} toggleMenu={toggleMenu} />

            <main className="w-full relative p-6 h-auto space-y-8 max-w-7xl mx-auto ">
                <HeaderInside minium={false}  />

                {/* ── Top bar ── */}
                <section className="flex items-end justify-between gap-4 flex-wrap mb-3">
                    <div>
                        <h1 className="text-3xl flex gap-1.5 items-center font-extrabold text-gray-800 leading-tight">
                            <FontAwesomeIcon icon={faCalendarDays} className="text-2xl" />
                            Estadísticas del sistema
                        </h1>
                        <p className="text-lg text-gray-400 mt-0.5">Resumen de las métricas del sistema</p>
                    </div>
                </section>

                <div className="fixed bg-white/20 backdrop-blur-md p-4 rounded-2xl bottom-5 right-5 flex items-end gap-3 flex-wrap mb-0 z-30
                
                max-sm:relative max-sm:mt-6
                ">
                    <FancySelect id="institucion" label="Institución" icon={faBuildingColumns} options={instituciones} />
                    <FancySelect id="grupos" label="Grupos existentes" icon={faLayerGroup} options={grupos} />
                </div>

                {/* ── Info banner ── */}
                <InfoBanner />

                {/* ── Stat cards ── */}
                <section className='mt-10'>
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                        <FontAwesomeIcon icon={faChartPie} className="text-blue-400" />
                        Métricas generales
                    </h2>
                    <div className="flex gap-4 flex-wrap mt-5">
                        <StatCard title="Usuarios activos" description="Total registrado" count={128} label="Usuarios en el sistema" accent="bg-blue-500" iconBg="bg-blue-400/40" showImage />
                        <StatCard title="Grupos activos" description="Grupos del período" count={34} label="Grupos en el sistema" accent="bg-indigo-500" iconBg="bg-indigo-400/40" />
                        <StatCard title="Instituciones" description="Instituciones registradas" count={8} label="Instituciones vinculadas" accent="bg-sky-500" iconBg="bg-sky-400/40" />
                    </div>
                </section>

                {/* ── Historial + Reportes ── */}
                <section className="flex gap-5 flex-wrap items-start mb-26
                max-sm:mb-0
                ">
                    <HistorialRecargas />
                    <Reportes />
                </section>
            </main>
        </DashboardContainer>
    );
}