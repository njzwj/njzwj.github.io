export default function Body(
  { children }: Readonly<{ children: React.ReactNode; }>
) {
  return (
    <div className="container max-w-screen-lg px-6 mx-auto">
      {children}
    </div>
  );
}