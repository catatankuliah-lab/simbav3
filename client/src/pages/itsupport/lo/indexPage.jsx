import React, { useState, useEffect } from 'react';
import AddPage from './addPage';
import DetailPage from './detailPage';

const IndexLoPage = () => {
    const [currentView, setCurrentView] = useState('index');
    const [detailId, setDetailId] = useState(null);
    const [LO, setLO] = useState([]);

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

    const fetchLO = async () => {
        try {
            const response = await fetch('http://localhost:5050/api/lo/all');
            const data = await response.json();
            console.log(data);
            setLO(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchLO();
    }, []);

    return (
        <>
            {currentView === 'index' && (
                <div className="row">
                    <div className="col-lg-12">
                        <div className="mb-3">
                            <div className="divider text-start">
                                <div className="divider-text">
                                    <span className="menu-header-text fs-6 fw-bold">Data Loading Order</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-12">
                        <div className="">
                            Klik <button className="fw-bold btn btn-link p-0" onClick={handleAddMobilClick}>disini</button> untuk menambahkan data LO.
                        </div>
                    </div>
                    <div className="col-md-12 mb-4 mb-md-0">
                        <div className="accordion mt-3" id="accordion_wo">
                            {LO.map(lo => (
                                <div key={lo.id_lo} className="card accordion-item">
                                    <h2 className="accordion-header px-2" id={`heading${lo.id_lo}`}>
                                        <button type="button" className="accordion-button accordion-button-primary collapsed text-primary" data-bs-toggle="collapse" data-bs-target={`#accordion${lo.id_lo}`} aria-expanded="false" aria-controls={`accordion${lo.id_lo}`}>
                                            {lo.tanggal_lo.slice(0,10)} | WO : {lo.item_wo.wo.nomor_wo} | LO : {lo.nomor_lo}
                                        </button>
                                    </h2>
                                    <div id={`accordion${lo.id_lo}`} className="accordion-collapse collapse" data-bs-parent="#accordion_wo">
                                        <div className="accordion-body" style={{ marginTop: "-15px" }} >
                                            <div className="px-2">
                                                <hr />
                                                <div className="col-md-12 col-sm-12 mt-0 mt-md-3">
                                                    <p style={{ marginBottom: "2px" }}>
                                                        {lo.tanggal_lo.slice(0,10)}
                                                    </p>
                                                    <p style={{ marginBottom: "2px" }}>
                                                        GUDANG : {lo.checker_gudang.gudang.nama_gudang}
                                                    </p>
                                                    <p>
                                                        {lo.tonase_lo} KG
                                                    </p>
                                                    <p className='' >
                                                        <button className="btn btn-link p-0" onClick={() => handleEditDataClick(lo.id_lo)}>
                                                            <i className="tf-icons bx bx-edit me-2"></i> DETAIL
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
            {currentView === 'add' && <AddPage currentView={currentView} handleBackClick={handleBackClick} refreshData={fetchLO} />}
            {currentView === 'detail' && detailId && <DetailPage id={detailId} handleBackClick={handleBackClick} />}
        </>
    );
};

export default IndexLoPage;
