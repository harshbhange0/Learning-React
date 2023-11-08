import InputBox from "./components/InputBox";

export default function App() {
  return (
    <div className="flex items-center flex-col justify-center h-screen bg-gradient-to-r from-[#1D267D] to-[#5C469C]">
      <h1 className="text-3xl font-semibold text-white mb-10">PassWord Generator</h1>
      <InputBox />
    </div>
  );
}
