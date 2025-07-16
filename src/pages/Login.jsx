import { useAuthentication } from "../hooks/useAuthentication";
import { useState, useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    const user = { email, password };
    await login(user);
  };

  useEffect(() => {
    if (authError) setError(authError);
  }, [authError]);

  return (
    <div className="min-h-[80vh] w-screen flex items-start justify-center bg-white px-4 pt-16">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl py-8 px-6 border border-gray-200">
        {/* Título */}
        <h1 className="text-3xl font-extrabold text-violet-700 text-center mb-6">
          Acesse sua conta
        </h1>
        <p className="text-sm text-violet-500 text-center mb-8">
          Faça login para continuar
        </p>

        {/* Formulário */}
        <form onSubmit={handleSubmit} className="space-y-7">
          {/* E-mail */}
          <div>
            <label className="block text-sm text-gray-700 mb-2 font-semibold">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition"
            />
          </div>

          {/* Senha */}
          <div>
            <label className="block text-sm text-gray-700 mb-2 font-semibold">
              Senha
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition"
            />
          </div>

          {/* Espaço fixo para mensagem de erro */}
          <div className="min-h-[24px] text-center text-sm">
            {error && <p className="text-red-600">{error}</p>}
          </div>

          {/* Botão ou Loader com espaço fixo */}
          <div className="h-[48px] flex justify-center items-center">
            {!loading ? (
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 via-purple-700 to-indigo-600 text-white py-3 rounded-xl shadow-lg hover:shadow-violet-400 hover:scale-[1.03] transform transition-all font-extrabold text-lg"
              >
                Entrar
              </button>
            ) : (
              <OrbitProgress
                color="#7C3AED"
                size="medium"
                text=""
                textColor=""
              />
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
