// -- COMPONENTS
import { HeaderMenu, DashboardContainer, HeaderInside } from '@components/componentes.tsx';
import CustomCell from '@components/Custom_cell.tsx';
import Table from './table.tsx';

// -- HOOKS
import { useState } from 'react';

export default function UserManage() {
    // -- function to toggle menu
    const [stateMenu, setStateMenu] = useState<boolean>(false);
    function toggleMenu() {
        setStateMenu(prev => !prev);
    }

    return (
        <DashboardContainer>
            <HeaderMenu indexActive={1} stateMenu={stateMenu} toggleMenu={toggleMenu} />

            <main className="overflow-hidden w-full relative p-6 h-auto space-y-8 max-w-7xl mx-auto ">
                <HeaderInside />

                <h2 className='font-bold text-2xl m-0 mb-3'>Configuración de Perfil Nuevo</h2>
                <section className='w-full bg-white p-4 rounded-lg'>
                    <h3 className='text-lg text-gray-700'>Añadir usuario:</h3>
                    <hr className='border-0 w-full h-px bg-gray-200 mb-5' />

                    <div className='flex flex-wrap gap-2.5'>
                        <CustomCell title='Nombre' holder='Escribe un nombre' typeElement='input' idInput='idNombre' typeInput='text' name='name'></CustomCell>

                        <CustomCell title='Nombre' holder='Escribe un nombre' typeElement='input' idInput='idNombre' typeInput='text' name='name'></CustomCell>

                        <CustomCell title='Nombre' holder='Escribe un nombre' typeElement='input' idInput='idNombre' typeInput='text' name='name'></CustomCell>
                    </div>
                </section>

                <Table></Table>
            </main>
        </DashboardContainer>
    )
}

