import fs, { promises } from "fs";
import matter from "gray-matter";

export async function getPostContent(path, slug) {
    try {
        const folder = `posts/${path}`;
        const file = `${folder}/${slug}.json`;
        const content = await promises.readFile(file);
        const parsedJson = JSON.parse(content);
        return parsedJson;
    } catch (err) {
        return null;
    }
}

export default function getPostMetadata(path) {
    const folder = `posts/${path}`;
    const files = fs.readdirSync(folder);
    const markdownPosts = files.filter((file) => file.endsWith(".json"));

    const posts = Promise.all(
        markdownPosts.map(async (filename) => {
            // const fileContents = fs.readFileSync(`posts/${path}/${filename}`, "utf8");
            // const matterResult = matter(fileContents);

            const jsonData = await promises.readFile(`posts/${path}/${filename}`);
            const parsedJson = JSON.parse(jsonData);

            return {
                ...parsedJson,
                slug: filename.replace(".json", ""),
            };
        })
    );

    return posts;
}
