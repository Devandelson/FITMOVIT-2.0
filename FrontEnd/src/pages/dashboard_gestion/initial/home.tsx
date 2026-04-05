import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faLayerGroup,
    faChartPie,
    faChevronDown,
    faBuildingColumns,
    faArrowTrendUp,
    faCalendarDays,
    faCircleInfo,
} from '@fortawesome/free-solid-svg-icons';

import user3D from '../../../assets/User 3d.png';
import { HeaderMenu, DashboardContainer, HeaderInside } from '../componentes.tsx';

// ─── Stat Card ────────────────────────────────────────────────────────────────
interface StatCardProps {
    title: string;
    description: string;
    count: number;
    label: string;
    accent: string;         // Tailwind bg class  e.g. "bg-blue-500"
    iconBg: string;         // Tailwind bg class  e.g. "bg-blue-400/40"
    showImage?: boolean;
}

function StatCard({ title, description, count, label, accent, iconBg, showImage }: StatCardProps) {

    // --- Icon of the card
    const showImageContent = showImage ? (
        <img src={user3D} alt="metric"
            className="w-20 h-20 object-contain drop-shadow-lg" />) :
        (<span className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center`}>
            <FontAwesomeIcon icon={faArrowTrendUp} className="text-2xl" />
        </span>
        );

    return (
        <div className={`relative rounded-2xl rounded-tl-none p-5 pt-4 ${accent} text-white shadow-lg min-w-60 flex-1 mt-5 max-w-70 grid items-start`}>
            {/* Top */}
            <span className={`absolute w-1/2 -top-6 rounded-2xl rounded-bl-none rounded-br-none h-6 ${accent} left-0 z-10`}>
                <span className={`absolute w-15 h-full ${accent} -right-9 rounded-2xl rotate-35 top-3 z-10`}></span>
            </span>

            {/* decorative circle */}
            <div className='w-full h-full absolute top-0 left-0 overflow-hidden'>
                <span className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10 pointer-events-none" />
                <span className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/10 pointer-events-none" />
            </div>


            <div className="relative z-10 grid grid-rows-[auto_1fr] h-full items-end gap-3">
                {/* header */}
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase opacity-80">{description}</p>
                        <h3 className="text-xl font-bold mt-0.5">{title}</h3>
                    </div>
                </div>

                {/* count + image row */}
                <div className="flex items-end justify-between mt-1">
                    <div>
                        <p className="text-4xl font-extrabold leading-none">{count}</p>
                        <p className="text-sm opacity-80 mt-1">{label}</p>
                    </div>
                    {showImageContent}
                </div>
            </div>
        </div>
    );
}


// ─── Fancy Select ─────────────────────────────────────────────────────────────
interface FancySelectProps {
    id: string;
    label: string;
    icon: any;
    options: { value: string; label: string }[];
}

function FancySelect({ id, label, icon, options }: FancySelectProps) {
    return (
        <div className="flex flex-col items-start group">
            <label
                htmlFor={id}
                className="flex items-center gap-1.5 text-xs font-bold tracking-wide text-blue-500 uppercase mb-1 translate-x-1"
            >
                <FontAwesomeIcon icon={icon} className="text-xs" />
                {label}
            </label>
            <div className="relative">
                <select
                    id={id}
                    className="
                        appearance-none bg-white text-sm text-gray-700 font-medium
                        rounded-xl pl-4 pr-10 py-2.5
                        shadow-[0_2px_20px_rgba(0,0,0,0.08)]
                        border border-gray-100
                        focus:outline-none focus:ring-2 focus:ring-blue-400/40 focus:border-blue-400
                        transition-all cursor-pointer min-w-50
                    "
                >
                    {options.map(opt => (
                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                </select>
                <FontAwesomeIcon
                    icon={faChevronDown}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 text-xs pointer-events-none"
                />
            </div>
        </div>
    );
}

// ─── Info Banner ──────────────────────────────────────────────────────────────
function InfoBanner() {
    return (
        <div className="flex items-center gap-3 bg-blue-50 border border-blue-200 rounded-xl px-4 py-3 text-blue-700 text-sm mb-0">
            <FontAwesomeIcon icon={faCircleInfo} className="text-blue-400 text-base shrink-0" />
            <p>
                Tiene que seleccionar una institución para mostrar las métricas correspondientes.
            </p>
        </div>
    );
}

// ─── Main Dashboard ───────────────────────────────────────────────────────────
export default function DashboardAplication() {

    const instituciones = [
        { value: '', label: 'Selecciona una institución' },
        { value: '1', label: 'Institución 1' },
        { value: '2', label: 'Institución 2' },
    ];

    const grupos = [
        { value: '', label: 'Selecciona un grupo' },
    ];

    return (
        <DashboardContainer>
            <HeaderMenu indexActive={0} />

            <main className="w-full relative p-6 h-auto space-y-8 max-w-7xl mx-auto">
                <HeaderInside />

                <div className="absolute bottom-5 right-5 flex items-end gap-3 flex-wrap mb-0">
                    <FancySelect
                        id="institucion"
                        label="Institución"
                        icon={faBuildingColumns}
                        options={instituciones}
                    />
                    <FancySelect
                        id="grupos"
                        label="Grupos existentes"
                        icon={faLayerGroup}
                        options={grupos}
                    />
                </div>

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

                {/* ── Info banner ── */}
                <InfoBanner />

                {/* ── Stat cards ── */}
                <section className='mt-10'>
                    <h2 className="text-sm font-bold text-gray-400 uppercase tracking-widest flex items-center gap-2 mb-4">
                        <FontAwesomeIcon icon={faChartPie} className="text-blue-400" />
                        Métricas generales
                    </h2>
                    <div className="flex gap-4 flex-wrap mt-5">
                        <StatCard
                            title="Usuarios activos"
                            description="Total registrado"
                            count={128}
                            label="Usuarios en el sistema"
                            accent="bg-blue-500"
                            iconBg="bg-blue-400/40"
                            showImage
                        />
                        <StatCard
                            title="Grupos activos"
                            description="Grupos del período"
                            count={34}
                            label="Grupos en el sistema"
                            accent="bg-indigo-500"
                            iconBg="bg-indigo-400/40"
                        />
                        <StatCard
                            title="Instituciones"
                            description="Instituciones registradas"
                            count={8}
                            label="Instituciones vinculadas"
                            accent="bg-sky-500"
                            iconBg="bg-sky-400/40"
                        />
                    </div>
                </section>
            </main>
        </DashboardContainer>
    );
}