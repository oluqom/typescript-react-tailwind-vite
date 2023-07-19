import { FC } from "react";

const Home: FC = () => {
  return (
    <>
      <section>
        <div className="hero min-h-[calc(100vh-64px)] bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src="/images/hero.webp"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Welcome</h1>
              <p className="py-5">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quia
                minima laboriosam maxime sed dignissimos harum provident itaque
                fugiat. A repellat aliquid inventore dolor tempora, omnis
                perferendis aspernatur quo nisi excepturi. Ex, ullam odio iusto
                esse necessitatibus doloremque repudiandae!
              </p>
              <button className="btn-primary btn">Get Started</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
