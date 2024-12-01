import styles from "./Input.module.css";

/**
 * Компонент Input
 * Отображает кастомный инпут с текстовой меткой.
 *
 * @param {string} text - Текст.
 * @param {string} type - Тип инпута .
 * @param {boolean} checked - Контроль состояния.
 * @param {Function} onChange - Обработчик изменения состояния.
 * @param {string} className - Дополнительные классы.
 */
export default function Input(props) {
  const { text, type, className, checked, onChange } = props;
  return (
    <>
      <div>
        <input
          className={`${styles.input} ${className}`}
          type={type}
          checked={checked}
          onChange={onChange}
        />
        <label>{text}</label>
      </div>
    </>
  );
}
