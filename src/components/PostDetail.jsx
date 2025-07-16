import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <article className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg overflow-hidden p-6 mb-8">
      <img
        src={post.image}
        alt={post.title}
        className="w-full h-64 sm:h-80 object-cover rounded-md mb-4"
      />
      <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-sm text-gray-500 mb-4">Criado por {post.createdBy}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {post.tagsArray.map((tag) => (
          <span
            key={tag}
            className="bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full cursor-pointer hover:bg-violet-200 transition"
            aria-label={`Tag ${tag}`}
          >
            #{tag}
          </span>
        ))}
      </div>

      <Link
        to={`/posts/${post.id}`}
        className="inline-block px-6 py-2 border border-violet-600 text-violet-600 font-semibold rounded hover:bg-violet-600 hover:text-white transition focus:outline-none focus:ring-2 focus:ring-violet-500"
        aria-label={`Ler mais sobre ${post.title}`}
      >
        Ler mais
      </Link>
    </article>
  );
};

export default PostDetail;
