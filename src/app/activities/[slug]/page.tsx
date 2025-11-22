import { activities } from "@/lib/data";
import { notFound } from "next/navigation";
import { Calendar, ArrowLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

// This is a server component
export default async function ActivityPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const activity = activities.find((a) => a.slug === slug);

    if (!activity) {
        notFound();
    }

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-background">
            <div className="max-w-4xl mx-auto">
                <Link
                    href="/activities"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
                >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to Activities
                </Link>

                <div className="aspect-video w-full overflow-hidden rounded-2xl mb-8 shadow-lg relative">
                    <Image
                        src={activity.imageUrl || "/placeholder.jpg"}
                        alt={activity.title}
                        fill
                        className="object-cover"
                    />
                </div>

                <div className="mb-8">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
                        <Calendar className="h-4 w-4" />
                        <span>{activity.date}</span>
                    </div>
                    <h1 className="text-4xl font-bold mb-4">{activity.title}</h1>
                    <div className="flex flex-wrap gap-2 mb-6">
                        {activity.tags.map((tag) => (
                            <span
                                key={tag}
                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-secondary text-secondary-foreground"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="prose prose-lg dark:prose-invert max-w-none">
                    {/* Simple rendering for now. In a real app, use a Markdown renderer */}
                    {activity.content?.split('\n').map((line, i) => (
                        <p key={i} className="mb-4">{line}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export function generateStaticParams() {
    return activities.map((activity) => ({
        slug: activity.slug,
    }));
}
