import styles from "./Input.module.css";

/**
 * Компонент Input
 * Отображает кастомный инпут с текстовой меткой.
 *
 * @param {string} text - Текст.
 * @param {string} type - Тип инпута .
 * @param {string} className - Дополнительные классы.
 */
export default function Input(props) {
  const { text, type, className } = props;
  return (
    <>
      <div>
        <input className={`${styles.input} ${className}`} type={`${type}`} />
        <label>{`${text}`}</label>
      </div>
    </>
  );
}
