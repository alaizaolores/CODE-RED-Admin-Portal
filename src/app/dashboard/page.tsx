/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { redirect } from "next/navigation";
import client from "../../../lib/client";
import { FaSignOutAlt } from "react-icons/fa";

export default function Page() {
  const [session] = useState({});
  const [username, setUsername] = useState("");
  const [users, setUsers] = useState<any[] | null>([]);
  const [requests, setRequests] = useState<any[] | null>([]);
  const [organizations, setOrganizations] = useState<any[] | null>([]);
  const [index, setIndex] = useState(0);

  const getData = async () => {
    const { data: users } = await client.from("user").select("*");

    const { data: requests } = await client.from("blood_request").select("*");

    const { data: organizations } = await client
      .from("organization")
      .select("*");

    console.log(requests);
    console.log(organizations);

    setUsers(users);
    setRequests(requests);
    setOrganizations(organizations);
  };

  const handleLogout = async () => {
    redirect("/");
  };

  const pages = [
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 rounded-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Gender
              </th>
              <th scope="col" className="px-6 py-3">
                Birth Date
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
            </tr>
          </thead>
          <tbody>
            {users!.map((user, index) => (
              <tr
                key={user.auth_id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } border-b`}
              >
                <td className="px-6 py-4">
                  {user.user_firstname} {user.user_middlename}{" "}
                  {user.user_lastname}
                </td>
                <td className="px-6 py-4">{user.user_gender}</td>
                <td className="px-6 py-4">{user.user_birthdate}</td>
                <td className="px-6 py-4">{user.user_currentAddress}</td>
                <td className="px-6 py-4">{user.user_email}</td>
                <td className="px-6 py-4">+63-{user.user_phoneNumber}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>,
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 rounded-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Recipient
              </th>
              <th scope="col" className="px-6 py-3">
                Blood Type
              </th>
              <th scope="col" className="px-6 py-3">
                Bags
              </th>
              <th scope="col" className="px-6 py-3">
                Hospital
              </th>
              <th scope="col" className="px-6 py-3">
                Urgency Level
              </th>
              <th scope="col" className="px-6 py-3">
                Donation Status
              </th>
              <th scope="col" className="px-6 py-3">
                Created At
              </th>
            </tr>
          </thead>
          <tbody>
            {requests!.map((request, index) => (
              <tr
                key={request.request_id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } border-b`}
              >
                <td className="px-6 py-4">{request.request_recipient}</td>
                <td className="px-6 py-4">{request.request_blood_type}</td>
                <td className="px-6 py-4">{request.request_bag_qnty}</td>
                <td className="px-6 py-4">{request.request_hospital}</td>
                <td className="px-6 py-4">{request.request_urgency_lvl}</td>
                <td className="px-6 py-4">{request.request_donation_status}</td>
                <td className="px-6 py-4">
                  {new Date(request.request_created_at).toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>,
    <>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 rounded-md">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Organization Name
              </th>
              <th scope="col" className="px-6 py-3">
                Type
              </th>
              <th scope="col" className="px-6 py-3">
                Phone Number
              </th>
              <th scope="col" className="px-6 py-3">
                Date Started
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Current Address
              </th>
            </tr>
          </thead>
          <tbody>
            {organizations!.map((org, index) => (
              <tr
                key={org.org_id}
                className={`${
                  index % 2 === 0 ? "bg-white" : "bg-gray-50"
                } border-b`}
              >
                <td className="px-6 py-4">{org.org_name}</td>
                <td className="px-6 py-4">{org.org_type}</td>
                <td className="px-6 py-4">{org.org_phoneNumber}</td>
                <td className="px-6 py-4">{org.org_dateStarted}</td>
                <td className="px-6 py-4">{org.org_email}</td>
                <td className="px-6 py-4">{org.org_currentAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>,
  ];

  useEffect(() => {
    const getSession = async () => {
      const { data } = await client.auth.getSession();
      if (data.session == null) {
        redirect("/");
      } else {
        const { data: admin } = await client
          .from("admin")
          .select("username")
          .eq("email", data.session.user.email);

        setUsername(admin![0].username);

        getData();
      }
    };

    getSession();
  }, []);

  if (session) {
    return (
      <div className="flex flex-col min-h-screen max-w-7xl mx-auto gap-4">
        <nav className="flex flex-row justify-between items-center bg-red-500 text-white rounded-bl-md rounded-br-md p-4">
          <div className="flex flex-row gap-4 items-center">
            <img src="assets/logo/LOGO cropped.png" width={32} />
            <h1 className="text-2xl font-bold">Code Red</h1>
          </div>
          <div className="flex flex-row gap-4 items-center">
            Logged in, {username}
            <FaSignOutAlt
              width={48}
              className="cursor-pointer hover:text-gray-200 transition-all delay-0 duration-200 hover:scale-125"
              onClick={handleLogout}
            />
          </div>
        </nav>
        <div className="grid grid-cols-3 gap-2">
          <button
            className="flex flex-col justify-center min-h-[128px] items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer"
            onClick={() => setIndex(0)}
          >
            <h5 className="font-bold tracking-tight text-gray-900 lg:text-4xl">
              {users!.length}
            </h5>
            <p className="font-normal text-gray-700">Users</p>
          </button>
          <button
            className="flex flex-col justify-center min-h-[128px] items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer"
            onClick={() => setIndex(1)}
          >
            <h5 className="font-bold tracking-tight text-gray-900 lg:text-4xl">
              {requests!.length}
            </h5>
            <p className="font-normal text-gray-700">Blood Requests</p>
          </button>
          <button
            className="flex flex-col justify-center min-h-[128px] items-center bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 cursor-pointer"
            onClick={() => setIndex(2)}
          >
            <h5 className="font-bold tracking-tight text-gray-900 lg:text-4xl">
              {organizations!.length}
            </h5>
            <p className="font-normal text-gray-700">Organizations</p>
          </button>
        </div>
        {pages[index]}
      </div>
    );
  }
}
