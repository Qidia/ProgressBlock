import Input from "../Input/Input";
import styles from "./Switcher.module.css";

/**
 * Компонент Switcher
 * Создает переключатель.
 *
 * @param {string} text - Текст рядом с переключателем.
 * @param {boolean} state - Начальное состояние переключателя.
 */
export default function Switcher(props) {
  const { text, state } = props;

  return (
    <div className={styles.container}>
      <Input
        type="checkbox"
        text={`${text}`}
        className={`${styles.input} ${styles.switch}`}
      />
    </div>
  );
}
