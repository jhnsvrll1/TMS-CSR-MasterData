import { useState } from "react";
import Searchbar from "../component/Searchbar";

function Province() {
    const [ProvinceType, setProvinceType] = useState([
        {
            id: 1,
            kode: "",
            name: "Aceh",
            description: "Aceh",
        },
        {
            id: 2,
            kode: "",
            name: "Sumatera Utara",
            description: "Sumatera Utara",
        },
        {
            id: 3,
            kode: "",
            name: "Sumatera Barat",
            description: "Sumatera Barat",
        },
        {
            id: 4,
            kode: "",
            name: "Riau",
            description: "Riau",
        },
        {
            id: 5,
            kode: "",
            name: "Jambi",
            description: "Jambi",
        },
        {
            id: 6,
            kode: "",
            name: "Sumatera Selatan",
            description: "Sumatera Selatan",
        },
        {
            id: 7,
            kode: "",
            name: "Bengkulu",
            description: "Bengkulu",
        },
        {
            id: 8,
            kode: "",
            name: "Lampung",
            description: "Lampung",
        },
        {
            id: 9,
            kode: "",
            name: "Bangka Belitung",
            description: "Bangka Belitung",
        },
        {
            id: 10,
            kode: "",
            name: "Kepulauan Riau",
            description: "Kepulauan Riau",
        },
        {
            id: 11,
            kode: "",
            name: "DKI Jakarta",
            description: "DKI Jakarta",
        },
        {
            id: 12,
            kode: "",
            name: "Jawa Barat",
            description: "Jawa Barat",
        },
        {
            id: 13,
            kode: "",
            name: "Jawa Tengah",
            description: "Jawa Tengah",
        },
        {
            id: 14,
            kode: "",
            name: "DI Yogyakarta",
            description: "DI Yogyakarta",
        },
        {
            id: 15,
            kode: "",
            name: "Jawa Timur",
            description: "Jawa Timur",
        },
        {
            id: 16,
            kode: "",
            name: "Banten",
            description: "Banten",
        },
        {
            id: 17,
            kode: "",
            name: "Bali",
            description: "Bali",
        },
        {
            id: 18,
            kode: "",
            name: "Nusa Tenggara Barat",
            description: "Nusa Tenggara Barat",
        },
        {
            id: 19,
            kode: "",
            name: "Nusa Tenggara Timur",
            description: "Nusa Tenggara Timur",
        },
        {
            id: 20,
            kode: "",
            name: "Kalimantan Barat",
            description: "Kalimantan Barat",
        },
        {
            id: 21,
            kode: "",
            name: "Kalimantan Tengah",
            description: "Kalimantan Tengah",
        },
        {
            id: 22,
            kode: "",
            name: "Kalimantan Selatan",
            description: "Kalimantan Selatan",
        },
        {
            id: 23,
            kode: "",
            name: "Kalimantan Timur",
            description: "Kalimantan Timur",
        },
        {
            id: 24,
            kode: "",
            name: "Kalimantan Utara",
            description: "Kalimantan Utara",
        },
        {
            id: 25,
            kode: "",
            name: "Sulawesi Utara",
            description: "Sulawesi Utara",
        },
        {
            id: 26,
            kode: "",
            name: "Sulawesi Tengah",
            description: "Sulawesi Tengah",
        },
        {
            id: 27,
            kode: "",
            name: "Sulawesi Selatan",
            description: "Sulawesi Selatan",
        },
        {
            id: 28,
            kode: "",
            name: "Sulawesi Tenggara",
            description: "Sulawesi Tenggara",
        },
        {
            id: 29,
            kode: "",
            name: "Gorontalo",
            description: "Gorontalo",
        },
        {
            id: 30,
            kode: "",
            name: "Sulawesi Barat",
            description: "Sulawesi Barat",
        },
        {
            id: 31,
            kode: "",
            name: "Maluku",
            description: "Maluku",
        },
        {
            id: 32,
            kode: "",
            name: "Maluku Utara",
            description: "Maluku Utara",
        },
        {
            id: 33,
            kode: "",
            name: "Papua Barat",
            description: "Papua Barat",
        },
        {
            id: 34,
            kode: "",
            name: "Papua",
            description: "Papua",
        },
    ]);
    const [search, setSearch] = useState("");

    const [showModal, setShowModal] = useState(false);
    const [animateModal, setAnimateModal] = useState(false);

    const [formKode, setFormKode] = useState("");
    const [formName, setFormName] = useState("");
    const [formDescription, setFormDescription] = useState("");
    const [editingId, setEditingId] = useState<number | null>(null);

    const handleEdit = (province: any) => {
        setEditingId(province.id);
        setFormKode(province.kode); //int 10
        setFormName(province.name);
        setFormDescription(province.description);

        setShowModal(true);
        setTimeout(() => setAnimateModal(true), 10);
    };

    const handleSave = () => {
        if (editingId) {
            setProvinceType(
                ProvinceType.map((item) =>
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
            const newProvince = {
                id: ProvinceType.length + 1,
                kode: formKode,
                name: formName,
                description: formDescription,
            };

            setProvinceType([...ProvinceType, newProvince]);
        }

        closeModal();
    };

    const closeModal = () => {
        setAnimateModal(false);
        setTimeout(() => setShowModal(false), 200);
    };

    const handleDelete = (id: number) => {
        const filtered = ProvinceType.filter((item) => item.id !== id);

        const reindexed = filtered.map((item, index) => ({
            ...item,
            id: index + 1
        }));

        setProvinceType(reindexed);
    };

    return (
        <>
            <div className="bg-white mt-6 px-4 py-3 border rounded-2xl">
                <div className="flex items-center justify-between">
                    <p className="font-semibold text-xl">Province</p>

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
                            {ProvinceType.filter((province) => province.name.toLowerCase().includes(search.toLowerCase()))
                                .map((province) => (
                                <tr
                                    key={province.id}
                                    className="hover:bg-gray-100 transition-colors duration-300 ease-in-out"
                                >
                                    <td className="py-3 pl-5 font-semibold text-black">{province.id}</td>
                                    <td className="py-3 text-black">{province.kode}</td>
                                    <td className="py-3 text-black">{province.name}</td>
                                    <td className="py-3 text-black">{province.description}</td>

                                    <td className="py-3 text-right">
                                        <div className="flex justify-end gap-4 pr-1">
                                            <button onClick={() => handleEdit(province)} className="p-1 hover:bg-gray-300 rounded-lg transition-colors duration-300 ease-in-out">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" 
                                                stroke="#000000" stroke-linecap="round" stroke-linejoin="round" 
                                                id="Edit--Streamline-Tabler" height="24" width="24">
                                                    <desc>Edit Streamline Icon: https://streamlinehq.com</desc>
                                                    <path d="M7 7H6a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1" stroke-width="2"></path>
                                                    <path d="M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97L9 12v3h3l8.385 -8.415z" stroke-width="2"></path>
                                                    <path d="m16 5 3 3" stroke-width="2"></path>
                                                </svg>
                                            </button>

                                            <button onClick={() => handleDelete(province.id)} className="p-1 hover:bg-gray-300 rounded-lg transition-colors duration-300 ease-in-out">
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
                            Add New Province
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
export default Province