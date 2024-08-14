export function TabButton({ children, onClick, isSelected }) {
  console.log(isSelected);
  return (
    <li>
      <button className={isSelected && "active"} onClick={onClick}>
        {children}
      </button>
    </li>
  );
}
