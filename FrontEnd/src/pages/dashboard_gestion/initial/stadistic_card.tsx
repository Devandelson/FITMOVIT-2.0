// -- resources
import user3D from '../../../assets/User 3d.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faArrowTrendUp,
} from '@fortawesome/free-solid-svg-icons';

// ─── Stat Card ────────────────────────────────────────────────────────────────
interface StatCardProps {
    title: string;
    description: string;
    count: number;
    label: string;
    accent: string;
    iconBg: string;
    showImage?: boolean;
}

export default function StatCard({ title, description, count, label, accent, iconBg, showImage }: StatCardProps) {
    const showImageContent = showImage
        ? <img src={user3D} alt="metric" className="w-20 h-20 object-contain drop-shadow-lg" />
        : (
            <span className={`w-14 h-14 rounded-2xl ${iconBg} flex items-center justify-center`}>
                <FontAwesomeIcon icon={faArrowTrendUp} className="text-2xl" />
            </span>
        );

    return (
        <div className={`relative rounded-2xl rounded-tl-none p-5 pt-4 ${accent} text-white shadow-lg min-w-60 flex-1 mt-5 max-w-70 grid items-start`}>
            <span className={`absolute w-1/2 -top-6 rounded-2xl rounded-bl-none rounded-br-none h-6 ${accent} left-0 z-10`}>
                <span className={`absolute w-15 h-full ${accent} -right-9 rounded-2xl rotate-35 top-3 z-10`}></span>
            </span>
            <div className='w-full h-full absolute top-0 left-0 overflow-hidden'>
                <span className="absolute -top-6 -right-6 w-28 h-28 rounded-full bg-white/10 pointer-events-none" />
                <span className="absolute -bottom-8 -left-8 w-36 h-36 rounded-full bg-white/10 pointer-events-none" />
            </div>
            <div className="relative z-10 grid grid-rows-[auto_1fr] h-full items-end gap-3">
                <div className="flex items-start justify-between">
                    <div>
                        <p className="text-xs font-semibold tracking-widest uppercase opacity-80">{description}</p>
                        <h3 className="text-xl font-bold mt-0.5">{title}</h3>
                    </div>
                </div>
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