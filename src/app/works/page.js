import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import getPostMetadata from "@/utils/getPostMetadata";

export default function Works() {
    const works = getPostMetadata("works");

    return (
        <Container className="flex flex-col py-40 min-h-screen">
            <h1 className="text-4xl font-bold mb-5">Projects I'm building and I worked on</h1>
            <h3>Here are combinations of projects I've built for companies and my passion projects</h3>

            <div className="grid md:grid-cols-2 mt-10 md:gap-10">
                {works.map(({ slug, data }) => (
                    <ProjectCard
                        key={slug}
                        slug={slug}
                        {...data}
                    />
                ))}
            </div>
        </Container>
    );
}
