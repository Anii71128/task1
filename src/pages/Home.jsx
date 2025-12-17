import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LayananUtama from "../components/LayananUtama";
import InformasiPemberitahuan from "../components/InformasiPemberitaan";
import PusatMedia from "../components/PusatMedia";
import DataTerkini from "../components/DataTerkini";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <LayananUtama />
      <InformasiPemberitahuan />
      <PusatMedia />
      <DataTerkini />
      <SocialMedia />
      <Footer />

    </>
  );
}
