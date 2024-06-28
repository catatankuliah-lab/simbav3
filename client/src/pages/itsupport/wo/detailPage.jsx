import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';

const DetailPage = ({ handleBackClick, id }) => {
    const [WO, setWO] = useState(null);

    let nomor = 1;

    const fetchWO = useCallback(async () => {
        try {
            const response = await fetch(`http://localhost:5050/api/wo/details/${id}`);
            const data = await response.json();
            console.log(data);
            setWO(data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [id]);

    useEffect(() => {
        fetchWO();
    }, [fetchWO]);

    if (!WO) {
        return <div>Loading...</div>;
    }

    return (
        <div className="row">
            <div className="col-lg-12">
                <div className="mb-3">
                    <div className="divider text-start">
                        <div className="divider-text">
                            <span className="menu-header-text fs-6 fw-bold">Detail {WO.nomor_wo}</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <div>
                    Klik <button className="fw-bold btn btn-link p-0 fw-bold" onClick={handleBackClick}>disini</button> untuk kembali ke menu utama Working Order.
                </div>
            </div>
            <div className="col-md-12 mb-4 mb-md-0 mt-4">
                <div className="row">
                    <div className="col-md-4 col-sm-12 mb-3 d-none">
                        <label htmlFor="id_wo" className="form-label">ID Working Order</label>
                        <input className="form-control" type="text" id="id_wo" name="id_wo" value={WO.id_wo} readOnly />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <label htmlFor="nomor_wo" className="form-label">Nomor Working Order</label>
                        <input className="form-control" type="text" id="nomor_wo" name="nomor_wo" value={WO.nomor_wo} readOnly />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <label htmlFor="status_wo" className="form-label">Status Working Order</label>
                        <input className="form-control" type="text" id="status_wo" name="status_wo" value={WO.status_wo} readOnly />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <label htmlFor="total_tonase" className="form-label">Total Tonase</label>
                        <input className="form-control" type="text" id="total_tonase" name="total_tonase" value={WO.total_tonase} readOnly />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <label htmlFor="tonase_tersalurkan" className="form-label">Gudang</label>
                        <input className="form-control" type="text" id="tonase_tersalurkan" name="tonase_tersalurkan" value={WO.gudang.nama_gudang} readOnly />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <label htmlFor="sisa_tonase" className="form-label">Kantor Cabang</label>
                        <input className="form-control" type="text" id="sisa_tonase" name="sisa_tonase" value={WO.gudang.kantor_cabang.nama_kantor_cabang} readOnly />
                    </div>
                    <div className="col-md-4 col-sm-12 mb-3">
                        <label htmlFor="nama_desa_kelurahan" className="form-label">Tanggal Working Order</label>
                        <input className="form-control" type="text" id="nama_desa_kelurahan" name="nama_desa_kelurahan" value={WO.tanggal_wo.slice(0,10)} readOnly />
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
                            {WO.item_wo.map((itemWo) => (
                                <tr key={itemWo.id_wo}>
                                    <td>{nomor++}</td>
                                    <td>{itemWo.desa_kelurahan.nama_desa_kelurahan}</td>
                                    <td>{itemWo.tonase_desa_kelurahan}</td>
                                    <td>{itemWo.tonase_tersalurkan_wo}</td>
                                    <td>{itemWo.tonase_sisa_wo}</td>
                                </tr>
                            ))}
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
