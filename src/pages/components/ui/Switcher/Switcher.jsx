import Input from "../Input/Input";
import styles from "./Switcher.module.css";

/**
 * Компонент Switcher
 * Создает переключатель.
 *
 * @param {string} text - Текст рядом с переключателем.
 * @param {boolean} checked - Состояние чекбокса.
 * @param {Function} onChange - Обработчик изменения состояния чекбокса.
 */
export default function Switcher(props) {
  const { text, checked, onChange } = props;

  return (
    <div className={styles.container}>
      <Input
        type="checkbox"
        text={text}
        className={`${styles.input} ${styles.switch}`}
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
      />
    </div>
  );
}
