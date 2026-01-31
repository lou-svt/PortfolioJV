export default function Intro() {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-center lg:text-left">
 
     <div className="lg:w-1/3">
        <h1 className="bg-gradient-to-r from-neutral-900 from-15% to-neutral-500 bg-clip-text text-4xl lg:text-6xl font-medium text-transparent dark:from-neutral-50 dark:to-neutral-900">
          Welcome to my Website
        </h1>
        <p className="mt-4 text-neutral-500 dark:text-neutral-400">
          Designing clean interfaces that are fast, responsive, and easy to use.
        </p>

        <a
        href="/Jamaica_Vera_ComputerEngineeringResume.pdf"
        download
        className="mt-6 inline-block px-6 py-3 rounded-lg font-medium bg-gray-500 text-white dark:bg-gray-700 hover:bg-gray-600 dark:hover:bg-gray-500   hover:scale-105 hover:shadow-lg transition-transform duration-300">
        Download My Resume </a>
      </div>

          <div className="lg:w-1/3 flex justify-center">
        <img
          src="/me.jpg"
          alt="Jamaica Vera"
          className="w-48 lg:w-64 rounded-full border-4 border-neutral-500 dark:border-neutral-400 shadow-lg"
        />
      </div>

      <div className="lg:w-1/3">
        <h2 className="bg-gradient-to-r from-neutral-900 from-15% to-neutral-500 bg-clip-text text-3xl lg:text-5xl font-medium text-transparent dark:from-neutral-50 dark:to-neutral-900">
          I&apos;m Jamaica Vera
         <br />
          <span className="text-2xl lg:text-2xl font-normal">
            Frontend Developer
          </span>
        </h2>
        <p className="mt-4 text-neutral-500 dark:text-neutral-400">
          I enjoy turning ideas into smooth, functional designs using modern web technologies.
        </p>
      </div>

    </div>
  );
}
