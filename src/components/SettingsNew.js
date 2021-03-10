import React from 'react'
import { useAuth } from './AuthComponents/AuthContext'
import SettingsForm from './SettingsForm'
import './SettingsForm.css'

function Settings() {

    const { user } = useAuth();
    
    return (
        <div className="Settings">
            <h2>Settings</h2>
            <div>
                {user.email}
            </div>
            <SettingsForm />
        </div>
    )
}

export default Settings;