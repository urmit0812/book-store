import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="space-x-4">
        <button
          onClick={() => router.push('/login')}
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Admin
        </button>
        <button
          onClick={() => router.push('/user-login')}
          className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 transition"
        >
          Author
        </button>
      </div>
    </div>
  );
}
