"use client"

import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, Button, TextField } from '@mui/material';
import { styled } from '@mui/system';
import { toast } from 'react-toastify';
import { updateUserProfile } from '@/services/updateService';

const StyledDialogContent = styled(DialogContent)({
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px',

    '@media (max-width: 600px)': {
        gridTemplateColumns: '1fr',
    },
});

const StyledButton = styled(Button)({
    padding: '10px 20px',
    fontSize: '16px',
    textTransform: 'none',
});

const CancelButton = styled(StyledButton)({
    backgroundColor: 'red',
    width: 100,
    color: 'white',

    '&:hover': {
        backgroundColor: 'darkred',
    },
});

const SaveButton = styled(StyledButton)({
    backgroundColor: 'black',
    width: 100,
    color: 'white',

    '&:hover': {
        backgroundColor: 'gray',
    },
});

const EditProfileModal = ({ open, onClose, userData, onSave }) => {
    const [formData, setFormData] = useState({ ...userData });
    const [isSaving, setIsSaving] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSave = async () => {
        setIsSaving(true);

        const changes = Object.keys(formData).reduce((acc, key) => {
            if (formData[key] !== userData[key]) {
                acc[key] = formData[key];
            }
            return acc;
        }, {});
    
        if (Object.keys(changes).length === 0) {
            toast.info('No changes to save.');
            setIsSaving(false);
            return;
        }
    
        try {
            const token = localStorage.getItem('access_token');
            const updatedData = await updateUserProfile(changes, token);
            onSave(updatedData);
            toast.success('Profile updated successfully');
            onClose();
        } catch (error) {
            toast.error('Failed to update profile. Please try again.');
        } finally {
            setIsSaving(false);
        }
    };
    

    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="md" sx={{
            '& .MuiPaper-root': {
                backgroundColor: '#E9E9E9',
            }
        }}>
            <DialogTitle>Edit Profile</DialogTitle>
            <StyledDialogContent>
                <TextField
                    margin="dense"
                    label="First Name"
                    name="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Last Name"
                    name="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Email Address"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Date of Birth"
                    name="date_joined"
                    value={formData.date_joined}
                    onChange={handleChange}
                    fullWidth
                />
                <TextField
                    margin="dense"
                    label="Bio"
                    name="bio"
                    value={formData.bio}
                    onChange={handleChange}
                    fullWidth
                />
            </StyledDialogContent>
            <DialogActions>
                <CancelButton onClick={onClose} disabled={isSaving}>
                    Cancel
                </CancelButton>
                <SaveButton onClick={handleSave} disabled={isSaving}>
                    {isSaving ? 'Saving...' : 'Save'}
                </SaveButton>
            </DialogActions>
        </Dialog>
    );
};

export default EditProfileModal;
