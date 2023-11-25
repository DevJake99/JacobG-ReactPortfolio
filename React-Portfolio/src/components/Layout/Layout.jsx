import './index.scss';
import Navbar from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';

function Layout() {
    return (
        <div className='App'>
            <Navbar></Navbar>
            <div className='page'>
                <span className='tags top-tags html' >
                    &lt;html&gt;
                    <br />
                    <span className=' body'>&lt;body&gt;</span>
                </span>

                <Outlet />

                <span className='tags bottom-tags'>
                    &lt;/body&gt;
                    <br />
                    <span className='html'>&lt;/html&gt;</span>
                </span>
            </div>
        </div>
    )
}

export default Layout;