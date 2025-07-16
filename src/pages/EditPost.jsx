import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useUpdateDocument } from "../hooks/useUpdateDocument";
import { useFetchDocument } from "../hooks/useFetchDocument";
import { OrbitProgress } from "react-loading-indicators";

const EditPost = () => {
  const { id } = useParams();
  const { document: post } = useFetchDocument("posts", id);

  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();
  const { updateDocument, response } = useUpdateDocument("posts");

  const navigate = useNavigate();

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);
      setTags(post.tagsArray.join(", "));
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // Validar URL da imagem
    try {
      new URL(image);
    } catch {
      setFormError("A imagem precisa ser uma URL válida.");
      return;
    }

    // Criar array de tags
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // Validar campos obrigatórios
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
      return;
    }

    const data = {
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    };

    updateDocument(id, data);
    navigate("/dashboard");
  };

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-600">Carregando post...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white px-4 py-8 max-w-3xl mx-auto">
      <h2 className="text-3xl font-extrabold text-violet-700 mb-4">
        Editando Post: {post.title}
      </h2>
      <p className="mb-8 text-gray-700">
        Altere os dados do post como desejar!
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block">
          <span className="block font-semibold mb-2 text-gray-700">
            Título:
          </span>
          <input
            type="text"
            name="title"
            required
            placeholder="Pense num bom título..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition"
          />
        </label>

        <label className="block">
          <span className="block font-semibold mb-2 text-gray-700">
            URL da imagem:
          </span>
          <input
            type="text"
            name="image"
            required
            placeholder="Insira uma imagem que representa o seu post"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition"
          />
        </label>

        <p className="mb-4 text-gray-600 font-semibold">
          Preview da imagem atual:
        </p>
        <img
          src={post.image}
          alt={post.title}
          className="w-full max-w-md rounded-lg mb-8 shadow-md"
        />

        <label className="block">
          <span className="block font-semibold mb-2 text-gray-700">
            Conteúdo:
          </span>
          <textarea
            name="body"
            required
            placeholder="Insira o conteúdo do post"
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={8}
            className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition resize-none"
          />
        </label>

        <label className="block">
          <span className="block font-semibold mb-2 text-gray-700">Tags:</span>
          <input
            type="text"
            name="tags"
            required
            placeholder="Insira as tags separadas por vírgula"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition"
          />
        </label>

        {/* Mensagens de erro */}
        {formError && <p className="text-red-600 text-center">{formError}</p>}
        {response.error && (
          <p className="text-red-600 text-center">{response.error}</p>
        )}

        {/* Botão ou loading */}
        <div className="flex justify-center">
          {!response.loading ? (
            <button
              type="submit"
              className="w-full max-w-sm bg-gradient-to-r from-violet-600 via-purple-700 to-indigo-600 text-white py-3 rounded-xl shadow-lg hover:shadow-violet-400 hover:scale-[1.03] transform transition-all font-extrabold text-lg"
            >
              Alterar
            </button>
          ) : (
            <OrbitProgress color="#7C3AED" size="medium" />
          )}
        </div>
      </form>
    </div>
  );
};

export default EditPost;
