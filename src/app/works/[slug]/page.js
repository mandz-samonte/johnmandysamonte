import Container from "@/components/Container";
import getPostMetadata, { getPostContent } from "@/utils/getPostMetadata";
import React from "react";

export async function generateStaticParams() {
    const works = getPostMetadata("works");
    return works.map((work) => ({ slug: work.slug }));
}

export default function Work({ params }) {
    const work = getPostContent("works", params.slug);

    return (
        <Container className="flex flex-col py-40 min-h-screen">
            <h5>{work.title}</h5>
            <h6>{params.slug}</h6>
            <div className="flex items-center gap-x-5">
                <span># Next JS</span>
                <span># React JS</span>
            </div>

            <h3>Overview</h3>
        </Container>
    );
}
