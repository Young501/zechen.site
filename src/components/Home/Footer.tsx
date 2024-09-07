interface FooterProp {
  path?: string;
}

const Footer = async (prop: FooterProp) => {
  return (
    <footer className="relative text-xs text-center px-6 py-2 primary-text">
      <div>
       - version 1.0.0 - Built by Zechen Yang ©️ 2024 - {new Date().getFullYear()}
      </div>
    </footer>
  );
};

export default Footer;
