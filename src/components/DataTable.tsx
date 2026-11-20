
import type { MingguRPS } from "@/data/rps-data";
import StatusBadge from "./StatusBadge";

type DataTableProps = {
  data: MingguRPS[];
  loading: boolean;
  error: string;
};

export default function DataTable({
  data,
  loading,
  error,
}: DataTableProps) {
  return (
    <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th>Minggu</th>
            <th>Topik Pembelajaran</th>
            <th>CPMK</th>
            <th>Metode</th>
            <th>Status</th>
            <th>Detail</th>
          </tr>
        </thead>

        <tbody>
          {loading ? (
            <tr>
              <td colSpan={6}>Memuat data pembelajaran...</td>
            </tr>
          ) : error ? (
            <tr>
              <td colSpan={6} role="alert">{error}</td>
            </tr>
          ) : data.length === 0 ? (
            <tr>
              <td colSpan={6}>Belum ada data pembelajaran.</td>
            </tr>
          ) : (
            data.map((item) => (
              <tr key={item.minggu}>
                <td>{item.minggu}</td>
                <td>{item.topik}</td>
                <td>{item.cpmk}</td>
                <td>{item.metode}</td>
                <td>
                  <StatusBadge status={item.status} />
                </td>
                <td>
                  <a href={`/minggu/${item.minggu}`}>
                    Lihat detail
                  </a>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}
