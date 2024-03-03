import svgUrl from "assets/svg/login.svg";

const AuthLayout = ({ children }) => {
  return (
    <main className="w-screen h-full min-h-screen relative overflow-hidden">
      {children}
    </main>
  );
};

export default AuthLayout;
