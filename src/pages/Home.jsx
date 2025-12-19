import Hero from "../components/Hero";
import LayananUtama from "../components/LayananUtama";
import InformasiPemberitahuan from "../components/InformasiPemberitaan";
import PusatMedia from "../components/PusatMedia";
import DataTerkini from "../components/DataTerkini";
import SocialMedia from "../components/SocialMedia";

export default function Home() {
  return (
    <>
      <Hero />
      <LayananUtama />
      <InformasiPemberitahuan />
      <PusatMedia />
      <DataTerkini />
      <SocialMedia />
    </>
  );
}
