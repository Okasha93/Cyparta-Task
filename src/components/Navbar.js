import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

const Navbar = ({ profileImage, onDrawerToggle }) => {
    return (
        <div className="flex justify-between items-center p-4 fixed top-0 left-0 right-0 z-50" style={{ backgroundColor: '#E9E9E9' }}>
            <button onClick={onDrawerToggle} className="lg:hidden">
                <FontAwesomeIcon icon={faBars} className="text-xl text-gray-600" />
            </button>
            <div className="flex justify-end items-center space-x-4 lg:flex-1">
                <div className="relative">
                    <FontAwesomeIcon icon={faBell} className="text-gray-600 text-xl pr-2" />
                    <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1">3</span>
                </div>
                <div className="rounded-full overflow-hidden" style={{ width: '40px', height: '40px' }}>
                    <Image src={profileImage} alt="Profile Picture" width={40} height={40} className="object-cover" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
