"use client";
import { IPreferences, IProfile, IUser } from "@/lib/validations";
import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface AppContextProps {
    step: number;
    user: IUser;
    data: any;
    profile: IProfile;
    preference: IPreferences;
    setStep: React.Dispatch<React.SetStateAction<number>>;
    setUser: React.Dispatch<React.SetStateAction<IUser>>;
    setProfile: React.Dispatch<React.SetStateAction<IProfile>>;
    setPreference: React.Dispatch<React.SetStateAction<IPreferences>>;
    setData: React.Dispatch<React.SetStateAction<any>>;
    resetForm: () => void;
}

export const AppContext = createContext<AppContextProps | undefined>(undefined);
// AppWrapper component to provide context value
export function AppWrapper({ children }: { children: ReactNode }) {
    const [step, setStep] = useState<number>(0);
    const [user, setUser] = useState<IUser>({ name: "", email: "", password: "" });
    const [profile, setProfile] = useState<IProfile>({ bio: "", profile_picture: '' });
    const [preference, setPreference] = useState<IPreferences>({ notification: true, privacy: false });
    const [data, setData]= useState<any>(null)
    const resetForm = () => {
        setStep(0);
        setData(null);
        setUser({ name: "", email: "", password: "" });
        setProfile({ bio: "", profile_picture: '' });
        setPreference({ notification: true, privacy: false });
    };

    // Memoize the context value
    const contextValue = useMemo(
        () => ({
            step,
            user,
            profile,
            preference,
            setData,
            data,
            setStep,
            setUser,
            setProfile,
            setPreference,
            resetForm,
        }),
        [step, user, profile, preference]
    );

    return <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>;
}

// Custom hook to use the AppContext
export function useAppContext() {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error("useAppContext must be used within an AppWrapper");
    }
    return context;
}