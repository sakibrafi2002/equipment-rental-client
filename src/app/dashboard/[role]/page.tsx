export default async function DashboardPage({
  params,
}: {
  params: Promise<{ role: string }>;
}) {
  const { role } = await params;

  return (
    <main className="flex min-h-screen items-center justify-center">
      <h1 className="text-2xl font-bold capitalize">
        {role} dashboard (coming soon)
      </h1>
    </main>
  );
}