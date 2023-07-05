import fs from "fs";
import matter from "gray-matter";

export function getPostContent(path, slug) {
    try {
        const folder = `posts/${path}`;
        const file = `${folder}/${slug}.md`;
        const content = fs.readFileSync(file, "utf8");
        const matterResult = matter(content);
        return matterResult;
    } catch (err) {
        return null;
    }
}

export default function getPostMetadata(path) {
    const folder = `posts/${path}`;
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".md"));

    const posts = markdownPosts.map((filename) => {
        const fileContents = fs.readFileSync(`posts/${path}/${filename}`, "utf8");
        const matterResult = matter(fileContents);
        return {
            slug: filename.replace(".md", ""),
            ...matterResult,
        };
    });

    return posts;
}
