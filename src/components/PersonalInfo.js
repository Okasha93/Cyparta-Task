import Divider from '@mui/material/Divider';

const PersonalInfo = ({ userData }) => {
    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-6 text-sm" style={{ backgroundColor: '#E9E9E9' }}>
                <div>
                    <label className="block text-gray-400">First Name</label>
                    <p className="text-gray-600">{userData.first_name}</p>
                    <Divider className="pt-2" />
                </div>
                <div>
                    <label className="block text-gray-400">Last Name</label>
                    <p className="text-gray-600">{userData.last_name}</p>
                    <Divider className="pt-2" />
                </div>
                <div>
                    <label className="block text-gray-400">Mobile Number</label>
                    <p className="text-gray-600">{userData.phone}</p>
                    <Divider className="pt-2" />
                </div>
                <div>
                    <label className="block text-gray-400">Email Address</label>
                    <p className="text-gray-600">{userData.email}</p>
                    <Divider className="pt-2" />
                </div>
                <div>
                    <label className="block text-gray-400">Date of Birth</label>
                    <p className="text-gray-600">{new Date(userData.date_joined).toLocaleDateString()}</p>
                    <Divider className="pt-2" />
                </div>
                <div>
                    <label className="block text-gray-400">Bio</label>
                    <p className="text-gray-600">{userData.bio}</p>
                    <Divider className="pt-2" />
                </div>
            </div>
        </div>
    );
};

export default PersonalInfo;
