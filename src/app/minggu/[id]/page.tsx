
"use client";

import { useParams, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import type { SubmitEvent } from "react";
import { mingguRPS } from "@/data/rps-data";

export default function DetailMinggu() {
  const params = useParams();
  const router = useRouter();

  const id = Number(params.id);
  const minggu = mingguRPS.find((item) => item.minggu === id);

  const [status, setStatus] = useState(minggu?.status || "Belum");
  const [catatan, setCatatan] = useState("");
  const [pesan, setPesan] = useState("");
  const [daftarCatatan, setDaftarCatatan] = useState<string[]>([]);
  useEffect(() => {
  const temaTersimpan = localStorage.getItem("rps-tema");

  document.documentElement.setAttribute(
    "data-theme",
    temaTersimpan === "dark" ? "dark" : "light"
  );
}, []);
const [errorCatatan, setErrorCatatan] = useState("");

const validasiCatatan = (nilai: string) => {
  if (nilai.trim() === "") {
    setErrorCatatan("Catatan realisasi wajib diisi.");
  } else if (nilai.trim().length < 10) {
    setErrorCatatan("Catatan minimal 10 karakter.");
  } else {
    setErrorCatatan("");
  }
};
  useEffect(() => {
  const semuaStatus = JSON.parse(
    localStorage.getItem("rps-status") || "{}"
  );

  const catatanTersimpan = JSON.parse(
    localStorage.getItem(`rps-catatan-${id}`) || "[]"
  );

  if (semuaStatus[id]) {
    setStatus(semuaStatus[id]);
  }

  setDaftarCatatan(catatanTersimpan);
}, [id]);

  if (!minggu) {
    return (
      <main className="dashboard detail-page">
        <h1>Data minggu tidak ditemukan</h1>
        <button onClick={() => router.push("/")}>
          Kembali ke Dashboard
        </button>
      </main>
    );
  }

  function simpanRealisasi(e: SubmitEvent<HTMLFormElement>) {
  e.preventDefault();

  if (!catatan.trim()) {
    setErrorCatatan("Catatan realisasi wajib diisi.");
    return;
  }

  if (catatan.trim().length < 10) {
    setErrorCatatan("Catatan minimal 10 karakter.");
    return;
  }

  setErrorCatatan("");

  const catatanBaru = [...daftarCatatan, catatan.trim()];

  localStorage.setItem(
    `rps-catatan-${id}`,
    JSON.stringify(catatanBaru)
  );

  setDaftarCatatan(catatanBaru);
  setCatatan("");
  setPesan("Catatan berhasil disimpan!");
}

  return (
    <main className="dashboard detail-page">
      <header className="header">
        <div>
          <p className="eyebrow">DETAIL RENCANA PEMBELAJARAN</p>
          <h1>Minggu ke-{minggu.minggu}</h1>
          <p>{minggu.topik}</p>
        </div>
        <span className="semester">Semester Gasal 2026</span>
      </header>

      <section className="detail-info">
  <h2>Informasi Pembelajaran</h2>

  <div className="info-grid">
    <div className="info-item">
      <span>Minggu ke-</span>
      <strong>{minggu.minggu}</strong>
    </div>

    <div className="info-item">
      <span>Topik Pembelajaran</span>
      <strong>{minggu.topik}</strong>
    </div>

    <div className="info-item">
      <span>Capaian Pembelajaran</span>
      <strong>{minggu.cpmk}</strong>
    </div>

    <div className="info-item">
      <span>Metode Pembelajaran</span>
      <strong>{minggu.metode}</strong>
    </div>
  </div>
</section>

      <section className="detail-card">
        <h2>Ubah Status Pembelajaran</h2>

        <label htmlFor="status">Status perkuliahan</label>
        <select
          id="status"
          value={status}
          onChange={(e) => {
  setStatus(
    e.target.value as "Belum" | "Berjalan" | "Selesai"
  );
  setPesan("Status berhasil diperbarui pada halaman ini.");
}}
        >
          <option value="Belum">Belum</option>
          <option value="Berjalan">Berjalan</option>
          <option value="Selesai">Selesai</option>
        </select>
        <button
  type="button"
  className="save-button"
  onClick={() => {
    const semuaStatus = JSON.parse(
      localStorage.getItem("rps-status") || "{}"
    );

    semuaStatus[id] = status;

    localStorage.setItem(
      "rps-status",
      JSON.stringify(semuaStatus)
    );

    setPesan("Status berhasil disimpan!");
  }}
>
  Simpan Status
</button>

        <p className="feedback" aria-live="polite">{pesan}</p>
      </section>

      <section className="detail-card">
        <h2>Form Catatan Realisasi Pertemuan</h2>

        <form onSubmit={simpanRealisasi}>
          <label htmlFor="catatan">
            Catatan kegiatan pembelajaran
          </label>

       
<textarea
  id="catatan"
  rows={5}
  value={catatan}
  onChange={(e) => {
    setCatatan(e.target.value);
    validasiCatatan(e.target.value);
  }}
  placeholder="Tuliskan kegiatan pembelajaran yang telah dilaksanakan..."
  required
/>

{errorCatatan && (
  <p className="error-message" role="alert">
    {errorCatatan}
  </p>
)}


          <button type="submit" className="save-button">
            Simpan Catatan
          </button>
        </form>
        <section className="catatan-list">
  <h2>Riwayat Catatan Realisasi</h2>

  {daftarCatatan.length === 0 ? (
    <p>Belum ada catatan realisasi.</p>
  ) : (
    <ul>
      {daftarCatatan.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )}
</section>

        <p className="feedback" aria-live="polite">{pesan}</p>
      </section>

      <button
        className="back-button"
        onClick={() => router.push("/")}
      >
        Kembali ke Dashboard
      </button>
    </main>
  );
}
