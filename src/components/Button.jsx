import { Link } from "react-router-dom";
import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, white, isLoading }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${
    px || "px-7"
  } ${white ? "text-n-8" : "text-n-1"} ${className || ""} ${
    isLoading ? "opacity-50 cursor-not-allowed" : ""
  }`;
  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button type="submit" className={classes} onClick={onClick} disabled={isLoading}>
      <span className={spanClasses}>
        {isLoading ? (
          <div className="spinner-text">
          <div className="spinner"></div>
          Please wait...
        </div>
        ) : (
          children
        )}
      </span>
      {ButtonSvg(white)}
    </button>
  );

  const renderLink = () => (
    <Link to={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </Link>
  );

  return href ? renderLink() : renderButton();
};

export default Button;