export const WrapperInput = ({
  children,
  label,
  htmlFor,
}: {
  children: React.ReactNode;
  label: string;
  htmlFor: string;
}) => {
  return (
    <div className={`flex flex-col gap-2`}>
      <label
        htmlFor={htmlFor}
        className={`size-auto font-medium text-muted-foreground`}
      >
        {"Tag <p> " + label}
      </label>
      {children}
    </div>
  );
};
