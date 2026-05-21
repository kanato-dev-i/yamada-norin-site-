import { SectionTitle } from "@/components/SectionTitle";

export function FarmerProfile() {
  return (
    <section className="bg-rice-paper py-16 sm:py-20">
      <div className="container-page grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <div className="overflow-hidden rounded-sm border border-rice-linen bg-white shadow-soft">
          <img src="/images/farmer-profile.svg" alt="山口の米農家プロフィールの仮画像" className="aspect-[4/3] w-full object-cover" />
        </div>
        <div>
          <SectionTitle
            eyebrow="FARMER"
            title="顔が見えるお米づくり"
            description="山口の自然に囲まれた田んぼで、毎日の食卓に寄り添うお米を育てています。"
          />
          <p className="mt-6 text-base leading-8 text-rice-muted">
            派手さはありませんが、毎日安心して食べられることを大切にしています。土の状態を見ながら水を入れ、収穫後は玄米での保管を基本に、必要に応じた精米にも気を配っています。
          </p>
        </div>
      </div>
    </section>
  );
}
