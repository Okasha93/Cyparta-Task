"use client";

import React, { useState, useEffect } from 'react';
import Divider from '@mui/material/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faUser,
    faBriefcase,
    faFileAlt,
    faLock,
    faEdit
} from '@fortawesome/free-solid-svg-icons';
import Navbar from './Navbar';
import PersonalInfo from './PersonalInfo';
import CustomDrawer from './CustomDrawer';
import ProfileHeader from './ProfileHeader';
import TabsNavigation from './TabsNavigation';
import { useRouter } from 'next/navigation';
import EditProfileModal from './EditProfileModal';
import { fetchProfileData } from '@/services/profileService';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skeleton from '@mui/material/Skeleton';

const Profile = () => {
    const [activeTab, setActiveTab] = useState('personal');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [profileData, setProfileData] = useState(null);
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [loading, setLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        const accessToken = localStorage.getItem('accessToken');
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

        if (!isLoggedIn || !accessToken) {
            router.push('/');
            return;
        }

        const loadProfileData = async () => {
            try {
                const data = await fetchProfileData(accessToken);
                setProfileData(data);
                console.log("user data", data)
            } catch (error) {
                toast.error('Failed to load profile data.');
            } finally {
                setLoading(false);
            }
        };

        loadProfileData();
    }, [router]);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleEditClick = () => {
        setIsModalOpen(true);
    };

    const handleModalClose = () => {
        setIsModalOpen(false);
    };

    const handleSave = (updatedData) => {
        setProfileData(updatedData);
    };

    const handleDrawerToggle = () => {
        setIsDrawerOpen(!isDrawerOpen);
    };

    if (loading) {
        return (
            <div className="flex min-h-screen gap-2" style={{ backgroundColor: '#E9E9E9' }}>
                <CustomDrawer isDrawerOpen={isDrawerOpen} handleDrawerToggle={handleDrawerToggle} />
                <div className="flex-1 p-8 mt-16">
                    <Skeleton variant="rectangular" width="100%" height={300} />
                    <Skeleton variant="text" width="60%" height={40} />
                    <Skeleton variant="text" width="40%" height={40} />
                    <Skeleton variant="text" width="80%" height={40} />
                </div>
            </div>
        );
    }

    if (!profileData) {
        return toast.error('Failed to load profile data.');
    }

    const tabs = [
        { id: 'personal', label: 'Personal Information', icon: faUser },
        { id: 'professional', label: 'Professional Information', icon: faBriefcase },
        { id: 'documents', label: 'Documents', icon: faFileAlt },
        { id: 'access', label: 'Account Access', icon: faLock },
    ];

    return (
        <div className="flex min-h-screen gap-2" style={{ backgroundColor: '#E9E9E9' }}>

            <Navbar profileImage={profileData.image} onDrawerToggle={handleDrawerToggle} />

            <CustomDrawer isDrawerOpen={isDrawerOpen} handleDrawerToggle={handleDrawerToggle} />

            <div className="flex-1 p-8 mt-16">

                {/* Profile Header */}
                <div className="flex justify-between items-center mb-6 mx-5">
                    <div className="flex items-center">
                        <a href="#" className="text-gray-900">Employees</a>
                        <span className="text-gray-900 mx-2">{'>'}</span>
                        <span className="text-gray-900">Profile</span>
                    </div>
                </div>

                <div className="flex items-center justify-between mb-6 pr-9 mx-5">

                    <ProfileHeader userData={profileData} />

                    {/* Hidden on small screens */}
                    <button className="hidden sm:flex bg-black text-white py-2 px-4 rounded-lg items-center " onClick={handleEditClick}>
                        <FontAwesomeIcon icon={faEdit} className="mr-2" />
                        Edit Profile
                    </button>
                </div>

                {/* Visible on small screens */}
                <button className="sm:hidden bg-black text-white py-2 px-4 rounded-lg w-full flex justify-center items-center mb-6" onClick={handleEditClick}>
                    <FontAwesomeIcon icon={faEdit} className="mr-2" />
                    Edit Profile
                </button>

                <Divider className="mx-5 mb-6" />

                {/* Tabs */}
                <TabsNavigation
                    activeTab={activeTab}
                    handleTabClick={handleTabClick}
                    tabs={tabs}
                />

                {/* Tabs Content */}
                {activeTab === 'personal' && (
                    <PersonalInfo userData={profileData} />
                )}

                {activeTab === 'professional' && (
                    <div className="text-center py-6 text-gray-700">
                        <p>Professional Information Content Goes Here</p>
                    </div>
                )}

                {activeTab === 'documents' && (
                    <div className="text-center py-6 text-gray-700">
                        <p>Documents Content Goes Here</p>
                    </div>
                )}

                {activeTab === 'access' && (
                    <div className="text-center py-6 text-gray-700">
                        <p>Account Access Content Goes Here</p>
                    </div>
                )}

                <EditProfileModal
                    open={isModalOpen}
                    onClose={handleModalClose}
                    userData={profileData}
                    onSave={handleSave}
                />

            </div>
            <ToastContainer />
        </div>
    );
};

export default Profile;
