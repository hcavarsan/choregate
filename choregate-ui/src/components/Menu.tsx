import { Link } from "react-router-dom";
import { LayoutDashboard, SquareCheckBig, Settings } from 'lucide-react';

export const Menu = () => {
    return (
        <div className='flex-none flex-col h-screen pl-4 pr-20'>
            <Link to='/' className='text-slate-600 hover:text-slate-500 text-xl mt-4 flex'>
                <LayoutDashboard className="mt-1 mr-2 text-pink-700"/>
                Dashboard
            </Link>
            <Link to='/tasks' className='text-slate-600 hover:text-slate-500 text-xl mt-4 flex'>
                <SquareCheckBig className="mt-1 mr-2 text-pink-700"/>
                Tasks
            </Link>
            <Link to='/admin' className='text-slate-600 hover:text-slate-500 text-xl mt-4 flex'>
                <Settings className="mt-1 mr-2 text-pink-700"/>
                Admin
            </Link>
        </div>
    )
}

export const UserMenu = () => {
    return (
        <div className='text-slate-300 flex flex-col p-2'>
        <h1 className='text-2xl text-pink-700 font-bold'>Choregate</h1>
        <div className="flex">
            {/* TODO */}
        </div>
        </div>
    )
}