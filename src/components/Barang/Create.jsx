import React, { useState } from 'react';
import axios from 'axios';

export default function CreateDevices() {
    const [namaBarang, setNamaBarang] = useState('');
    const [tanggalpembelianBarang, setTanggalPembelianBarang] = useState(''); 
    const [hargaBarang, setHargaBarang ] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess('');

        if (!namaBarang || !tanggalpembelianBarang || !hargaBarang) {
            setError('All fields are required');
            return;
        }

        try {
            const response = await axios.post(
                'https://uts-if-3-b-npm-api.vercel.app/api/api/barang',
                {
                    nama: namaBarang,
                    tanggal_pembelian: tanggalpembelianBarang,
                    harga: hargaBarang,
                }
            );

            if (response.status === 201) {
                setSuccess('Barang created successfully');
                setNamaBarang('');
                setTanggalPembelianBarang('');
                setHargaBarang('');
                setStatus('');
            } else {
                setError('Failed to create device');
            }
        } catch (error) {
            
        }
    };

    return (
        <div className="container mt-5">
            <h2 className="mb-4">Create Device</h2>
            {error && <div className="alert alert-danger">{error}</div>}
            {success && <div className="alert alert-success">{success}</div>}

            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="namaBarang" className="form-label">
                        Nama Barang
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="namaBarang"
                        value={namaBarang}
                        onChange={(e) => setNamaBarang(e.target.value)}
                        placeholder="Masukan Nama Barang"
                    />
                </div>

                <div className="mb-3">
                <label htmlFor="tanggalpembelianBarang" className="form-label">
                        Tanggal Pembelian
                    </label>
                    <input
                        type="date"
                        className="form-control"
                        id="tanggalpembelianBarang"
                        value={tanggalpembelianBarang}
                        onChange={(e) => setTanggalPembelianBarang(e.target.value)}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="hargaBarang" className="form-label">
                        Harga
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="hargaBarang"
                        value={hargaBarang}
                        onChange={(e) => setHargaBarang(e.target.value)}
                        placeholder="Masukan Harga"
                    />
                </div>

                <button type="submit" className="btn btn-primary">
                    Create
                </button>
            </form>
        </div>
    );
}
