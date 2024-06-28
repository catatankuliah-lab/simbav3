import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const DetailPage = ({ handleBackClick, id }) => {
    const [LO, setLO] = useState(null);

    let nomor = 1;

    const fetchLO = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:5050/api/lo/details/${id}`);
            const data = await response.json();
            console.log(data);
            setLO(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [id]);

    useEffect(() => {
        fetchLO();
    }, [fetchLO]);

    if (!LO) {
        return <div>Loading...</div>;
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="mb-3">
                    <div className="divider text-start">
                        <div className="divider-text">
                            <span className="menu-header-text fs-6 fw-bold">Detail {LO.nomor_lo}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div>
                    Klik <button className="fw-bold btn btn-link p-0 fw-bold" onClick={handleBackClick}>disini</button> untuk kembali ke menu utama Loading Order.
                </div>
            </div>
            <div className="col-md-12 mb-4 mb-md-0 mt-4">
                <div className="row">
                    <div className="col-md-4 col-sm-12 mb-3 d-none">
                        <label htmlFor="id_lo" className="form-label">ID Loading Order</label>
                        <input className="form-control" type="text" id="id_lo" name="id_lo" value={LO.id_lo} readOnly />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <label htmlFor="nomor_wo" className="form-label">Nomor Loading Order</label>
                        <input className="form-control" type="text" id="nomor_lo" name="nomor_lo" value={LO.nomor_lo} readOnly />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <label htmlFor="status_wo" className="form-label">Status Loading Order</label>
                        <input className="form-control" type="text" id="status_lo" name="status_lo" value={LO.status_lo} readOnly />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <label htmlFor="total_tonase" className="form-label">Total Tonase</label>
                        <input className="form-control" type="text" id="tonase_lo" name="tonase_lo" value={LO.tonase_lo} readOnly />
                    </div>
                    {/* <div className="col-md-4 col-sm-12 mb-3">
                        <label htmlFor="tonase_tersalurkan" className="form-label">Gudang</label>
                        <input className="form-control" type="text" id="tonase_tersalurkan" name="tonase_tersalurkan" value={LO.checker_gudang.gudang.nama_gudang} readOnly />
                    </div> */}
                    {/* <div className="col-md-4 col-sm-12 mb-3">
                        <label htmlFor="nama_checker" className="form-label">Nama Checker</label>
                        <input className="form-control" type="text" id="nama_checker" name="nama_checker" value={LO.gudang.kantor_cabang.nama_kantor_cabang} readOnly />
                    </div> */}
                    <div className="col-md-4 col-sm-12 mb-3">
                        <label htmlFor="nama_desa_kelurahan" className="form-label">Tanggal Loading Order</label>
                        <input className="form-control" type="text" id="nama_desa_kelurahan" name="nama_desa_kelurahan" value={LO.tanggal_lo.slice(0,10)} readOnly />
                    </div>
                </div>
            </div>
            <div className="col-md-12 mb-4 mb-md-0 mt-3">
                <div className='table-responsive text-nowrap"'>
                    <table className="table" style={{ fontSize: "13px" }} >
                        <thead>
                            <tr>
                                <th>NO</th>
                                <th>Desa/Kelurahan</th>
                                <th>Tonase Desa/Kelurahan</th>
                                <th>Tonase Yang Tersalurkan</th>
                                <th>Sisa Tonase</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* {WO.item_wo.map((itemWo) => (
                                <tr key={itemWo.id_wo}>
                                    <td>{nomor++}</td>
                                    <td>{itemWo.desa_kelurahan.nama_desa_kelurahan}</td>
                                    <td>{itemWo.tonase_desa_kelurahan}</td>
                                    <td>{itemWo.tonase_tersalurkan_wo}</td>
                                    <td>{itemWo.tonase_sisa_wo}</td>
                                </tr>
                            ))} */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

DetailPage.propTypes = {
    handleBackClick: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired
};

export default DetailPage;
