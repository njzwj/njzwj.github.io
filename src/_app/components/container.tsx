type Props = {
 children?: React.ReactNode;
};

// This is container for main content.
const Container = ({ children }: Props) => {
  return (
    <div className="container mx-auto px-5">
      {children}
    </div>
  );
};

export default Container;
