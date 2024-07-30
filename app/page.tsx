import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>main page!!!</h1>
      <div>
        <Link href={"map"}>MapPage</Link>
      </div>
    </div>
  );
}
