import getPostMetadata from "../components/getPostMetadata";
import PostPreview from "../components/PostPreview";

const HomePage = () => {
  const postMetadata = getPostMetadata();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));

  return (
    <>
    <h1>About US</h1>
    <p></p>
    <h1>Our Team</h1>
    <p></p>
    <h1>Blog</h1>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">{postPreviews}</div>
    </>
  );
};

export default HomePage;
