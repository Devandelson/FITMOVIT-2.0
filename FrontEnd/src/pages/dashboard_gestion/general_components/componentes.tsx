// -- Resources
import { motion } from 'framer-motion';
import userLogo from '@/assets/avatar.png';

// --- Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faBarsStaggered, faXmark } from '@fortawesome/free-solid-svg-icons';

// ======== Container all dashboard ========
export function DashboardContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className='grid grid-cols-[260px_1fr] w-full min-h-screen h-auto
        max-md:grid-cols-1 bg-[#F8FAFC]
        '>
            {children}
        </div>
    )
};

// ================= HEADER (MENU) =================
import logo from '@/assets/logo.png'

export function HeaderMenu({ indexActive = 0, stateMenu = true, toggleMenu }: { indexActive?: number; stateMenu?: boolean; toggleMenu: () => void }) {
    const infoItemsHeader = [
        { title: 'DASHBOARD', icon: 'fa-tachograph-digital', active: false },
        { title: 'Gestión de usuarios', icon: 'fa-tachograph-digital', active: false },
        { title: 'Seguimiento de solicitudes', icon: 'fa-tachograph-digital', active: false },
        { title: 'Reportes y estadísticas', icon: 'fa-tachograph-digital', active: false },
        { title: 'Configuración del sistema', icon: 'fa-tachograph-digital', active: false },
    ];

    infoItemsHeader[indexActive ?? 0].active = true;

    return (
        <>
            {/* (MENU [DESKTOP]) */}
            <motion.header className='overflow-y-auto bg-[#0069F4] p-5 text-white
            overflow-x-hidden max-md:hidden'
            >
                <section className="flex items-center gap-3 mb-10">
                    <img src={logo} alt="FITMOVIT Logo" className='w-16 aspect-square object-cover' />
                    <h2 className="text-2xl font-bold">Sistema de FITMOVIT</h2>
                </section>

                <ul className='w-full flex items-start gap-2 justify-center flex-col'>
                    {infoItemsHeader.map((item, index) => (
                        <ItemHeader key={index} title={item.title} icon={item.icon} active={item.active} />
                    ))}
                </ul>
            </motion.header>

            {/* (MENU [RESPONSIVE]) */}
            <motion.header className='overflow-y-auto bg-[#0069F4] w-full max-w-0 p-0 
                text-white overflow-x-hidden hidden max-md:block fixed z-50 top-0 left-0 h-screen'
                initial={{ maxWidth: 0, opacity: 0, padding: 0 }}
                animate={{ maxWidth: !stateMenu ? 0 : '260px', opacity: 1, padding: !stateMenu ? 0 : '20px' }}
                transition={{ duration: 0.3 }}
            >
                <section className="flex items-center gap-3 mb-10">
                    <img src={logo} alt="FITMOVIT Logo" className='w-16 aspect-square object-cover' />
                    <h2 className="text-2xl font-bold">Sistema de FITMOVIT</h2>
                </section>

                <ul className='w-full flex items-start gap-2 justify-center flex-col'>
                    {infoItemsHeader.map((item, index) => (
                        <ItemHeader key={index + '_2'} title={item.title} icon={item.icon} active={item.active} />
                    ))}
                </ul>
            </motion.header>

            {/* (BUTTON TOGGLE MENU [RESPONSIVE]) */}
            <span className='items-center gap-1 p-2 border border-white rounded-lg text-white   hidden max-md:flex
                    fixed bottom-2.5 left-2.5 z-60
                    font-light px-2.5
                    text-lg bg-blue-900/20 backdrop-blur-md
                    hover:scale-105 duration-75 cursor-pointer active:scale-95
                '
                onClick={toggleMenu ?? undefined}
            >
                <FontAwesomeIcon icon={stateMenu ? faXmark : faBarsStaggered} />
            </span>
        </>
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
export function HeaderInside({ minium = true }: { minium?: boolean }) {
    const version_complete = {
        'welcome': (<h2 className='text-lg font-bold'>
                ¡Hola, <span className='text-green-500'>Andelson</span>!{' '}
                <span className='text-gray-400 font-normal'>Bienvenido a</span>{' '}
                <span className='text-blue-500'>FITMOVIT</span>
            </h2>),
        'classMenuRow': 'flex-row! max-sm:flex-row-reverse',
        'classMenuName': 'text-right!'
    };

    return (
        <header className='w-full flex items-center justify-between gap-2 flex-wrap pb-4 border-b border-gray-100 mb-4
        max-sm:flex-col max-sm:items-center
        '>
            {minium == true ? '' : version_complete['welcome']}

            <section className={`flex items-center gap-3 flex-row-reverse 
                ${minium == true ? '' : version_complete['classMenuRow']}
                `}>
                <div className={`text-left leading-tight max-sm:text-start
                    ${minium == true ? '' : version_complete['classMenuName']}
                    `}>
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