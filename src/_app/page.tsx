import { getAllPosts } from "../lib/api";
import Header from "./components/header";
import Container from "./components/container";
import { PostList } from "./components/post-list";

export default function Index() {
  const allPosts = getAllPosts();

  return (
    <main>
      <Header />
      <Container>
        <PostList posts={allPosts} />
      </Container>
    </main>
  );
}
