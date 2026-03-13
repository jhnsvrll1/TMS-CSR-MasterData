import Searchbar from "../component/Searchbar";
import { useState } from "react";

function BusinessSector() {
    const [bSector, setBSector] = useState([
        {
            id: 1,
            kode: "",
            name: "Pertanian, Kehutanan & Perikanan",
            description: "Pertanian, Kehutanan & Perikanan",
        },
        {
            id: 2,
            kode: "",
            name: "Pertambangan & Penggalian",
            description: "Pertambangan & Penggalian",
        },
        {
            id: 3,
            kode: "",
            name: "Industri Pengolahan",
            description: "Industri Pengolahan",
        },
        {
            id: 4,
            kode: "",
            name: "Pengadaan Listrik, Gas, Uap",
            description: "Pengadaan Listrik, Gas, Uap",
        },
        {
            id: 5,
            kode: "",
            name: "Pengadaan Air, Pengelolaan Sampah, Limbah & Daur Ulang",
            description: "Pengadaan Air, Pengelolaan Sampah, Limbah & Daur Ulang",
        },
        {
            id: 6,
            kode: "",
            name: "Konstruksi",
            description: "Konstruksi",
        },
        {
            id: 7,
            kode: "",
            name: "Perdagangan Besar & Eceran; Reparasi Mobil & Sepeda Motor",
            description: "Perdagangan Besar & Eceran; Reparasi Mobil & Sepeda Motor",
        },
        {
            id: 8,
            kode: "",
            name: "Transportasi & Pergudangan",
            description: "Transportasi & Pergudangan",
        },
        {
            id: 9,
            kode: "",
            name: "Penyediaan Akomodasi & Makan Minum",
            description: "Penyediaan Akomodasi & Makan Minum",
        },
        {
            id: 10,
            kode: "",
            name: "Informasi & Komunikasi",
            description: "Informasi & Komunikasi",
        },
        {
            id: 11,
            kode: "",
            name: "Jasa Keuangan & Asuransi",
            description: "Jasa Keuangan & Asuransi",
        },
        {
            id: 12,
            kode: "",
            name: "Real Estate",
            description: "Real Estate",
        },
        {
            id: 13,
            kode: "",
            name: "Jasa Profesional, Ilmiah & Teknis",
            description: "Jasa Profesional, Ilmiah & Teknis",
        },
        {
            id: 14,
            kode: "",
            name: "Jasa Persewaan & Sewa Guna Usaha",
            description: "Jasa Persewaan & Sewa Guna Usaha",
        },
        {
            id: 15,
            kode: "",
            name: "Administrasi Pemerintahan & Jaminan Sosial",
            description: "Administrasi Pemerintahan & Jaminan Sosial",
        },
        {
            id: 16,
            kode: "",
            name: "Jasa Pendidikan",
            description: "Jasa Pendidikan",
        },
        {
            id: 17,
            kode: "",
            name: "Jasa Kesehatan & Kegiatan Sosial",
            description: "Jasa Kesehatan & Kegiatan Sosial",
        },
        {
            id: 18,
            kode: "",
            name: "Kesenian, Hiburan & Rekreasi",
            description: "Kesenian, Hiburan & Rekreasi",
        },
        {
            id: 19,
            kode: "",
            name: "Jasa Lainnya",
            description: "Jasa Lainnya",
        },
    ]);
    const [search, setSearch] = useState("");

    const [editingId, setEditingId] = useState<number | null>(null);
    const [formKode, setFormKode] = useState(""); //int 10
    const [formName, setFormName] = useState("");
    const [formDescription, setFormDescription] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [animateModal, setAnimateModal] = useState(false);

    const handleEdit = (business: any) => {
        setEditingId(business.id);
        setFormKode(business.kode);
        setFormName(business.name);
        setFormDescription(business.description);

        setShowModal(true);
        setTimeout(() => setAnimateModal(true), 10);
    };

    const handleSave = () => {
        if (editingId) {
            setBSector(
                bSector.map((item) =>
                    item.id === editingId
                        ? {
                            ...item,
                            kode: formKode,
                            name: formName,
                            description: formDescription
                        }
                        : item
                )
            );
        } else {
            const newBusiness = {
                id: bSector.length + 1,
                kode: formKode,
                name: formName,
                description: formDescription,
            };

            setBSector([...bSector, newBusiness]);
        }

        closeModal();
    };

    const closeModal = () => {
        setAnimateModal(false);
        setTimeout(() => setShowModal(false), 200);
    };

    const handleDelete = (id: number) => {
        const filtered = bSector.filter((item) => item.id !== id);

        const reindexed = filtered.map((item, index) => ({
            ...item,
            id: index + 1
        }));

        setBSector(reindexed);
    };
    return (
        <>
            <div className="bg-white mt-6 px-4 py-3 border rounded-2xl">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-xl">Business Sector</p>

                    <button onClick={() => {setEditingId(null); setFormKode(""); setFormName(""); 
                    setFormDescription(""); setShowModal(true); setTimeout(() => setAnimateModal(true), 10);}}
                    className="flex items-center gap-2 bg-black text-white px-4 py-2 rounded-lg 
                    font-medium text-base hover:bg-gray-800 transition-all duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none"
                        viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor"
                        className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round"
                            d="M12 4v16m8-8H4" />
                        </svg>
                        Add New
                    </button>
                </div>

                <div className="mt-10 mb-10">
                    <Searchbar value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>

                <div className="max-h-80 overflow-y-auto mt-4 mb-4">
                    <table className="w-full text-left">
                        <thead className="border-b font-semibold text-gray-400 sticky top-0 bg-white">
                            <tr>
                                <th className="pl-4 py-3 text-black">ID</th>
                                <th className="py-3 text-black">Kode</th>
                                <th className="py-3 text-black">Name</th>
                                <th className="py-3 text-black">Description</th>
                                <th className="text-right py-3 text-black pr-4">Actions</th>
                            </tr>
                        </thead>

                        <tbody className="divide-y text-gray-400">
                            {bSector.filter((business) =>business.name.toLowerCase().includes(search.toLowerCase()))
                                .map((business) => (
                                <tr
                                    key={business.id}
                                    className="hover:bg-gray-100 transition-colors duration-300 ease-in-out"
                                >
                                    <td className="py-3 pl-5 font-semibold text-black">{business.id}</td>
                                    <td className="py-3 text-black">{business.kode}</td>
                                    <td className="py-3 text-black">{business.name}</td>
                                    <td className="py-3 text-black">{business.description}</td>

                                    <td className="py-3 text-right">
                                        <div className="flex justify-end gap-4 pr-1">
                                            <button onClick={() => handleEdit(business)} className="p-1 hover:bg-gray-300 rounded-lg transition-colors duration-300 ease-in-out">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
                                                stroke="#000000" stroke-linecap="round" stroke-linejoin="round" 
                                                id="Edit--Streamline-Tabler" height="24" width="24">
                                                    <desc>Edit Streamline Icon: https://streamlinehq.com</desc>
                                                    <path d="M7 7H6a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" stroke-width="2"></path>
                                                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97L9 12v3h3l8.385 -8.415z" stroke-width="2"></path>
                                                    <path d="m16 5 3 3" stroke-width="2"></path>
                                                </svg>
                                            </button>

                                            <button onClick={() => handleDelete(business.id)} className="p-1 hover:bg-gray-300 rounded-lg transition-colors duration-300 ease-in-out">
                                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" 
                                                width="25" height="25" viewBox="0 0 48 48">
                                                    <path fill="none" stroke="red" stroke-miterlimit="10" stroke-width="3" d="M19.5,11.5V10c0-2.5,2-4.5,4.5-4.5s4.5,2,4.5,4.5v1.5">
                                                    </path><line x1="8.5" x2="39.5" y1="11.5" y2="11.5" fill="none" stroke="red" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
                                                    </line><line x1="36.5" x2="36.5" y1="23.5" y2="11.5" fill="none" stroke="red" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
                                                    </line><path fill="none" stroke="red" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3" d="M11.5,18.7v19.8c0,2.2,1.8,4,4,4h17c2.2,0,4-1.8,4-4V31">
                                                    </path><line x1="20.5" x2="20.5" y1="19.5" y2="34.5" fill="none" stroke="red" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">
                                                    </line><line x1="27.5" x2="27.5" y1="19.5" y2="34.5" fill="none" stroke="red" stroke-linecap="round" stroke-miterlimit="10" stroke-width="3">   
                                                    </line>
                                                </svg>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            {showModal && (
                <div className={`fixed inset-0 flex items-center z-50
                transition-opacity duration-200 justify-center
                ${animateModal ? "bg-black/40 opacity-100" 
                : "bg-black/0 opacity-0"}`}>
                    <div className={`bg-white rounded-2xl shadow-lg w-125
                        p-6 relative transform transition-all duration-200
                    ${animateModal ? "scale-100 opacity-100" : "scale-95 opacity-0"}
                    `}>
                        <h2 className="text-xl font-semibold mb-4">
                            Add New Business Sector
                        </h2>
                        <div className="flex flex-col gap-4">
                            <div>
                                <label className="text-sm font-medium">Kode</label>
                                <input
                                    type="text"
                                    value={formKode}
                                    onChange={(e) => setFormKode(e.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 mt-1"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">Name</label>
                                <input
                                    type="text"
                                    value={formName}
                                    onChange={(e) => setFormName(e.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 mt-1"
                                />
                            </div>

                            <div>
                                <label className="text-sm font-medium">
                                    Description (Optional)
                                </label>
                                <textarea
                                    value={formDescription}
                                    onChange={(e) => setFormDescription(e.target.value)}
                                    className="w-full border rounded-lg px-3 py-2 mt-1"
                                />
                            </div>
                        </div>
                        <div className="flex justify-end gap-3 mt-6">

                            <button onClick={closeModal}
                            className="px-4 py-2 border rounded-lg hover:bg-gray-100">
                            Cancel
                            </button>

                            <button onClick={handleSave}
                            className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
                            Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default BusinessSector