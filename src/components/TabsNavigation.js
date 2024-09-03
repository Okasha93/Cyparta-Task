import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Divider } from '@mui/material';

const TabsNavigation = ({ activeTab, handleTabClick, tabs }) => {
    return (
        <div className="mb-3 border-b">
            <ul className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-8">
                {tabs.map((tab) => (
                    <li
                        key={tab.id}
                        className={`pb-2 border-b-4 ${activeTab === tab.id ? 'border-red-600 text-red-600' : 'border-transparent text-gray-600 hover:text-gray-800 cursor-pointer'}`}
                        onClick={() => handleTabClick(tab.id)}
                    >
                        <FontAwesomeIcon icon={tab.icon} className="mr-2" />
                        {tab.label}
                    </li>
                ))}
            </ul>
            <Divider className="mx-5 mb-6" />
        </div>
    );
};

export default TabsNavigation;
