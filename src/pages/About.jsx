const About = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 my-10">
      <div className="mb-10">
        <h2 className="text-3xl font-extrabold text-violet-700 mb-4">
          Sobre o <span className="text-indigo-600">MiniBlog</span>
        </h2>
        <p className="text-gray-700 leading-relaxed">
          Este projeto é um MiniBlog desenvolvido com{" "}
          <strong className="text-violet-700">React</strong> no front-end e{" "}
          <strong className="text-violet-700">Firebase</strong> no back-end. Ele
          permite a criação, leitura e exclusão de posts, oferecendo uma
          experiência simples e funcional para prática de conceitos fundamentais
          em desenvolvimento web moderno.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4 text-gray-800">
          Recursos do projeto
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-600">
          <li>Autenticação de usuários com Firebase</li>
          <li>Criação de posts</li>
          <li>Design responsivo com CSS puro</li>
          <li>Publicação dinâmica de conteúdo</li>
        </ul>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4 text-gray-800">Contato</h3>
        <p className="mb-4 text-gray-700">
          Para saber mais sobre mim, entre em contato ou visite minhas redes
          abaixo:
        </p>
        <ul className="space-y-2 text-indigo-600 font-semibold">
          <li>
            <a
              href="https://www.linkedin.com/in/kauanlima-dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a
              href="mailto:kauanalmeidalima1405@gmail.com"
              className="hover:underline"
            >
              E-mail
            </a>
          </li>
          <li>
            <a
              href="https://github.com/kauannlima"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              GitHub
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
