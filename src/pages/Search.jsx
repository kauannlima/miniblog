import React from "react";

//hooks
import { useFetchDocuments } from "../hooks/useFetchDocuments";
import { useQuery } from "../hooks/useQuery";

//COMPONENTS
import PostDetail from "../components/PostDetail";
import { Link } from "react-router-dom";

const Search = () => {
  const query = useQuery();
  const search = query.get("q");

  const { documents: posts, loading } = useFetchDocuments("posts", search);

  return (
    <div className="min-h-screen bg-white px-4 py-8 max-w-5xl mx-auto flex flex-col items-center">
      <h1 className="text-3xl font-extrabold text-violet-700 mb-8 text-center">
        Resultados da busca por: <span className="text-gray-700">{search}</span>
      </h1>

      {loading && (
        <p className="text-gray-500 mb-6">Carregando resultados...</p>
      )}

      {!loading && posts && posts.length === 0 && (
        <div className="text-center py-12 bg-gray-50 rounded-xl shadow-inner border border-gray-200 w-full max-w-md">
          <p className="mb-4 text-lg text-gray-700">
            Não foram encontrados posts a partir da sua busca...
          </p>
          <Link
            to="/"
            className="inline-block px-6 py-3 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition"
          >
            Voltar
          </Link>
        </div>
      )}

      <div className="w-full space-y-6">
        {posts && posts.map((post) => <PostDetail key={post.id} post={post} />)}
      </div>
    </div>
  );
};

export default Search;
