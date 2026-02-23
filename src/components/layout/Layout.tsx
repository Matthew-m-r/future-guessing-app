import React from 'react';

interface LayoutProps {
    children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div className="bg-background-light dark:bg-background-dark font-display text-white overflow-x-hidden min-h-screen">
            <div className="relative flex min-h-screen w-full flex-col bg-mystic-gradient group/design-root">
                {children}
            </div>
        </div>
    );
};

export default Layout;
