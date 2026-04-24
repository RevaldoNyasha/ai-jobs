import { createFileRoute, Link } from "@tanstack/react-router";
import { Terminal } from "lucide-react";
import SkillCard from "#/components/SkillCard";
import { dummySkillRecords } from "#/lib/dummySkillRecords";

export const Route = createFileRoute("/")({
	component: Home,
});

function Home() {
	return (
		<div id="home">
			<section className="hero">
				<h1 className="text-5xl font-bold">
					The Registry for <br />
					<span className="text-gradient">Agentic Intelligence</span>
				</h1>
				<div>
					<p>
						A centralized registry for procedural agent skills. Discover ,
						publish , and operate reusable agent capabilites from a route driven
						workspace
					</p>
				</div>
				<div className="actions">
					<Link to="/skills" className="btn-primary">
						<Terminal size={16} />
						<span>Browse Registry</span>
					</Link>

					<Link to="/skills/new" className="btn-secondary">
						<Terminal size={16} />
						Publish Skill
					</Link>
				</div>
			</section>
			<section className="latest">
				<div className="space-y-2">
					<h2>
						Recently Created
						<span className="text-gradient"> Skills</span>
					</h2>
					{""}
					Latest skills loaded from the database in descending creation order
				</div>
				<div>
					{dummySkillRecords.length > 0 ? (
						<div className="skills-grid">
							{dummySkillRecords.map((skill) => (
								<SkillCard key={skill.id} {...skill}></SkillCard>
							))}
						</div>
					) : (
						<p>No skills found</p>
					)}
				</div>
			</section>
		</div>
	);
}
