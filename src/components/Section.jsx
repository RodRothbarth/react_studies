export function Section({ children, title, ...props }) {
  //{...props} should be used with props that exist in the tag u r using inside a component i.e.: className, id, onCLick. don't use custom props.
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
