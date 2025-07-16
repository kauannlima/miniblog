import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthValue } from "../context/AuthContext";
import { useInsertDocument } from "../hooks/useInsertDocument";
import { OrbitProgress } from "react-loading-indicators";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState("");
  const [formError, setFormError] = useState("");

  const { user } = useAuthValue();
  const { insertDocument, response } = useInsertDocument("posts");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormError("");

    // VALIDATE IMAGE URL
    try {
      new URL(image);
    } catch (error) {
      setFormError("A imagem precisa ser uma URL válida.");
      return;
    }

    // CRIAR O ARRAY DE TAGS
    const tagsArray = tags.split(",").map((tag) => tag.trim().toLowerCase());

    // CHECAR TODOS OS VALORES
    if (!title || !image || !tags || !body) {
      setFormError("Por favor, preencha todos os campos!");
      return;
    }

    insertDocument({
      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    });

    // REDIRECT TO HOME PAGE
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-10">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-10 border border-gray-200">
        <h2 className="text-3xl font-extrabold text-violet-700 mb-4 text-center">
          Criar Post
        </h2>
        <p className="text-sm text-violet-500 mb-8 text-center">
          Escreva sobre o que quiser e compartilhe o seu conhecimento!
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Título:
            </label>
            <input
              type="text"
              name="title"
              required
              placeholder="Pense num bom título..."
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              URL da imagem:
            </label>
            <input
              type="text"
              name="image"
              required
              placeholder="Insira uma imagem que representa o seu post"
              onChange={(e) => setImage(e.target.value)}
              value={image}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Conteúdo:
            </label>
            <textarea
              name="body"
              required
              placeholder="Insira o conteúdo do post"
              onChange={(e) => setBody(e.target.value)}
              value={body}
              rows={6}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition resize-none"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">
              Tags:
            </label>
            <input
              type="text"
              name="tags"
              required
              placeholder="Insira as tags separadas por vírgula"
              onChange={(e) => setTags(e.target.value)}
              value={tags}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition"
            />
          </div>

          {/* Mensagens de erro */}
          {formError && (
            <p className="text-center text-red-600 font-semibold">
              {formError}
            </p>
          )}
          {response.error && (
            <p className="text-center text-red-600 font-semibold">
              {response.error}
            </p>
          )}

          {/* Botão ou loading */}
          <div className="h-12 flex justify-center items-center">
            {!response.loading ? (
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 via-purple-700 to-indigo-600 text-white py-3 rounded-xl shadow-lg hover:shadow-violet-400 hover:scale-[1.03] transform transition-all font-extrabold text-lg"
              >
                Cadastrar
              </button>
            ) : (
              <OrbitProgress color="#7C3AED" size="medium" />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatePost;
