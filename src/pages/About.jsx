const About = () => {
  return (
    <section>
      <div>
        <h2>
          Sobre o <span>MiniBlog</span>
        </h2>
        <p>
          Este projeto é um MiniBlog desenvolvido com <strong>React</strong> no
          front-end e <strong>Firebase</strong> no back-end. Ele permite a
          criação, leitura e exclusão de posts, oferecendo uma experiência
          simples e funcional para prática de conceitos fundamentais em
          desenvolvimento web moderno.
        </p>

        <h3>Recursos do projeto</h3>
        <ul>
          <li>Autenticação de usuários com Firebase</li>
          <li>Criação de posts</li>
          <li>Design responsivo com CSS puro</li>
          <li>Publicação dinâmica de conteúdo</li>
        </ul>
      </div>

      <div>
        <h3>Contato</h3>
        <p>
          Para saber mais sobre mim, entre em contato ou visite minhas redes
          abaixo:
        </p>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/kauanlima-dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li>
            <a href="mailto:kauanalmeidalima1405@gmail.com">E-mail</a>
          </li>
          <li>
            <a
              href="https://github.com/kauannlima"
              target="_blank"
              rel="noopener noreferrer"
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
