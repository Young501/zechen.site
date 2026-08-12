const Footer = async () => {
  return (
    <footer className="relative px-6 py-3 text-center text-xs primary-text">
      <div className="tracking-wide text-slate-400">
        version 1.1.0 - Built by Zechen Yang (c) 2024 - {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
