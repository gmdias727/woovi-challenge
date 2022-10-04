import type { NextPage } from "next";
import { BlogPostForm } from "../src/components/blogPostForm";

const Home: NextPage = () => {
    return (
        <div>
            <BlogPostForm />
        </div>
    );
};

export default Home;
