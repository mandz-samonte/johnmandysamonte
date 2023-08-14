import getPostMetadata from "@/utils/getPostMetadata";
import Container from "@/components/Container";
import ProjectCard from "@/components/ProjectCard";
import Link from "next/link";
import { PrimaryButton } from "@/components/Button";

export default async function Works() {
    const works = await getPostMetadata("works");

    return (
        <Container className="p-5 py-40 flex flex-col">
            <h3 className="font-bold text-center text-lg md:text-4xl max-w-lg mx-auto text-primary">
                Projects I did and currently working on
            </h3>
            <h6 className="text-slate-500 text-center text-xs md:text-lg max-w-xl mx-auto">
                This projects are combinations of working in a company and passion project of mine
            </h6>

            <div className="my-20">
                {works?.map((data) => (
                    <ProjectCard
                        key={data.slug}
                        slug={data.slug}
                        {...data}
                    />
                ))}
            </div>

            <PrimaryButton
                to="/works"
                className="px-5 py-3 bg-primary font-bold text-white mx-auto"
            >
                View More
            </PrimaryButton>
        </Container>
    );
}
