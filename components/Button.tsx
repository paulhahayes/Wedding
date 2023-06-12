import styles from "./button.module.css";
import Link from "next/link";

interface ButtonProps {
  text: string;
  url: string;
}

const Button: React.FC<ButtonProps> = ({ text, url }) => {
  return (
    <Link href={url}>
      <div className={styles.container}>{text}</div>
    </Link>
  );
};

export default Button;
