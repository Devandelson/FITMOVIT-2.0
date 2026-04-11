import type { ReactNode } from "react"

interface optionSelect {
    value: string,
    content: string
}

interface customCellType {
    typeElement: 'input' | 'select' | 'text',
    typeInput?: string
    name: string,
    holder: string,
    idInput: string,
    title: string,
    options?: optionSelect[]
}

export default function CustomCell({ typeElement, typeInput, name, holder, idInput, title, options }: customCellType) {
    const SimilarStyle = 'p-2 rounded-sm bg-gray-100 text-sm outline-none hover:inset-shadow-sm duration-75 w-full';

    const input = (<input type={typeInput} placeholder={holder} className={SimilarStyle} id={idInput} name={name} />);

    const select = (
        <select name={name} id={idInput} className={SimilarStyle}>
            {options?.map((item, index) => (
                <option value={item['value']} key={index}>{item['content']}</option>
            ))}
        </select>
    )

    const text = (<textarea name={name} id={idInput} className={SimilarStyle}></textarea>);

    const titleElement = (
        <label htmlFor={idInput}>{title}</label>
    )

    return (
        <ContainerCell>
            {titleElement}
            {typeElement == 'input' ? input : <></>}
            {typeElement == 'select' ? select : <></>}
            {typeElement == 'text' ? text : <></>}
        </ContainerCell>
    )
}

function ContainerCell({ children, maxW = '75' }: { children: ReactNode, maxW?: string }) {
    return (
        <span className={`normalize flex flex-col items-start gap-1 w-full relative max-w-${maxW}`}>
            {children}
        </span>
    )
}