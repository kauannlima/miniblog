import { Link } from "react-router-dom";

//HOOKS
import { useAuthValue } from "../context/AuthContext";
import { useFetchDocuments } from "../hooks/useFetchDocuments";
import { useDeleteDocument } from "../hooks/useDeleteDocument";

const Dashboard = () => {
  const { user } = useAuthValue();
  const uid = user.uid;

  //POST DO USER
  const { documents: posts, loading } = useFetchDocuments("posts", null, uid);
  const { deleteDocument } = useDeleteDocument("posts");

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8 max-w-5xl mx-auto">
      <h2 className="text-3xl font-extrabold text-violet-700 mb-4">
        Dashboard
      </h2>
      <p className="mb-8 text-gray-700">Gerencie os seus posts</p>

      {posts && posts.length === 0 ? (
        <div className="text-center py-12 bg-gray-50 rounded-xl shadow-inner border border-gray-200">
          <p className="mb-4 text-lg text-gray-700">
            Não foram encontrados posts
          </p>
          <Link
            to="/posts/create"
            className="inline-block px-6 py-3 bg-violet-600 text-white rounded-xl font-bold hover:bg-violet-700 transition"
          >
            Criar primeiro post
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto">
          {/* Cabeçalho */}
          <div className="grid grid-cols-[1fr_auto] gap-4 border-b border-gray-300 pb-3 mb-4 font-semibold text-gray-700">
            <span>Título</span>
            <span>Ações</span>
          </div>

          {/* Lista de posts */}
          {posts &&
            posts.map((post) => (
              <div
                key={post.id}
                className="grid grid-cols-[1fr_auto] gap-4 items-center py-3 border-b last:border-none border-gray-200"
              >
                <p className="truncate">{post.title}</p>
                <div className="flex gap-3">
                  <Link
                    to={`/posts/${post.id}`}
                    className="text-blue-600 hover:underline font-semibold"
                  >
                    Ver
                  </Link>
                  <Link
                    to={`/posts/edit/${post.id}`}
                    className="text-yellow-600 hover:underline font-semibold"
                  >
                    Editar
                  </Link>
                  <button
                    onClick={() => deleteDocument(post.id)}
                    className="text-red-600 hover:underline font-semibold"
                  >
                    Excluir
                  </button>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default Dashboard;
