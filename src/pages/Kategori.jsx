import { useParams } from 'react-router-dom';

export default function Kategori() {
  const { nama } = useParams();

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl font-semibold text-blue-700">Kategori: {nama}</h2>
      <p className="mt-2 text-gray-500">Daftar buku kategori {nama} akan tampil di sini.</p>
    </div>
  );
}
