export default function Home() {
  return (
    <div
      className="flex flex-col bg-[url('https://www.softclinicsoftware.com/wp-content/uploads/2022/04/digital-composite-doctor-with-white-graph-with-flare-against-blurry-background-with-light-blue-overlay.jpg')] bg-cover bg-center h-screen w-screen justify-center items-center"
    >
      <div className="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl p-10 max-w-2xl text-center shadow-2xl">
        <h1 className="text-white font-mono font-semibold text-4xl md:text-6xl drop-shadow-lg">
          Hospitalo
        </h1>
        <p className="text-lg md:text-2xl text-white/90 mt-4 leading-relaxed">
          Your one-stop solution for{" "}
          <span className="font-semibold">hospital management</span> needs.
          Streamline, organize, and save lives with efficiency.
        </p>
        <button className="text-2xl text-white p-3 m-2 border border-white/10 rounded-3xl shadow-2xl bg-gradient-to-br from-blue-600 via-blue-500 to-blue-400 cursor-pointer hover:scale-105 transition-all duration-300">
          Get Started
        </button>
      </div>
      <p className="absolute bottom-2 text-white/70 text-sm">
        Made by {""}
        <a
          href="https://tiyas.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono hover:text-white"
        >
          Tiyas
        </a>
      </p>
    </div>
  );
}

