import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
  const { slug } = useParams<{ slug: string }>();
  
  return (
    <>
      <div className="flex flex-col"></div>
      <Header />
      <main className="flex min-h-screen">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1">  </div>}
        <Sidebar />
      </main>
    </>
  );
}
