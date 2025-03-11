import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import '../styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/Arsalan0786" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://linkedin.com/in/sheikharsalan8146" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
        <a href="mailto:your.sheikharsalan8146@example.com">
          <MdEmail />
        </a>
      </div>
      <p>&copy; 2024 Your Name. All rights reserved.</p>
    </footer>
  );
};

export default Footer; 