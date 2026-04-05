import { useNavigate } from 'react-router';

// ─── Types ────────────────────────────────────────────────────────────────────
type ButtonVariant = "filled" | "ghost";


// ─── TextInput ────────────────────────────────────────────────────────────────
export interface TextInputProps {
    id: string;
    label: string;
    placeholder?: string;
    type?: string;
    required?: boolean;
    optional?: boolean;
}

export function TextInput({
    id,
    label,
    placeholder,
    type = "text",
    required,
    optional,
}: TextInputProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <label
                htmlFor={id}
                className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
            >
                {label}
                {optional && (
                    <span className="ml-1 font-normal normal-case text-gray-300">
                        (Opcional)
                    </span>
                )}
            </label>
            <input
                id={id}
                name={id}
                type={type}
                placeholder={placeholder}
                required={required}
                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 placeholder:text-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-all duration-200"
            />
        </div>
    );
}

// ─── SelectInput ──────────────────────────────────────────────────────────────
interface SelectOption {
    value: string;
    label: string;
}

export interface SelectInputProps {
    id: string;
    label: string;
    options: SelectOption[];
    required?: boolean;
    optional?: boolean;
}

export function SelectInput({
    id,
    label,
    options,
    required,
    optional,
}: SelectInputProps) {
    return (
        <div className="flex flex-col gap-1.5">
            <label
                htmlFor={id}
                className="text-[10px] font-bold uppercase tracking-widest text-gray-400"
            >
                {label}
                {optional && (
                    <span className="ml-1 font-normal normal-case text-gray-300">
                        (Opcional)
                    </span>
                )}
            </label>
            <div className="relative">
                <select
                    id={id}
                    name={id}
                    required={required}
                    className="w-full appearance-none px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-800 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500 transition-all duration-200 cursor-pointer"
                >
                    {options.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                            {opt.label}
                        </option>
                    ))}
                </select>
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                    <i className="fa-solid fa-chevron-down text-xs" />
                </span>
            </div>
        </div>
    );
}

// ─── Button ───────────────────────────────────────────────────────────────────
export interface ButtonProps {
    children: React.ReactNode;
    variant?: ButtonVariant;
    type?: "submit" | "button" | "reset";
    icon?: string; // FA icon classes e.g. "fa-solid fa-arrow-right"
    href?: string;
}

export function Button({
    children,
    variant = "filled",
    type = "button",
    icon,
    href
}: ButtonProps) {
    const base =
        "w-full py-3 rounded-xl font-semibold text-sm flex items-center justify-center gap-2 transition-all duration-200 active:scale-[0.98] cursor-pointer";

    const navigate = useNavigate();

    const styles: Record<ButtonVariant, string> = {
        filled:
            "bg-teal-600 hover:bg-teal-700 text-white shadow-md shadow-teal-600/25",
        ghost:
            "bg-transparent text-gray-400 hover:text-gray-600 hover:bg-gray-50",
    };

    function handleClick(address: string) {
        navigate(address);
    }

    return (
        <button
            type={type}
            className={`${base} ${styles[variant]}`}
            onClick={() => href && handleClick(href)}
        >
            {children}
            {icon && <i className={icon} />}
        </button>
    );
}