const Footer = () => {
  return (
    <footer className="w-full mt-10 py-6  bg-white shadow-inner">
      <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left">
        <p className="text-sm text-gray-500">
          © {new Date().getFullYear()} Mini Blog. Todos os direitos reservados.
        </p>
        <p className="text-sm text-violet-600 font-semibold mt-2 sm:mt-0">
          Criado por Kauan 💻
        </p>
      </div>
    </footer>
  );
};

export default Footer;
