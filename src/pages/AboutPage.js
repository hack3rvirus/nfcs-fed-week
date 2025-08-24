import React from 'react';

const AboutPage = () => {
  return (
    <div className="bg-white py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <h1 className="text-4xl font-bold text-center text-nfcs-dark mb-12">About Our Chapter</h1>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-nfcs-blue mb-4">Our History & Mission</h2>
          <p className="text-lg leading-relaxed text-gray-700">
            The Nigeria Federation of Catholic Students (NFCS) at Alex Ekwueme Federal University, Teaching Hospital, Abakaliki (AE-Futha 1), is a vibrant community of young Catholics dedicated to spiritual growth, academic excellence, and social impact. Our mission is to build a community rooted in faith, hope, and love, guided by the teachings of the Catholic Church. We strive to be a beacon of Christ's light on campus and beyond.
          </p>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-nfcs-blue mb-6">Leadership Archive (Past EXCOs)</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-nfcs-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-nfcs-dark mb-4">2023/2024 Session</h3>
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-semibold">President:</span> Michael Okoro</p>
                <p className="text-gray-700"><span className="font-semibold">Vice President:</span> Sarah Johnson</p>
                <p className="text-gray-700"><span className="font-semibold">General Secretary:</span> David Chukwu</p>
                <p className="text-gray-700"><span className="font-semibold">Financial Secretary:</span> Grace Nwosu</p>
              </div>
            </div>
            
            <div className="bg-nfcs-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-nfcs-dark mb-4">2022/2023 Session</h3>
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-semibold">President:</span> Esther Igwe</p>
                <p className="text-gray-700"><span className="font-semibold">Vice President:</span> John Okoh</p>
                <p className="text-gray-700"><span className="font-semibold">General Secretary:</span> Blessing Okafor</p>
                <p className="text-gray-700"><span className="font-semibold">Financial Secretary:</span> Emmanuel Eze</p>
              </div>
            </div>
            
            <div className="bg-nfcs-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-nfcs-dark mb-4">2021/2022 Session</h3>
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-semibold">President:</span> Chinedu Nwankwo</p>
                <p className="text-gray-700"><span className="font-semibold">Vice President:</span> Amara Okonkwo</p>
                <p className="text-gray-700"><span className="font-semibold">General Secretary:</span> Peter Obi</p>
                <p className="text-gray-700"><span className="font-semibold">Financial Secretary:</span> Chinonso Eze</p>
              </div>
            </div>
            
            <div className="bg-nfcs-gray p-6 rounded-lg">
              <h3 className="text-xl font-bold text-nfcs-dark mb-4">2020/2021 Session</h3>
              <div className="space-y-2">
                <p className="text-gray-700"><span className="font-semibold">President:</span> Ngozi Margaret</p>
                <p className="text-gray-700"><span className="font-semibold">Vice President:</span> Samuel Williams</p>
                <p className="text-gray-700"><span className="font-semibold">General Secretary:</span> Joy Chukwuma</p>
                <p className="text-gray-700"><span className="font-semibold">Financial Secretary:</span> Daniel Brown</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;