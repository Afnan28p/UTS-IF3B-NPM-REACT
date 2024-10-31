import React, { useEffect, useState } from "react";
import axios from "axios";
import { NavLink } from "react-router-dom";

export default function List() {
  const [barang, setBarang] = useState([]);

  // Mengambil data barang saat komponen dimount
  useEffect(() => {
    axios
      .get("https://uts-if-3-b-npm-api.vercel.app/api/api/barang")
      .then((response) => {
        setBarang(response.data.result); // Simpan data barang ke dalam state
      })
      .catch((error) => {
        console.error("Error fetching data:", error); // Menangani error
      });
  }, []);


  return (
    <>
      <h2>List Barang</h2>

      <NavLink
        to="/barang/create"
        className="btn btn-primary mb-3"
      >
        Tambah Barang
      </NavLink>

      <ul className="list-group">
        {barang.map((item) => (
          <li key={item.id} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{item.nama}</span>
            <span>{item.tanggal_pembelian}</span>
            <span>{item.harga}</span>
            <div className="btn-group" role="group">
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}