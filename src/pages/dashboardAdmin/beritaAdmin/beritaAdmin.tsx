import React, { useState } from "react";
import { supabase } from "../../../supabaseClient";

const BeritaAdmin: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [summary, setSummary] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Mendapatkan user yang terautentikasi
    const { data: user } = await supabase.auth.getUser();

    // Validasi input
    if (!title || !summary || !content || !image) {
      setMessage("Please fill all fields.");
      return;
    }

    if (!user) {
      setMessage("You must be logged in to add news.");
      return;
    }

    setLoading(true);

    try {
      // Upload image ke bucket Supabase yang bernama 'berita'
      const filePath = `berita_images/${Date.now()}_${image.name}`;
      const { data, error: uploadError } = await supabase.storage
        .from("berita") // Menggunakan bucket bernama 'berita'
        .upload(filePath, image);

      if (uploadError) {
        setMessage(`Error uploading image: ${uploadError.message}`);
        setLoading(false);
        return;
      }

      // Masukkan data berita ke database 'berita'
      const { error } = await supabase.from("berita").insert([
        {
          title,
          summary,
          content,
          image_url: data?.path, // Menyimpan URL gambar yang diupload
        },
      ]);

      if (error) {
        setMessage(`Error adding news: ${error.message}`);
      } else {
        setMessage("News added successfully!");
        setTitle("");
        setSummary("");
        setContent("");
        setImage(null);
      }
    } catch (error) {
      setMessage(`Error: ${(error as Error).message}`);
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Tambah Berita Baru
      </h1>

      <form onSubmit={handleSubmit} className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block text-gray-700">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="Berita Title"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Summary</label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="Summary of the news"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Content</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full p-3 border rounded-md"
            placeholder="Content of the news"
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block text-gray-700">Image</label>
          <input
            type="file"
            onChange={(e) => setImage(e.target.files?.[0] || null)}
            className="w-full p-3 border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-full p-3 bg-blue-600 text-white rounded-md"
          disabled={loading}
        >
          {loading ? "Uploading..." : "Add News"}
        </button>
      </form>

      {message && (
        <div className="text-center mt-6">
          <p className={message.includes("Error") ? "text-red-600" : "text-green-600"}>
            {message}
          </p>
        </div>
      )}
    </div>
  );
};

export default BeritaAdmin;
