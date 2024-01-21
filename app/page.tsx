import Header from "./_components/Header";
import Editor from "./_components/editor/Editor";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full h-full">
        <Editor />
      </main>
    </>
  );
}
