
"use client";
import { useRpsReducer } from "@/hooks/useRpsReducer";
import { ThemeProvider } from "@/context/ThemeContext";
import ThemeToggle from "@/components/ThemeToggle";
import { useTheme } from "@/hooks/useTheme";
import DataTable from "../components/DataTable";
import FilterBar from "@/components/FilterBar";
import ChartCard from "@/components/ChartCard";
import KpiCard from "@/components/KpiCard";
import { penilaian } from "@/data/rps-data";
import type { MingguRPS } from "@/data/rps-data";
import { useState, useEffect } from "react";



export default function Home() {
const { state, dispatch } = useRpsReducer();

const formatPersen = (nilai: number) => {
  return new Intl.NumberFormat("id-ID", {
    style: "percent",
    minimumFractionDigits: 0,
    maximumFractionDigits: 1,
  }).format(nilai / 100);
};

const formatTanggal = (tanggal: string) => {
  return new Intl.DateTimeFormat("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(tanggal));
};
  const [data, setData] = useState<MingguRPS[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
useEffect(() => {
  async function ambilData() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/data/minggu.json");

      if (!response.ok) {
        throw new Error("Gagal mengambil data RPS.");
      }

     const hasil: MingguRPS[] = await response.json();

const semuaStatus = JSON.parse(
  localStorage.getItem("rps-status") || "{}"
);

const dataTerbaru = hasil.map((item) => ({
  ...item,
  status: semuaStatus[item.minggu] || item.status,
}));

setData(dataTerbaru);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Terjadi kesalahan saat mengambil data."
      );
    } finally {
      setLoading(false);
    }
  }

 ambilData();

function perbaruiStatus() {
  const semuaStatus = JSON.parse(
    localStorage.getItem("rps-status") || "{}"
  );

  setData((dataSaatIni) =>
    dataSaatIni.map((item) => ({
      ...item,
      status: semuaStatus[item.minggu] || item.status,
    }))
  );
}

window.addEventListener("focus", perbaruiStatus);

return () => {
  window.removeEventListener("focus", perbaruiStatus);
};
}, []);
  const [pencarian, setPencarian] = useState("");
  const [filterCPMK, setFilterCPMK] = useState("Semua");
  const [filterStatus, setFilterStatus] = useState("Semua");
  const [urutan, setUrutan] = useState("naik");
  const [halaman, setHalaman] = useState(1);
  const { darkMode, setDarkMode } = useTheme();

  const perHalaman = 5;

  const hasilFilter = data
    .filter((item) =>
      item.topik.toLowerCase().includes(pencarian.toLowerCase())
    )
    .filter((item) =>
      filterCPMK === "Semua" || item.cpmk === filterCPMK
    )
    .filter((item) =>
      filterStatus === "Semua" || item.status === filterStatus
    )
    .sort((a, b) =>
      urutan === "naik"
        ? a.minggu - b.minggu
        : b.minggu - a.minggu
    );

  const totalHalaman = Math.max(1, Math.ceil(hasilFilter.length / perHalaman));
  const dataHalaman = hasilFilter.slice(
    (halaman - 1) * perHalaman,
    halaman * perHalaman
  );

  const selesai = data.filter(m => m.status === "Selesai").length;
  const berjalan = data.filter(m => m.status === "Berjalan").length;
  const belum = data.filter(m => m.status === "Belum").length;
  const progress = data.length > 0
  ? Math.round((state.jumlahSelesai / data.length) * 100)
  : 0;
