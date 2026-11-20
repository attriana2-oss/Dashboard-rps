type ChartCardProps = {
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function ChartCard({
  title,
  description,
  children,
}: ChartCardProps) {
  return (
    <article className="chart-card">
      <h3>{title}</h3>
      <p>{description}</p>

      {children}
    </article>
  );
}