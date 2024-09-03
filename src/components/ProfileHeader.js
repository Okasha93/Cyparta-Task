"use client";

import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faFileAlt } from '@fortawesome/free-solid-svg-icons';

const ProfileHeader = ({ userData }) => {
    return (
        <div className="flex items-center">
            <Image src={userData.image} alt="Profile Picture" width={70} height={70} className="object-cover rounded-full" />
            <div className="ml-4">
                <h3 className="text-2xl font-semibold text-gray-900">{userData.first_name} {userData.last_name}</h3>
                <p className="text-gray-700 flex items-center">
                    <FontAwesomeIcon icon={faBriefcase} className="mr-2" />
                    {userData.bio || "No bio available"}
                </p>
                <p className="text-gray-700">
                    <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
                    {userData.email}
                </p>
            </div>
        </div>
    );
};

export default ProfileHeader;
