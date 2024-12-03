import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Logo1 from "../../assets/images/lem1.jpg"; // Ganti dengan path logo yang sesuai
import Logo2 from "../../assets/images/lem2.jpg"; // Ganti dengan path logo yang sesuai
import Logo3 from "../../assets/images/lem3.jpg"; // Ganti dengan path logo yang sesuai
import Logo4 from "../../assets/images/lem4.jpg"; // Ganti dengan path logo yang sesuai
import UserProtect from "../../components/userProtect";


function LembagaDesa() {
  return (
    <UserProtect>

    <div>
      {/* Navbar */}
      <Navbar />
      
      {/* Konten Utama */}
      <div className="p-[10rem] bg-gray-300">
        <h1 className="text-4xl font-semibold font-serif text-center">Lembaga Desa</h1>
      </div>

      {/* Garis Panjang di Tengah */}
      <div className="flex items-center justify-center mt-10 p-[2rem]">
        <hr className="w-[120rem] border-t-[5px] border-gray-300" />
      </div>

      {/* Tabel Lembaga */}
      <div className="overflow-x-auto mb-12">
        <table className="min-w-1/2 table-auto border-collapse mx-auto"> {/* Tabel di tengah */}
          <thead>
            <tr className="border-b bg-gray-100">
              <th className="px-4 py-2 text-left text-lg font-semibold">Nama Lembaga</th>
              <th className="px-4 py-2 text-left text-lg font-semibold">Alamat Kantor</th>
              <th className="px-4 py-2 text-left text-lg font-semibold">Logo Lembaga</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b">
              <td className="px-4 py-2">BADAN PERMUSYAWARATAN DESA (BPD)</td>
              <td className="px-4 py-2">Jl. Cimoboran-Kelapa Tujuh RT. 01/01 Desa Sukawening Dramaga Bogor</td>
              <td className="px-4 py-2">
                <img src={Logo1} alt="Logo Lembaga" className="w-16 h-16 rounded-full" />
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">LEMBAGA PEMBERDAYAAN MASYARAKAT (LPPM)</td>
              <td className="px-4 py-2">Jl. Cimoboran RT.01/01 Desa Sukawening Kecamatan Dramaga</td>
              <td className="px-4 py-2">
                <img src={Logo2} alt="Logo Lembaga" className="w-16 h-16 rounded-full" />
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">PEMBERDAYAAN KESEJAHTERAAN KELUARGA PKK</td>
              <td className="px-4 py-2">Jl. Cimoboran - Kelapa Tujuh RT. 01/01 Desa Sukawening Kecamatan Dramaga Bogor</td>
              <td className="px-4 py-2">
                <img src={Logo3} alt="Logo Lembaga" className="w-16 h-16 rounded-full" />
              </td>
            </tr>
            <tr className="border-b">
              <td className="px-4 py-2">RUKUN WARGA RW</td>
              <td className="px-4 py-2"></td>
              <td className="px-4 py-2">
                <img src={Logo4} alt="Logo Lembaga" className="w-16 h-16 rounded-full" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer */}
      <Footer />
    </div>
    </UserProtect>
  );
}

export default LembagaDesa;
