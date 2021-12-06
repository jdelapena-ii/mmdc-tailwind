import Link from 'next/link';
import { Fragment } from 'react';

 function Header () {
    return (
        <Fragment>
            <nav className="flex justify-between items-center space-x-4">
                <div className="flex space-x-4">
                    <div>LOGO HERE</div>
                    <div>
                    <ul className="flex items-center space-x-2">
                        <li>Academic Programs</li>
                        <li>College Life</li>
                        <li>Tuition & Financial Aid</li>
                        <li>Admission</li>
                        <li>About MMDC</li>
                        <li>News & Events</li>
                        <li>FAQs</li>
                    </ul>
                    </div>
                </div>
                <div className="space-x-2">
                <button className="uppercase w-32 py-2 border-2 rounded-md border-red-800">Inquire</button>
                <button className="uppercase w-32 py-2 border-2 rounded-md border-red-800">Apply Now</button>
                </div>
            </nav>
        </Fragment>
        
    )
 }

 export default Header;