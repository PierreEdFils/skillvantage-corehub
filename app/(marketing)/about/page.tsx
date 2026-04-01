import FadeIn from "@/components/shared/fade-in";
import SectionHeader from "@/components/shared/section-header";


export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white pt-28">
      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <FadeIn>
            <div className="mb-6 inline-flex rounded-full bg-brand-blue-100 px-4 py-1.5 text-sm font-medium text-brand-blue-700">
              About SkillVantage CoreHub
            </div>
            <h1 className="text-5xl font-extrabold text-gray-900 md:text-6xl">
              Building the Future of <span className="gradient-text">Talent Growth</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-xl text-gray-600">
              We believe workforce development should be intelligent, connected,
              and outcome-driven — not fragmented across tools and disconnected experiences.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Our Mission"
            description="To connect coaching, learning, and workforce development into one platform that helps people and companies grow faster."
          />

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Empower Coaches",
                text: "Give coaches the infrastructure to scale their businesses and impact."
              },
              {
                title: "Accelerate Professionals",
                text: "Help professionals build meaningful skills and advance their careers."
              },
              {
                title: "Strengthen Employers",
                text: "Enable companies to develop talent strategically and measurably."
              }
            ].map((item, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
                  <h3 className="mb-2 text-xl font-bold text-gray-900">{item.title}</h3>
                  <p className="text-gray-600">{item.text}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Our Values"
            description="What drives the product and the company."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              "Outcome over activity",
              "Human expertise amplified by AI",
              "Trust, quality, and transparency",
              "Growth that benefits every stakeholder"
            ].map((value, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                  <p className="font-semibold text-gray-900">{value}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            title="Leadership Team"
            description="A startup-minded team focused on the future of learning and workforce performance."
          />

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Aisha Monroe", role: "Founder & CEO" },
              { name: "Daniel Kim", role: "Chief Product Officer" },
              { name: "Maya Thompson", role: "Head of Growth" },
              { name: "Victor Alvarez", role: "Head of Enterprise" }
            ].map((member, i) => (
              <FadeIn key={i} delay={i * 0.08}>
                <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue-600 to-brand-orange-500 text-lg font-bold text-white">
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </div>
                  <h3 className="font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
