import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  return (
    <>
    <div className="flex flex-col"></div>
      <Header />
      <main className="flex min-h-screen">
        <Video />
        <Sidebar />
      </main>
    </>
  );
}
