export default function Ecommerce() {
  return (
    <main className="w-screen flex items-start justify-center">
      <div className="flex flex-col p-10 pb-36 w-full max-w-[700px]">
        <video autoPlay loop muted>
          <source
            width={"100%"}
            src="/videos/smallAdopteUnMeuble.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        <h1 className="font-instrument text-lightMode-text text-3xl mt-10">
          E-commerce store project
        </h1>
      </div>
    </main>
  );
}
