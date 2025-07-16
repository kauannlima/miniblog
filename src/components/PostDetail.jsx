import { Link } from "react-router-dom";

const PostDetail = ({ post }) => {
  return (
    <div className="w-full max-w-full bg-white rounded-xl shadow-md overflow-hidden flex flex-col justify-between p-6 h-[500px]">
      <div>
        <div className="w-full h-48 mb-4 overflow-hidden rounded-md">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>

        <h2 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
          {post.title}
        </h2>

        <p className="text-sm text-gray-500 mb-4">
          Criado por {post.createdBy}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {post.tagsArray.map((tag) => (
            <span
              key={tag}
              className="bg-violet-100 text-violet-700 text-xs font-semibold px-3 py-1 rounded-full"
            >
              #{tag}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-auto">
        <Link
          to={`/posts/${post.id}`}
          className="inline-block px-4 py-2 border border-violet-600 text-violet-600 font-semibold rounded hover:bg-violet-600 hover:text-white transition"
        >
          Ler mais
        </Link>
      </div>
    </div>
  );
};

export default PostDetail;
