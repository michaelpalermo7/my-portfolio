import React, { useEffect, useState } from "react";
import image1 from "../assets/volldb/db1.png";
import image2 from "../assets/volldb/db2.png";
import image3 from "../assets/volldb/db3.png";
import image4 from "../assets/volldb/db4.png";
import image5 from "../assets/volldb/db5.png";
import image6 from "../assets/volldb/db6.png";
import image7 from "../assets/volldb/db7.png";
import image8 from "../assets/volldb/db8.png";
import image9 from "../assets/volldb/db9.png";
import { Button } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

const VollDb: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("overview");

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );

    // Use a "center band": when a section intersects the middle 10% of the viewport,
    // it becomes active. This avoids short/fast sections getting skipped.
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
          <Button
            component={Link}
            to="/"
            startIcon={<ArrowBackIcon />}
            variant="text"
            size="small"
            className="relative top-[4px]"
          >
            Back
          </Button>
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
                  MVC Database Application
                </h1>
                <hr className="mt-5 border-b border-white/10" />
              </header>

              {/* Scrollspy nav with dots */}
              <nav className="mt-6 text-md space-y-4 text-white">
                <NavItem href="#overview" label="Overview" id="overview" />
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
                The Volleyball Club System (VCS) is a full-stack database
                application designed for the Montréal Volleyball Club (MVC). The
                system introduces a relational database schema with integrity
                constraints, a graphical user interface (GUI), and automated
                processes that simplify club operations. VCS manages membership
                registration, personnel assignments, team formation, financial
                tracking, and communication workflows across both the Head and
                Branch locations of the club.
              </p>

              <div className="my-6">
                <img
                  src={image1}
                  alt="Screenshot of VulRep dashboard"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>

              <p className="mt-2 text-neutral-700">
                The application emphasizes data consistency, scalability, and
                usability. Features include age-based classification of members
                (minor/major), family–member relationships for minors,
                enforcement of location and personnel constraints, payment
                validation with automated donation handling, and scheduling
                rules that prevent conflicting team assignments. Weekly
                automated emails keep members informed of upcoming sessions,
                while a logging mechanism ensures traceability of all
                notifications sent.
              </p>
            </section>

            <section id="approach" className="scroll-mt-24">
              <h2 className="text-xl font-semibold">Approach</h2>

              <p className="mt-2 font-semibold">Modeling & Design</p>
              <p className="mt-2 text-neutral-700">
                The project began with a careful requirements analysis of the
                Montréal Volleyball Club’s operations. From these, we extracted
                the main entities — locations, personnel, family members, club
                members, teams, payments, and sessions — and developed a
                detailed E/R diagram. Constraints such as unique SSNs, mandatory
                family linkage for minors, and one-location-per-personnel rules
                were explicitly modeled. Additional business rules like minimum
                age (11+) and payment fee structures were captured through
                triggers rather than solely in the E/R model.
              </p>

              <div className="my-6">
                <img
                  src={image6}
                  alt="E/R diagram of Volleyball Club System"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>

              <p className="mt-2 font-semibold">Normalization & Schema</p>
              <p className="mt-2 text-neutral-700">
                The E/R diagram was converted into a relational schema, with all
                relations refined to at least 3NF and in most cases BCNF. Tables
                such as
                <code>Locations</code>, <code>Personnel</code>,{" "}
                <code>ClubMembers</code>,<code>Membership</code>,{" "}
                <code>Payment</code>, and <code>PlaysAs</code>
                were structured with primary keys, foreign keys, and functional
                dependencies to enforce integrity. For example,{" "}
                <code>Membership</code> maintains annual activity status and
                donations, while <code>Payment</code> ensures installment
                tracking and methods. This process guaranteed minimal redundancy
                and reliable referential integrity across all entities.
              </p>

              <div className="my-6">
                <img
                  src={image5}
                  alt="SQL trigger logic in implementation"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>

              <p className="mt-2 font-semibold">Implementation & Integrity</p>
              <p className="mt-2 text-neutral-700">
                Once the schema was finalized, we implemented it in SQL with
                full DDL statements and populated it with representative data.
                To maintain business rules, multiple triggers were introduced:
                preventing members under 11, capping installment counts at four,
                converting excess payments into donations, auto-updating
                activity status after payments, and ensuring personnel
                assignments close properly when moving between locations. These
                triggers allowed the database to actively enforce real-world
                constraints and maintain consistency.
              </p>

              <div className="my-6">
                <img
                  src={image7}
                  alt="SQL trigger logic in implementation"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>

              <p className="mt-2 text-neutral-700">
                To complement the database, we developed an automated email
                generation script in Node.js. Every Sunday, the script queries
                upcoming training and game sessions, compiles personalized
                emails for each club member, and dispatches them with session
                details such as date, time, address, and head coach contact.
                Each email is also logged back into the database’s
                <code>EmailLogs</code> table, capturing metadata like subject
                line, receiver, sender location, and a body preview. This
                ensured reliable communication with members while maintaining a
                full historical record of all messages sent, allowing the club
                to monitor outreach activity and confirm compliance with
                scheduling requirements.
              </p>

              <div className="my-6">
                <img
                  src={image8}
                  alt="SQL trigger logic in implementation"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>

              <p className="mt-2 font-semibold">Serving & Interaction</p>
              <p className="mt-2 text-neutral-700">
                Finally, we layered functionality to support end-user
                interactions. A GUI enables CRUD operations for locations,
                personnel, family members, club members, and team formations.
                Automated Node.js scripts handle weekly email generation, with
                email logs stored in the database for accountability. Query sets
                (1–19) demonstrate diverse operations: from generating reports
                on inactive members or undefeated players, to summarizing
                session statistics across locations. This combination of
                database integrity, triggers, and user-facing features ensured a
                robust and practical system for MVC’s long-term operations.
              </p>

              <div className="my-6">
                <img
                  src={image2}
                  alt="VCS web interface for managing data"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>
              <div className="my-6">
                <img
                  src={image3}
                  alt="VCS web interface for managing data"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>
              <div className="my-6">
                <img
                  src={image4}
                  alt="VCS web interface for managing data"
                  className="rounded-2xl shadow-md mx-auto"
                />
              </div>
            </section>

            <section id="results" className="scroll-mt-24">
              <h2 className="text-xl font-semibold">Results</h2>

              <p className="mt-4 text-neutral-700">
                Query sets (19 total) validated that the system could handle
                diverse real-world scenarios, from generating detailed location
                and membership reports to identifying inactive players,
                undefeated members, or volunteer personnel. The automated
                Node.js email script reliably sent weekly schedules and logged
                them for traceability, ensuring members stayed informed and the
                club maintained accountability.
              </p>

              <div className="my-6">
                <img
                  src={image9}
                  alt="VCS web interface for managing data"
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

export default VollDb;
