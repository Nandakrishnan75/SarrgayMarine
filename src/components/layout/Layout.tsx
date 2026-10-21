import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../shared/ScrollToTop';

const Layout: React.FC = () => {
    return (
        <div className="min-h-screen bg-white text-foreground font-sans selection:bg-primary/15 selection:text-navy flex flex-col">
            <ScrollToTop />
            <Navbar />

            <main className="flex-grow">
                <Outlet />
            </main>

            <Footer />
        </div>
    );
};

export default Layout;
