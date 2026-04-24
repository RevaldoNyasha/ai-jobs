interface SkillRecord {
    id: string;
    title: string;
    slug: string;
    description: string;
    category: string;
    tags: string[];
    installCommand: string;
    createdAt: string | null;
    authorCleckId: string |  null;
    authorEmail: string | null;
}