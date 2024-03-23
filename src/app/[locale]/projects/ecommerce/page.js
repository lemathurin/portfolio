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
        <h1 className="font-instrument text-lightMode-text text-5xl mt-10">
          E-commerce store project
        </h1>
        <h3 className="font-inter text-lightMode-text text-xl font-semibold">
          school project
        </h3>
        <h3 className="font-inter text-lightMode-text text-xl font-semibold">
          04/03/2024 -&gt; 14/03/2024
        </h3>
        <a
          href="https://github.com/adatechschool/projet-collectif-plateforme-de-meubles-adopte-un-meuble"
          className="font-inter text-lightMode-hoveredtext hover:text-lightMode-text hover:underline text-xl font-semibold"
        >
          View Github repository
        </a>
        <p className="font-inter text-lightMode-text text-lg">
          The goal of this project was to have us organize ourselves in front
          and back-end teams and ensure the delivery of the website. Aute
          laborum et non do aliqua. Ea sunt culpa exercitation magna. Excepteur
          eu est Lorem ut aliqua quis deserunt. Veniam velit minim eu tempor eu
          ipsum.
        </p>
        <h2 className="font-instrument text-lightMode-text text-4xl">
          Tech stack and tools
        </h2>
        <ul className="font-inter text-lightMode-text text-lg">
          <li>Figma</li>
          <li>React Vite</li>
          <li>Shadcn/ui</li>
          <li>Tailwindcss</li>
          <li>Supabase</li>
          <li>Express.js</li>
        </ul>
        <h2 className="font-instrument text-lightMode-text text-4xl">
          Teammates
        </h2>
        <ul>
          <li class="font-inter text-lightMode-hoveredtext hover:text-lightMode-text hover:underline text-lg">
            <a href="link-to-figma">Audrey Gueguen</a>
          </li>
          <li class="font-inter text-lightMode-hoveredtext hover:text-lightMode-text hover:underline text-lg">
            <a href="link-to-react-vite">Tianhong Huang</a>
          </li>
          <li class="font-inter text-lightMode-hoveredtext hover:text-lightMode-text hover:underline text-lg">
            <a href="link-to-shadcn-ui">Fabienne Lis</a>
          </li>
          <li class="font-inter text-lightMode-hoveredtext hover:text-lightMode-text hover:underline text-lg">
            <a href="link-to-tailwindcss">Marie Lelamer</a>
          </li>
          <li class="font-inter text-lightMode-hoveredtext hover:text-lightMode-text hover:underline text-lg">
            <a href="link-to-supabase">Alexis Moulliere</a>
          </li>
          <li class="font-inter text-lightMode-hoveredtext hover:text-lightMode-text hover:underline text-lg">
            <a href="link-to-express-js">Anna Tehiva</a>
          </li>
          <li class="font-inter text-lightMode-hoveredtext hover:text-lightMode-text hover:underline text-lg">
            <a href="link-to-figma">Yannick Oudin</a>
          </li>
          <li class="font-inter text-lightMode-hoveredtext hover:text-lightMode-text hover:underline text-lg">
            <a href="link-to-figma">Florentin Corbiat</a>
          </li>
          <li class="font-inter text-lightMode-hoveredtext hover:text-lightMode-text hover:underline text-lg">
            <a href="link-to-figma">Maguelone Guinaud</a>
          </li>
        </ul>
      </div>
    </main>
  );
}
