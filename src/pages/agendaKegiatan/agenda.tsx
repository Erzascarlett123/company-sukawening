import Footer from "../../components/footer";

type Agenda = {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
};

const agendaData: Agenda[] = [
  {
    id: 1,
    title: "Rapat Bulanan",
    date: "12 Desember 2024",
    location: "Balai Desa",
    description: "Rapat bulanan untuk membahas perkembangan desa.",
  },
  {
    id: 2,
    title: "Pemberian Bantuan Sosial",
    date: "15 Desember 2024",
    location: "Kantor Kelurahan",
    description: "Distribusi bantuan sosial kepada warga yang membutuhkan.",
  },
  {
    id: 3,
    title: "Pelatihan Kewirausahaan",
    date: "20 Desember 2024",
    location: "Gedung Serbaguna",
    description: "Pelatihan kewirausahaan untuk pemuda desa.",
  },
];

const Agenda: React.FC = () => {
  return (
      <div className="bg-gray-100 min-h-screen flex flex-col">
        <div className="p-[40px]"></div>
      <div className="flex-1 py-10 px-5">
        <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
          Agenda Desa
        </h1>
        <div className="space-y-8">
          {agendaData.map((agenda) => (
            <div
              key={agenda.id}
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-103 hover:shadow-xl"
            >
              <h2 className="text-2xl font-semibold text-indigo-600">{agenda.title}</h2>
              <p className="text-gray-600">{agenda.date}</p>
              <p className="text-gray-500">{agenda.location}</p>
              <p className="text-gray-700 mt-4">{agenda.description}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Agenda;
