type KpiCardProps = {
  title: string;
  value: number;
  description: string;
};

export default function KpiCard({
  title,
  value,
  description,
}: KpiCardProps) {
  return (
    <article className="stat-card">
      <h3>{title}</h3>
      <p className="stat-number">{value}</p>
      <span>{description}</span>
    </article>
  );
}