import { Link } from "@tanstack/react-router";
import {
	ArrowBigUp,
	ArrowUpRight,
	Book,
	Bookmark,
	Check,
	Copy,
	MessageSquare,
} from "lucide-react";
import { useState } from "react";

function SkillCard({
	authorEmail,
	authorCleckId,
	createdAt,
	description,
	category,
	id,
	installCommand,
	slug,
	tags,
	title,
}: SkillRecord) {
	const [copied, setCopied] = useState(false);

	function handleCopy(e: React.MouseEvent) {
		e.stopPropagation();
		navigator.clipboard.writeText(installCommand).then(() => {
			setCopied(true);
			setTimeout(() => setCopied(false), 2000);
		});
	}

	return (
		<article className="skill-card">
			<Link
				to="/skills/${id}"
				tabIndex={-1}
				arial-label={"open"}
				className="overlay"
			/>
			<div className="chrome">
				<div className="chrome-bar">
					<div className="lights">
						<div className="light red" />
						<div className="light amber" />
						<div className="light green" />
					</div>
					<div className="host">registry.sh</div>
				</div>
			</div>
			<div className="body">
				<div className="meta">
					<div className="author">
						<img
							src="./public/logo192.png"
							alt="auth avatar"
							className="avatar"
						/>
						<div className="author-copy">
							<p>Root</p>
							<p>{new Date(createdAt as string).toLocaleDateString()}</p>
						</div>
					</div>
					<p className="category">{category}</p>
				</div>
				<div className="summary">
					<Link to="/skills" className="title-link">
						<h3>{title}</h3>
					</Link>
					<p className="description">{description}</p>
				</div>
				<div className="command">
					<div className="command-copy">
						<span>{">_"}</span>
						<p>{installCommand}</p>
					</div>
					<button
						type="button"
						className="copy"
						onClick={handleCopy}
						aria-label="Copy command"
					>
						{copied ? <Check size={16} /> : <Copy size={16} />}
					</button>
				</div>
				<div className="footer">
					<div className="stats">
						<button type="button" className="upvote" disabled>
							<ArrowBigUp size={16} />
							<span>{tags.length}</span>
						</button>
						<div className="comments">
							<MessageSquare size={14} />
							<span>{authorEmail ? 1 : 0}</span>
						</div>
					</div>
					<div className="actions">
						<Link to="/skills/${id}" className="open" title={`open ${title}`}>
							<span>Open</span>
							<ArrowUpRight size={14} />
						</Link>

						<button
							type="button"
							className="save"
							aria-braillelabel="Saved state"
							disabled
						>
							<Bookmark size={14} />
						</button>
					</div>
				</div>
			</div>
		</article>
	);
}

export default SkillCard;
