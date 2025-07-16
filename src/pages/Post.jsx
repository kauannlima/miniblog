import { useParams } from "react-router-dom";
import { useFetchDocument } from "../hooks/useFetchDocument";

const Post = () => {
  const { id } = useParams();
  const { document: post, loading } = useFetchDocument("posts", id);

  return (
    <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 my-8">
      {loading && (
        <p className="text-center text-gray-500">Carregando post...</p>
      )}

      {post && (
        <>
          <h1 className="text-3xl font-extrabold text-violet-700 mb-6">
            {post.title}
          </h1>

          <img
            src={post.image}
            alt={post.title}
            className="w-full max-h-96 object-cover rounded-md mb-6"
          />

          <p className="text-gray-800 mb-8 whitespace-pre-line">{post.body}</p>

          <h3 className="text-xl font-semibold mb-4 text-gray-700">
            Esse post trata sobre:
          </h3>

          <div className="flex flex-wrap gap-3">
            {post.tagsArray.map((tag) => (
              <span
                key={tag}
                className="bg-violet-100 text-violet-700 px-3 py-1 rounded-full text-sm font-semibold cursor-pointer hover:bg-violet-200 transition"
                aria-label={`Tag ${tag}`}
              >
                #{tag}
              </span>
            ))}
          </div>
        </>
      )}
    </article>
  );
};

export default Post;
