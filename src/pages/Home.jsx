import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LayananUtama from "../components/LayananUtama";
import InformasiPemberitahuan from "../components/InformasiPemberitaan";
import PusatMedia from "../components/PusatMedia";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LayananUtama />
      <InformasiPemberitahuan />
      <PusatMedia />

    </>
  );
}
