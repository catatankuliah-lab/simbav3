import React from 'react';
import { Route, Routes } from 'react-router-dom';
import DashboardPage from '../pages/DashboardPage';
import IndexMobilPage from '../pages/mobil/indexPage';
import IndexBBMPage from '../pages/bbm/indexPage';
import IndexJenisKendaraan from '../pages/jenis/indexPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<DashboardPage />} />
            <Route path="/bbm" element={<IndexBBMPage />} />
            <Route path="/tipe" element={<IndexJenisKendaraan />} />
            <Route path="/mobil" element={<IndexMobilPage />} />
        </Routes>
    );
};

export default AppRoutes;
