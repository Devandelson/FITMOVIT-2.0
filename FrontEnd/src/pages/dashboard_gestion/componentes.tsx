import userLogo from '../../assets/avatar.png';

// ======== Container all dashboard ========
export function DashboardContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className='grid grid-cols-[auto_1fr] w-full min-h-screen h-auto'>
            {children}
        </div>
    )
};

// ================= HEADER (MENU) =================
import logo from '../../assets/logo.png'

export function HeaderMenu({ indexActive = 0 }: { indexActive?: number }) {
    const infoItemsHeader = [
        { title: 'DASHBOARD', icon: 'fa-tachograph-digital', active: false },
        { title: 'Gestión de usuarios', icon: 'fa-tachograph-digital', active: false },
        { title: 'Seguimiento de solicitudes', icon: 'fa-tachograph-digital', active: false },
        { title: 'Reportes y estadísticas', icon: 'fa-tachograph-digital', active: false },
        { title: 'Configuración del sistema', icon: 'fa-tachograph-digital', active: false },
    ];

    infoItemsHeader[indexActive ?? 0].active = true;

    return (
        <header className='overflow-y-auto bg-[#0069F4] w-full max-w-65 p-5 text-white'>
            <section className="flex items-center gap-3 mb-10">
                <img src={logo} alt="FITMOVIT Logo" className='w-16 aspect-square object-cover' />
                <h2 className="text-2xl font-bold">Sistema de FITMOVIT</h2>
            </section>

            <ul className='w-full flex items-start gap-2 justify-center flex-col'>
                {infoItemsHeader.map((item, index) => (
                    <ItemHeader key={index} title={item.title} icon={item.icon} active={item.active} />
                ))}
            </ul>
        </header>
    )
}

interface ItemHeaderProps {
    title: string;
    icon: string;
    active: boolean;
}

function ItemHeader({ title, icon, active }: ItemHeaderProps) {
    return (
        <li className='p-3 flex items-center gap-2 w-full border-r-2
        cursor-pointer duration-100
        hover:bg-[#0050C8]! hover:border-white! hover:scale-105
        
        ' style={
                {
                    borderColor: active ? 'white' : 'transparent',
                    backgroundColor: active ? 'rgba(0, 0, 0, 0.1)' : 'transparent'
                }
            }>
            <i className={`fa-solid ${icon}`}></i>
            {title}
        </li>
    )
};

// ================= HEADER (Inside of main) =================
// --- Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

export function HeaderInside() {
    return (
        <header className='w-full flex items-center justify-between gap-2 flex-wrap pb-4 border-b border-gray-100 mb-4'>

            <h2 className='text-lg font-bold'>
                ¡Hola, <span className='text-green-500'>Andelson</span>!{' '}
                <span className='text-gray-400 font-normal'>Bienvenido a</span>{' '}
                <span className='text-blue-500'>FITMOVIT</span>
            </h2>

            <section className='flex items-center gap-3'>
                <div className='text-right leading-tight'>
                    <p className='text-sm font-semibold text-gray-700'>Andelson Gonzalez</p>
                    <p className='text-xs font-bold text-blue-500 uppercase tracking-wide'>Administrador</p>
                </div>

                <img
                    src={userLogo}
                    alt="Avatar del usuario"
                    className='w-10 h-10 object-cover rounded-xl ring-2 ring-blue-100'
                />

                <FontAwesomeIcon icon={faChevronDown} className='text-xs text-gray-400' />
            </section>

        </header>
    );
}