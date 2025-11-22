export interface Activity {
    slug: string;
    title: string;
    description: string;
    date: string;
    tags: string[];
    imageUrl?: string;
    videoUrl?: string;
    content?: string;
}
