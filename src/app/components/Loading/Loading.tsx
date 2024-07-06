import { PropagateLoader } from "react-spinners";

export default function LoadingPage() {
  return (
    <main className="h-screen w-screen flex flex-col bg-secondary-cadmium-green justify-center items-center">
      <PropagateLoader color="#F1DABF" size={25} />
    </main>
  );
}
