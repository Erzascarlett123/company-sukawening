import Navbar from "../../components/navbar";
import Foto from "../../assets/images/visimisi.jpg"; // Contoh gambar logo
import Footer from "../../components/footer";

function Visimisi() {
    return (
        <div>
            <Navbar />
            <div className="p-[1rem] bg-white"></div>

            {/* Bagian Struktur Organisasi */}
            <div className="p-[10rem] bg-gray-300">
                <div className="text-4xl font-semibold font-serif text-center">
                    Struktur Organisasi
                </div>
            </div>

            {/* Grid Visi dan Misi di Luar Struktur Organisasi */}
            <div className="p-[5rem] bg-white flex justify-center">
                {/* Perkecil ukuran kotak grid dengan border rata */}
                <div className="w-full max-w-3xl bg-white-300 p-6 rounded-lg shadow-lg border-2 border-gray-500">
                    {/* Logo Visi Misi - Pindah ke kiri */}
                    <div className="flex justify-start mb-8">
                        <img 
                            src={Foto} 
                            alt="Logo Visi Misi" 
                            className="w-40 h-40 object-contain" 
                        />
                    </div>

                    {/* Visi Section */}
                    <div className="mb-6">
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Visi</h2>
                        <p className="text-gray-700 leading-relaxed" >
                            Terbangunnya Tata Kelola Pemerintahan Yang Baik Dan Bersih Guna
                            Mewujudkan Kehidupan Masyarakat Desa Sukawening Yang Adil, Makmur Sejahtera, maju dan mandiri.
                        </p>
                    </div>

                    {/* Misi Section */}
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-gray-800">Misi</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed">
                            <li>Melakukan reformasi sistem kinerja aparatur pemerintah desa guna meningkatkan kualitas pelayanan kepada masyarakat;</li>
                            <li>Menyelenggarakan pemerintahan yang bersih, terbebas dari korupsi serta bentuk-bentuk penyelewengan lainnya;</li>
                            <li>Menyelenggarakan urusan pemerintahan desa secara terbuka dan bertanggung jawab sesuai dengan peraturan perundang-undangan;</li>
                            <li>Meningkatkan perekonomian masyarakat melalui pendampingan berupa penyuluhan khusus kepada UKM, wiraswasta, dan para petani;</li>
                            <li>Meningkatkan mutu kesejahteraan masyarakat untuk mencapai taraf kehidupan yang lebih baik dan layak sehingga menjadi desa yang maju dan mandiri;</li>
                            <li>Membangkitkan kembali sarana olahraga sepak bola, bulu tangkis, bola voli, dan lainnya.</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}

export default Visimisi;
