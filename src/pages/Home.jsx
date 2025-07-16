import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import { useFetchDocuments } from "../hooks/useFetchDocuments";
import { OrbitProgress } from "react-loading-indicators";
import PostDetail from "../components/PostDetail";

const Home = () => {
  const [query, setQuery] = useState("");
  const { documents: posts, loading } = useFetchDocuments("posts");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white px-4 py-8">
      <h1 className="text-3xl font-extrabold text-violet-700 mb-8 text-center">
        Veja os nossos posts mais recentes
      </h1>

      {/* Formulário de busca */}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex mb-10 gap-3"
        role="search"
      >
        <input
          type="text"
          placeholder="Ou busque por tags"
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow px-5 py-3 rounded-xl border border-gray-300 bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition"
        />
        <button
          type="submit"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 via-purple-700 to-indigo-600 text-white font-extrabold shadow-lg hover:shadow-violet-400 hover:scale-[1.03] transform transition-all"
        >
          Pesquisar
        </button>
      </form>

      {/* Conteúdo posts */}
      <div className="w-full max-w-3xl space-y-8">
        {loading && (
          <div className="flex justify-center">
            <OrbitProgress color="#7C3AED" size="medium" />
          </div>
        )}

        {!loading && posts && posts.length > 0 && (
          <div className="flex flex-col">
            {posts.map((post) => (
              <PostDetail key={post.id} post={post} />
            ))}
          </div>
        )}

        {!loading && posts && posts.length === 0 && (
          <div className="text-center py-12 bg-gray-50 rounded-xl shadow-inner border border-gray-200">
            <p className="mb-4 text-lg text-gray-700">
              Não foram encontrados posts.
            </p>
            <Link
              to="/posts/create"
              className="inline-block px-6 py-3 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition"
            >
              Criar primeiro post
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
