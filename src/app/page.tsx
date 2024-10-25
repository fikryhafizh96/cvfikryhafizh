import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import "./en-style.css";
import MySkills from "./components/skills";
import "./components/skills.css";

export default function CVonline() {
  return(
    <section>
      <Hero />
      <RiwayatPendidikan />
      <RiwayatPekerjaan />
      <MySkills />
    </section>  
  );
}
