import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Foto from "../../assets/images/p1.jpg"
import Foto1 from "../../assets/images/p2.jpg"
import Foto2 from "../../assets/images/p3.jpg"
import Foto3 from "../../assets/images/p4.jpg"
import Foto4 from "../../assets/images/p5.jpg"
import Foto5 from "../../assets/images/p6.jpg"
import Foto6 from "../../assets/images/p7.jpg"
import Foto7 from "../../assets/images/p8.jpg"


function PerangkatDesa() {
  return (
    <div className="flex flex-col min-h-screen">
        <div className="p-[20px] bg-white"></div>
      {/* Navbar */}
      <Navbar />
      <div className="p-[10rem] bg-gray-100">
        <div className="text-4xl font-semibold font-serif text-center">
          Perangkat Desa
        </div>
        </div>

      {/* Grid Container Baru */}
<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-[5rem]">
  {[
    { name: "JARKASIH", position: "KEPALA DESA", img: Foto },
    { name: "SABILUDIN, S.PD.I", position: "SEKRETARIS DESA", img: Foto1 },
    { name: "RINA ADRIYANTI", position: "KAUR KEUANGAN", img: Foto2 },
    { name: "ULFA AULINA", position: "KAUR KEUANGANKASI KESEJAHTERAAN RAKYAT", img: Foto3 },
    { name: "UJANG SUHANDI", position: "KAUR PERENCANAAN", img: Foto4 },
    { name: "DESKA ISKANDAR", position: "KAUR UMUM", img: Foto5 },
    { name: "ACIP SUHENDAR", position: "KASI PEMERINTAHAN", img: Foto6 },
    { name: "OMAH SRIHAYATINAH", position: "KASI PELAYANAN", img: Foto7 },
  ].map((person, index) => (
    <div
      key={index}
      className="flex items-center bg-white shadow-md rounded-lg p-4 space-x-4"
    >
      <img
        src={person.img}
        alt={person.name}
        className="w-20 h-20 rounded-full object-cover"
      />
      <div>
        <h3 className="text-lg font-bold text-gray-800">{person.name}</h3>
        <p className="text-gray-600">{person.position}</p>
      </div>
    </div>
  ))}
</div>
<Footer />  
</div>
  );
}

export default PerangkatDesa;
