import { Link } from "@/i18n/navigation";
import { ProjectEntry } from "@/lib/projectLoader";

interface ProjectCardProps {
  project: ProjectEntry;
  contentType?: string;
  className?: string;
}

export default function ProjectCard({
  project,
  contentType = "projects",
  className = "",
}: ProjectCardProps) {
  const { title, slug, description, stack = [] } = project;

  return (
    <article className={`flex flex-col gap-0.5 ${className}`}>
      <Link className="pb-1" href={`/${contentType}/${slug}`}>
        {title}
      </Link>
      {description && <p className="line-clamp-3 text-sm">{description}</p>}
      {stack.length > 0 && (
        <div className="line-clamp-2 text-sm text-[var(--secondary)]">
          {stack.map((item, index) => (
            <span key={index}>
              {index > 0 && <span className="mr-1.5">,</span>}
              <span>{item}</span>
            </span>
          ))}
        </div>
      )}
    </article>
  );
}
