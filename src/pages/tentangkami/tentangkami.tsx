import Navbar from "../../components/navbar";
import Foto from "../../assets/images/logot.jpg";
import Footer from "../../components/footer";
import UserProtect from "../../components/userProtect";
import { MapPinIcon, EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

function Tentangkami() {
  return (
    <UserProtect>
    <div>
      <Navbar />
      <div className="container mx-auto p-[5rem]">
        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto">
          {/* Grid Kiri */}
          <div className="md:col-span-1">
            <div className="text-center mb-4 p-4 border rounded-lg shadow">
              <img
                src={Foto}
                alt="Foto Kantor"
                className="w-full h-auto rounded-lg mb-4"
              />
              <h2 className="text-xl font-semibold">SUKAWENING</h2>
              <p className="text-gray-600">BOGOR</p>
            </div>
            {/* Kotak Informasi Kantor */}
            <div className="p-4 border rounded-lg shadow">
              <h3 className="text-lg font-semibold mb-2">Kantor</h3>
              <div className="flex items-center mb-2">
                <MapPinIcon className="w-6 h-6 text-gray-500 mr-2" />
                <p className="text-gray-700">
                  <strong>Alamat:</strong> Jl. Contoh No. 123, Jakarta, Indonesia
                </p>
              </div>
              <div className="flex items-center mb-2">
                <EnvelopeIcon className="w-6 h-6 text-gray-500 mr-2" />
                <p className="text-gray-700">
                  <strong>Kode Pos:</strong> 12345
                </p>
              </div>
              <div className="flex items-center">
                <PhoneIcon className="w-6 h-6 text-gray-500 mr-2" />
                <p className="text-gray-700">
                  <strong>No Telp:</strong> +62 21 12345678
                </p>
              </div>
            </div>
          </div>
          {/* Grid Kanan */}
          <div className="md:col-span-2 flex flex-col mt-[5 rem] items-center">
            <h1 className="text-2xl font-bold mb-4">Tentang Kami</h1>
            
        <p className="text-gray-700 text-left my-4">
  Desa Sukawening adalah salah satu desa yang sebelumnya termasuk bagian dari Kecamatan Ciomas, 
  pada saat itu nama Desa Sukawening adalah Desa Cilubang, kemudian Desa Cilubang dilakukan pemekaran menjadi 
  2 Desa yaitu Desa Sukawening dan Desa Sukadamai.
        </p>

        <p className="text-gray-700 text-left my-4">
        Menurut cerita dari pendahulu kami, dan berdasarkan data yang ada sebelumnya,
        Desa kami Diberi nama Desa Sukawening karena pada saat itu masyarakat Desa kami
        Cinta Akan Kebersihan, Kata Sukawening adalah Hasil penggabungan dua kata dari
        bahasa sunda, yaitu Suka yang berarti Cinta, dan Wening yang berarti bersih.
        Sehingga bila dilakukan penggabungan dari dua kata tersebut maka terbentuklah
        satu kata baru yaitu Sukawening yang artinya Cinta akan kebersihan. Makna bersih
        dalam kata Wening tersebut bersifat umum, artinya Masyarakat Desa kami sangat 
        mencitai kebersihan dalam segala hal/bidang.
        </p>

        <p className="text-gray-700 text-left my-4">
        Pada Tahun 1975, ketika Desa Cilubang yang termasuk bagian dari Kecamatan
        Ciomas mengalami pemekaran menjadi dua Desa, maka pada saat itulah Desa 
        Sukawening terbentuk. Dan setelah sebelumnya Kecamatan Dramaga disebut 
        sebagai perwakilan Kecamatan Dramaga ( Kemantren Dramaga ) yang pembentukannya
        berdasarkan SK Gubernur Kepala Derah Tingkat I Jawa Barat pada tanggal 14 Agustus
        1981 yang merupakan bagian dari Kecamatan Ciomas, Selanjutnya berdasarkan Peraturan
        Pemerintah Nomor 48 tahun 1993 tanggal 26 mei 1993 tentang pembentukan 14 Kecamatan
        di Wilayah Kabupaten Bogor, salah satunya adalah Kecamatan Dramaga, dan pada saat 
        itu Desa Sukawening Resmi menjadi bagian dari Kecamatan Dramaga yang meliputi 10 Desa,
        yaitu Desa Sukawening, Sukadamai, Ciherang, Sinarsari, Neglasari, Purwasari, Petir,
        Babakan, Cikarawang, dan Desa Dramaga, dan masih berlangsung sampai saat ini.
        </p>

          </div>
        </div>
      </div>
      <Footer />
    </div>
    </UserProtect>
  );
}

export default Tentangkami;