useEffect(() => {
  dispatch({
    type: "SET_SELESAI",
    payload: selesai,
  });
}, [selesai, dispatch]);

  function ubahPencarian(nilai: string) {
    setPencarian(nilai);
    setHalaman(1);
  }

  function ubahCPMK(nilai: string) {
    setFilterCPMK(nilai);
    setHalaman(1);
  }

  function ubahStatus(nilai: string) {
    setFilterStatus(nilai);
    setHalaman(1);
  }

  return (
  <ThemeProvider value={{ darkMode, setDarkMode }}>
    <main className="dashboard">
      <header className="header">
        <div>
          <p className="eyebrow">SISTEM INFORMASI AKADEMIK</p>
          <h1>Dashboard RPS</h1>
          <p>Rencana Pembelajaran Semester</p>
          <p>
  Tanggal : {formatTanggal(new Date().toISOString())}
</p>
          
        </div>
        <div>
  <span className="semester">Semester Gasal 2026</span>

  <ThemeToggle />
</div>
      </header>

      <nav className="navigation" aria-label="Navigasi utama">
        <a href="#ringkasan">Ringkasan</a>
        <a href="#rencana">Rencana Mingguan</a>
        <a href="#penilaian">Penilaian</a>
      </nav>

      <section id="ringkasan">
        <h2>Ringkasan Perkuliahan</h2>

        <div className="stats">
  <KpiCard
    title="Total Minggu"
    value={data.length}
    description="Total pertemuan dalam RPS"
  />

  <KpiCard
    title="Selesai"
    value={selesai}
    description="Minggu telah diselesaikan"
  />

  <KpiCard
    title="Sedang Berjalan"
    value={berjalan}
    description="Minggu sedang berlangsung"
  />

  <KpiCard
    title="Belum Dilaksanakan"
    value={belum}
    description="Minggu belum dilaksanakan"
  />
</div>

        <article className="progress-card">
          <div className="progress-heading">
            <h3>Progress Pembelajaran</h3>
            <strong>{formatPersen(progress)}</strong>
          </div>
          <div
            className="progress-track"
            role="progressbar"
            aria-valuenow={progress}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Progress pembelajaran"
          >
            <div className="progress-fill" style={{ width: `${progress}%` }} />
          </div>
          <p>{selesai} dari {data.length} minggu telah diselesaikan.</p>
        </article>
      </section>

      <section id="rencana">
        <h2>Rencana Pembelajaran Mingguan</h2>

        
 <FilterBar
  pencarian={pencarian}
  filterCPMK={filterCPMK}
  filterStatus={filterStatus}
  urutan={urutan}
  onPencarianChange={ubahPencarian}
  onFilterCPMKChange={ubahCPMK}
  onFilterStatusChange={ubahStatus}
  onUrutanChange={setUrutan}
/>

        <p className="result-info">
          Menampilkan {hasilFilter.length} data pembelajaran.
        </p>

        
<DataTable
  data={dataHalaman}
  loading={loading}
  error={error}
/>


        <div className="pagination">
          <button
            onClick={() => setHalaman(h => Math.max(1, h - 1))}
            disabled={halaman === 1}
          >
            Sebelumnya
          </button>

          <span>Halaman {halaman} dari {totalHalaman}</span>

          <button
            onClick={() => setHalaman(h => Math.min(totalHalaman, h + 1))}
            disabled={halaman === totalHalaman}
          >
            Berikutnya
          </button>
        </div>
      </section>

      <section id="penilaian">
        <h2>Bobot Penilaian</h2>
       
<div className="table-wrapper">
  <table>
    <thead>
      <tr>
        <th>Komponen</th>
        <th>Bobot</th>
        <th>CPMK</th>
      </tr>
    </thead>
    <tbody>
      {penilaian.map((item) => (
        <tr key={item.komponen}>
          <td>{item.komponen}</td>
          <td>{item.bobot}%</td>
          <td>{item.cpmk}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>


        <ChartCard
  title="Visualisasi Bobot Penilaian"
  description="Persentase bobot setiap komponen penilaian."
>
  <div className="chart-list">
    {penilaian.map((item) => (
      <div className="chart-item" key={item.komponen}>
        <div className="chart-label">
          <span>{item.komponen}</span>
          <strong>{formatPersen(item.bobot)}</strong>
        </div>

        <div className="chart-track">
          <div
            className="chart-bar"
            style={{ width: `${item.bobot}%` }}
          />
        </div>
      </div>
    ))}
  </div>
</ChartCard>

      </section>

      <footer>
        <p>Dashboard RPS © 2026 | Sistem Informasi Akademik</p>
      </footer>
       </main>
  </ThemeProvider>
  );
}