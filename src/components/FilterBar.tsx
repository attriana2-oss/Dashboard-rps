type FilterBarProps = {
  pencarian: string;
  filterCPMK: string;
  filterStatus: string;
  urutan: string;
  onPencarianChange: (nilai: string) => void;
  onFilterCPMKChange: (nilai: string) => void;
  onFilterStatusChange: (nilai: string) => void;
  onUrutanChange: (nilai: string) => void;
};

export default function FilterBar({
  pencarian,
  filterCPMK,
  filterStatus,
  urutan,
  onPencarianChange,
  onFilterCPMKChange,
  onFilterStatusChange,
  onUrutanChange,
}: FilterBarProps) {
  return (
    <div className="filter-area">
      <label>
        Cari topik pembelajaran
        <input
          type="search"
          placeholder="Masukkan nama topik..."
          value={pencarian}
          onChange={(e) => onPencarianChange(e.target.value)}
        />
      </label>

      <label>
        Filter CPMK
        <select
          value={filterCPMK}
          onChange={(e) => onFilterCPMKChange(e.target.value)}
        >
          <option value="Semua">Semua</option>
          <option value="CPMK 1">CPMK 1</option>
          <option value="CPMK 2">CPMK 2</option>
          <option value="CPMK 3">CPMK 3</option>
          <option value="CPMK 4">CPMK 4</option>
        </select>
      </label>

      <label>
        Filter Status
        <select
          value={filterStatus}
          onChange={(e) => onFilterStatusChange(e.target.value)}
        >
          <option value="Semua">Semua</option>
          <option value="Selesai">Selesai</option>
          <option value="Berjalan">Berjalan</option>
          <option value="Belum">Belum</option>
        </select>
      </label>

      <label>
        Urutkan Minggu
        <select
          value={urutan}
          onChange={(e) => onUrutanChange(e.target.value)}
        >
          <option value="naik">Terkecil ke Terbesar</option>
          <option value="turun">Terbesar ke Terkecil</option>
        </select>
      </label>
    </div>
  );
}