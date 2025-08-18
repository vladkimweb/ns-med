// Example usage (app/clinics/[slug]/page.tsx)
// =============================
import { clinics } from "@/data/clinics"; // where you store your data
import ClinicPageTemplate from "@/components/ClinicPageTemplate";

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const clinic = clinics.find((c) => c.slug === slug);
  if (!clinic) return <div className="p-8">Клиника не найдена</div>;
  return <ClinicPageTemplate clinic={clinic} />;
}