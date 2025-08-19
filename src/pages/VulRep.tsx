import React, { useEffect, useState } from "react";
import image1 from "../assets/vulrep/vulrep1.png";
import image2 from "../assets/vulrep/vulrep2.png";
import image3 from "../assets/vulrep/vulrep3.png";
import image4 from "../assets/vulrep/vulrep4.png";
import image5 from "../assets/vulrep/vulrep5.png";
import image6 from "../assets/vulrep/vulrep6.png";
import image7 from "../assets/vulrep/vulrep7.png";
import image8 from "../assets/vulrep/vulrep8.png";
import image9 from "../assets/vulrep/vulrep9.png";

import FancyButton from "../components/FancyButton";

const VulRep: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("overview");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        threshold: 0,
        rootMargin: "-45% 0px -45% 0px",
      }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const NavItem = ({
    href,
    label,
    id,
  }: {
    href: string;
    label: string;
    id: string;
  }) => (
    <a
      href={href}
      className="flex items-center gap-3 hover:underline"
      aria-current={activeSection === id ? "page" : undefined}
    >
      <span
        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
          activeSection === id ? "bg-blue-400" : "bg-white"
        }`}
      />
      {label}
    </a>
  );

  return (
    <div className="max-w-full mt-0 scroll-smooth text-neutral-900">
      <div className="mb-6 mt-20">
        {/* Flexbox row for text (left) + button (right) */}
        <div className="flex items-center justify-between">
          <p className="text-md max-w-full text-left opacity-70 ">
            Project Case Study
          </p>
          <FancyButton label="< BACK" href="/" />
        </div>

        {/* Horizontal line under both */}
        <div className="mt-2 border-b border-white/10" />
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[250px_minmax(0,1fr)] gap-10">
          {/* Left side */}
          <aside className="lg:sticky lg:top-6 h-max self-start">
            <div className="p-6 shadow-sm">
              <header>
                <h1 className="text-2xl font-semibold tracking-tight">
                  Vulnerability Reporter
                </h1>
                <hr className="mt-5 border-b border-white/10" />
              </header>

              {/* Scrollspy nav with dots */}
              <nav className="mt-6 text-md space-y-4 text-white">
                <NavItem href="#overview" label="Overview" id="overview" />
                <NavItem href="#problem" label="Problem" id="problem" />
                <NavItem href="#approach" label="Approach" id="approach" />
                <NavItem href="#results" label="Results" id="results" />
              </nav>
            </div>
          </aside>

          {/* Right side */}
          <main className="space-y-12">
            <section id="overview" className="scroll-mt-24">
              <h2 className="text-xl font-semibold">Overview</h2>
              <p className="mt-2 text-neutral-700">
                Vulnerability Reporter (VulRep) is a Flask-hosted analytics app
                with a Dash UI that turns public advisory data into an
                analyst-friendly workspace. The system maintains a local mirror
                of the GitHub Advisory Database and the official CWE catalog,
                normalizes both into SQLite via SQLAlchemy, and exposes
                filtered, sortable views and charts. Analysts can search and
                organize advisories by severity, CWE classification, affected
                package and ecosystem, and chronology (e.g., CVE year/number),
                then visualize patterns such as the most common CWEs or
                ecosystem hotspots.
              </p>

              <div className="my-6">
                <img
                  src={image1}
                  alt="Screenshot of VulRep dashboard"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>

              <p className="mt-2 text-neutral-700">
                The platform emphasizes reproducibility and clarity. On each
                update, VulRep performs a deterministic rebuild of advisory-side
                tables so results faithfully reflect upstream sources without
                data drift. The Dash front end surfaces this model through
                interactive filtering and prebuilt visualizations so teams can
                move from raw advisories to actionable insight quickly.
              </p>

              <div className="my-6">
                <img
                  src={image2}
                  alt="Screenshot of VulRep dashboard"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>
            </section>

            <section id="problem" className="scroll-mt-24">
              <h2 className="text-xl font-semibold">Problem</h2>
              <p className="mt-2 text-neutral-700">
                Public advisory data is rich but fragmented. Teams often need to
                stitch together GitHub advisories, CWE definitions, affected
                package metadata, and timelines just to answer basic questions:
                Which weakness classes are most common in our stack? Which
                packages or ecosystems are repeatedly impacted? Are recent
                advisories trending up or down? Without a normalized store and a
                purpose-built UI, answering these questions requires ad hoc
                scripts and manual inspection of JSON files.
              </p>
              <p className="mt-2 text-neutral-700">
                Organizations also need results they can trust and reproduce.
                When upstream advisories change, local spreadsheets or one-off
                parses can drift out of sync. A deterministic ingestion and
                rebuild process—paired with clear models for Advisories, CWEs,
                and Packages—provides the consistent foundation needed for
                reliable filtering, sorting, and visualization across projects.
              </p>
              <div className="my-6">
                <img
                  src={image3}
                  alt="Screenshot of VulRep dashboard"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>
            </section>

            <section id="approach" className="scroll-mt-24">
              <h2 className="text-xl font-semibold">Approach</h2>
              <p className="mt-2 font-semibold">Extraction</p>
              <p className="mt-2 text-neutral-700">
                The process begins with extraction. VulRep maintains a local
                mirror of the GitHub Advisory Database and the official CWE
                catalog. It clones or updates the GHSA repository, parses all
                JSON advisories, and ingests the CWE XML definition file.
              </p>

              <div className="my-6">
                <img
                  src={image4}
                  alt="Screenshot of VulRep dashboard"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>

              <p>
                From each advisory, the system pulls out critical metadata such
                as severity, publication and modification dates, CVE aliases,
                affected packages, ecosystems, and the CWE identifiers linked to
                that vulnerability.
              </p>
              <div className="my-6">
                <img
                  src={image5}
                  alt="Screenshot of VulRep dashboard"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>
              <p className="mt-2 font-semibold">Normalization</p>
              <p className="mt-2 text-neutral-700">
                Once the data is pulled in, the next step is normalization. All
                of this information is stored in a relational database (SQLite,
                via SQLAlchemy) using a clear domain model. Advisories, CWEs,
                and packages are represented as dedicated tables, with a
                many-to-many mapping between advisories and CWEs. On every
                update, the system fully rebuilds advisory-related tables from
                scratch. This approach ensures consistency and avoids issues
                where old data lingers after upstream changes.
              </p>

              <div className="my-6">
                <img
                  src={image6}
                  alt="Screenshot of VulRep dashboard"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>

              <p className="mt-2 font-semibold">Serving & Visualizing</p>
              <p className="mt-2 text-neutral-700">
                The third step is serving the data. A Flask backend provides the
                application shell, while Dash powers the interactive dashboards
                and visualizations. The API layer supports filtering advisories
                by severity, CWE, project name, or package. It also enables
                sorting results by severity or CVE chronology, ensuring analysts
                can prioritize effectively.
              </p>
              <div className="my-6">
                <img
                  src={image7}
                  alt="Screenshot of VulRep dashboard"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>
              <p className="mt-2 text-neutral-700">
                Finally, VulRep focuses on visualization. The frontend exposes
                charts and dashboards that allow analysts to quickly spot
                trends—whether that’s the top 10 CWEs by advisory count, the
                distribution of vulnerabilities across severity levels, or
                ecosystem hotspots. By centering usability through filtering and
                interactive components, the tool helps security teams move from
                raw data to actionable insights with minimal friction.
              </p>
              <div className="my-6">
                <img
                  src={image8}
                  alt="Screenshot of VulRep dashboard"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>
            </section>

            <section id="results" className="scroll-mt-24">
              <h2 className="text-xl font-semibold">Results</h2>

              <p className="text-neutral-700">
                VulRep delivers reproducible, source-aligned analytics on public
                advisories. The app surfaces a Top CWEs view (server-rendered as
                a horizontal bar chart) to highlight dominant weakness classes,
                and provides filtered advisory lists that can be organized by
                severity, CWE, package, ecosystem, and CVE chronology. Because
                ingestion rebuilds the advisory-side tables deterministically,
                results remain faithful to upstream changes without manual
                cleanups or drift.
              </p>
              <p className="mt-4 text-neutral-700">
                In practice, this enables teams to answer core questions
                quickly: which CWEs occur most often across the advisories we
                care about, which packages and ecosystems are recurring
                hotspots, and how recent advisories are trending over time.
                Validation steps—such as referential integrity checks between
                advisories and CWE rows and consistent severity ordering—help
                ensure the numbers shown in charts and filters reflect the
                underlying source data accurately.
              </p>

              <div className="my-6">
                <img
                  src={image9}
                  alt="Screenshot of VulRep dashboard"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default VulRep;
