import React, { useEffect, useState } from "react";
import { Client, Databases, Query } from "appwrite";
import Navbar from "./../components/Navbar";
import Footer from "./../components/Footer";

const client = new Client();

client
  .setEndpoint("https://[YOUR_APPWRITE_ENDPOINT]") // Replace with your Appwrite endpoint
  .setProject("[YOUR_PROJECT_ID]"); // Replace with your project ID

const databases = new Databases(client);
const DATABASE_ID = "[YOUR_DATABASE_ID]";
const VOLUNTEERS_COLLECTION_ID = "[VOLUNTEERS_COLLECTION_ID]";
const SPONSORS_COLLECTION_ID = "[SPONSORS_COLLECTION_ID]";
const CHILDREN_COLLECTION_ID = "[CHILDREN_COLLECTION_ID]";

function Dashboard() {
  const [latestVolunteers, setLatestVolunteers] = useState([]);
  const [latestSponsors, setLatestSponsors] = useState([]);
  const [latestChildren, setLatestChildren] = useState([]);

  useEffect(() => {
    async function fetchLatestEntries() {
      try {
        const volunteersResponse = await databases.listDocuments(
          DATABASE_ID,
          VOLUNTEERS_COLLECTION_ID,
          [Query.orderDesc("$createdAt"), Query.limit(5)]
        );
        setLatestVolunteers(volunteersResponse.documents);

        const sponsorsResponse = await databases.listDocuments(
          DATABASE_ID,
          SPONSORS_COLLECTION_ID,
          [Query.orderDesc("$createdAt"), Query.limit(5)]
        );
        setLatestSponsors(sponsorsResponse.documents);

        const childrenResponse = await databases.listDocuments(
          DATABASE_ID,
          CHILDREN_COLLECTION_ID,
          [Query.orderDesc("$createdAt"), Query.limit(5)]
        );
        setLatestChildren(childrenResponse.documents);
      } catch (error) {
        console.error("Error fetching latest data", error);
      }
    }
    fetchLatestEntries();
  }, []);

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 p-8">
        <header className="mb-10">
          <h1 className="text-4xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600 mt-2">
            Latest volunteers, sponsors & children added
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Latest Volunteers */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-indigo-600 mb-4">
              Latest Volunteers
            </h2>
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {latestVolunteers.length === 0 ? (
                <li className="text-gray-400 italic">
                  No recent volunteers found.
                </li>
              ) : (
                latestVolunteers.map((v) => (
                  <li
                    key={v.$id}
                    className="p-3 border border-gray-200 rounded hover:shadow cursor-pointer"
                    title={`Joined on ${new Date(
                      v.$createdAt
                    ).toLocaleDateString()}`}
                  >
                    <p className="font-medium text-gray-900">
                      {v.name || v.email || "Unknown Volunteer"}
                    </p>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Latest Sponsors */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-green-600 mb-4">
              Latest Sponsors
            </h2>
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {latestSponsors.length === 0 ? (
                <li className="text-gray-400 italic">
                  No recent sponsors found.
                </li>
              ) : (
                latestSponsors.map((s) => (
                  <li
                    key={s.$id}
                    className="p-3 border border-gray-200 rounded hover:shadow cursor-pointer"
                    title={`Joined on ${new Date(
                      s.$createdAt
                    ).toLocaleDateString()}`}
                  >
                    <p className="font-medium text-gray-900">
                      {s.name || "Unknown Sponsor"}
                    </p>
                    <p className="text-sm text-gray-600">{s.company || ""}</p>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Latest Children */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-xl font-semibold text-blue-600 mb-4">
              Latest Children
            </h2>
            <ul className="space-y-3 max-h-64 overflow-y-auto">
              {latestChildren.length === 0 ? (
                <li className="text-gray-400 italic">
                  No recent children added.
                </li>
              ) : (
                latestChildren.map((c) => (
                  <li
                    key={c.$id}
                    className="p-3 border border-gray-200 rounded hover:shadow cursor-pointer"
                    title={`Added on ${new Date(
                      c.$createdAt
                    ).toLocaleDateString()}`}
                  >
                    <p className="font-medium text-gray-900">
                      {c.name || "Unknown Child"}
                    </p>
                    <p className="text-sm text-gray-600">
                      Age: {c.age || "N/A"}
                    </p>
                  </li>
                ))
              )}
            </ul>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
