
type StatusBadgeProps = {
  status: "Selesai" | "Berjalan" | "Belum";
};

export default function StatusBadge({ status }: StatusBadgeProps) {
  return (
    <span className={`status ${status.toLowerCase()}`}>
      {status}
    </span>
  );
}
