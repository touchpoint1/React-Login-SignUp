import { Footer, Navbar } from "components";

const ClientLayout = ({ children }) => {
  return (
    <section className="w-screen h-full min-h-screen relative overflow-hidden">
      <Navbar />
      <main className="w-full max-w-screen-xl p-4 lg:px-8 mx-auto mt-16">
        {children}
      </main>
      <Footer />
    </section>
  );
};

export default ClientLayout;
