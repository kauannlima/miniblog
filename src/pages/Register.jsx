import { useAuthentication } from "../hooks/useAuthentication";
import { useState, useEffect } from "react";
import { OrbitProgress } from "react-loading-indicators";

const Register = () => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const { createUser, error: authError, loading } = useAuthentication();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");

    if (password !== confirmPassword) {
      setError("As senhas precisam ser iguais!");
      return;
    }

    const user = {
      displayName,
      email,
      password,
    };

    await createUser(user);
  };

  useEffect(() => {
    if (authError) {
      setError(authError);
    }
  }, [authError]);

  return (
    <div className="min-h-[80vh] w-screen flex items-start justify-center bg-white px-4 pt-12">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl py-8 px-6 border border-gray-200">
        <h1 className="text-3xl font-extrabold text-violet-700 text-center mb-6">
          Cadastra-se para postar
        </h1>

        <p className="text-sm text-violet-500 text-center mb-8">
          Crie seu usuário e compartilhe suas histórias
        </p>

        <form className="space-y-7" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-gray-700 mb-2 font-semibold">
              Nome
            </label>
            <input
              type="text"
              name="displayName"
              required
              placeholder="Nome do usuário"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2 font-semibold">
              E-mail
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="E-mail do usuário"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2 font-semibold">
              Senha
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Insira sua senha"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-700 mb-2 font-semibold">
              Confirmação de senha
            </label>
            <input
              type="password"
              name="confirmPassword"
              required
              placeholder="Confirme a sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full px-5 py-3 border border-gray-300 rounded-xl bg-gray-50 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-4 focus:ring-violet-300 transition"
            />
          </div>

          {/* Espaço fixo para mensagem de erro */}
          <div className="min-h-[24px] text-center">
            {error && <p className="text-red-600 text-sm">{error}</p>}
          </div>

          {/* Botão ou Loader com espaço fixo */}
          <div className="h-[48px] flex justify-center items-center">
            {!loading ? (
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-violet-600 via-purple-700 to-indigo-600 text-white py-3 rounded-xl shadow-lg hover:shadow-violet-400 hover:scale-[1.03] transform transition-all font-extrabold text-lg"
              >
                Cadastrar
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

export default Register;
