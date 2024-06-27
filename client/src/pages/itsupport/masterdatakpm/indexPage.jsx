import React, { useState, useEffect } from 'react';
import AddPage from './addPage';
import DetailPage from './detailPage';

const IndexMasterDataKPMPage = () => {
    const [currentView, setCurrentView] = useState('index');
    const [detailId, setDetailId] = useState(null);
    const [MasterDataKPM, setMasterDataKPM] = useState([]);

    const handleAddMobilClick = () => {
        setCurrentView('add');
    };

    const handleEditDataClick = (id) => {
        setDetailId(id);
        setCurrentView('detail');
    };

    const handleBackClick = () => {
        setCurrentView('index');
    };

    const fetchMasterDataKPM = async () => {
        try {
            const response = await fetch('http://localhost:5050/api/masterdatakpm/all');
            const data = await response.json();
            console.log(data);
            setMasterDataKPM(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchMasterDataKPM();
    }, []);

    return (
        <>
            {currentView === 'index' && (
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-3">
                            <div className="divider text-start">
                                <div className="divider-text">
                                    <span className="menu-header-text fs-6 fw-bold">Master Data KPM</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="">
                            Klik <button className="fw-bold btn btn-link p-0" onClick={handleAddMobilClick}>disini</button> untuk menambahkan Master Data KPM.
                        </div>
                    </div>
                    <div className="col-md-12 mb-4 mb-md-0">
                        <div className="accordion mt-3" id="accordion_master_data_kpm">
                            {MasterDataKPM.map(masterdatakpm => (
                                <div key={masterdatakpm.id_master_data_kpm} className="card accordion-item">
                                    <h2 className="accordion-header px-2" id={`heading${masterdatakpm.id_master_data_kpm}`}>
                                        <button type="button" className="accordion-button accordion-button-primary collapsed text-primary" data-bs-toggle="collapse" data-bs-target={`#accordion${masterdatakpm.id_master_data_kpm}`} aria-expanded="false" aria-controls={`accordion${masterdatakpm.id_master_data_kpm}`}>
                                            {masterdatakpm.nama_kpm
                                            }
                                        </button>
                                    </h2>
                                    <div id={`accordion${masterdatakpm.id_master_data_kpm}`} className="accordion-collapse collapse" data-bs-parent="#accordion_master_data_kpm">
                                        <div className="accordion-body" style={{ marginTop: "-15px" }} >
                                            <div className="px-2">
                                                <hr />
                                                <div className="col-md-12 col-sm-12 mt-0 mt-md-3">
                                                    <p style={{ marginBottom: "2px" }}>
                                                        {masterdatakpm.desa_kelurahan.kecamatan.kabupaten_kota.provinsi.nama_provinsi}
                                                    </p>
                                                    <p style={{ marginBottom: "2px" }}>
                                                        {masterdatakpm.desa_kelurahan.kecamatan.kabupaten_kota.nama_kabupaten_kota}
                                                    </p>
                                                    <p style={{ marginBottom: "2px" }}>
                                                        KECAMATAN {masterdatakpm.desa_kelurahan.kecamatan.nama_kecamatan}
                                                    </p>
                                                    <p style={{ marginBottom: "2px" }}>
                                                        {masterdatakpm.desa_kelurahan.nama_desa_kelurahan}
                                                    </p>
                                                    <p className='d-none' >
                                                        <button className="btn btn-link p-0" onClick={() => handleEditDataClick(masterdatakpm.id_master_data_kpm)}>
                                                            <i className="tf-icons bx bx-edit me-2"></i> EDIT DATA
                                                        </button>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
            {currentView === 'add' && <AddPage currentView={currentView} handleBackClick={handleBackClick} refreshData={fetchMasterDataKPM} />}
            {currentView === 'detail' && detailId && <DetailPage id={detailId} />}
        </>
    );
};

export default IndexMasterDataKPMPage;