import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import UserProtect from "../../components/userProtect"

function Sejarahdesa() {
    return (
        <UserProtect>
    <div>
            <Navbar />
        <div className="p-[1rem] bg-white"></div>
            <div className="p-[10rem] bg-gray-300">
                <div className="text-4xl font-semibold font-serif text-center">
                                Struktur Organisasi
                </div>
            </div>
      <Footer />
    </div>
    </UserProtect>
    );
}

export default Sejarahdesa;