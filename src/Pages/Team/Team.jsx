import Layout from "../../Components/Layout"

// import React from 'react'
const people = [
  {
    name: 'Zunari Ali Rajput',
    role: 'Team Leader',
    rollNo: '24BSSW073',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Abdul Basit Rajput',
    rollNo: '24BSSW093',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Mehak',
    rollNo: '24BSSW099',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Zohaib Ali Rajput',
    rollNo: '24BSSW103',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'ALi Hassan Rajput',
    rollNo: '24BSSW097',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Muhammad Faiq Siddiqui',
    rollNo: '24BSSW017',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Hanzala Salaheen',
    rollNo: '24BSSW043',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Haris Khan',
    rollNo: '24BSSW019',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Waniza Khan',
    rollNo: '24BSSW079',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Misbah Waqar',
    rollNo: '24BSSW003',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Unsa Qureshi',
    rollNo: '24BSSW067',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Fahad Ahmed',
    rollNo: '24BSSW013',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Sahil Kumar',
    rollNo: '24BSSW055',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Vikram',
    rollNo: '24BSSW085',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Waleed Khan',
    rollNo: '24BSSW071',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Shahzaib Asif',
    rollNo: '24BSSW059',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Abbas Ali Khan Naghar',
    rollNo: '24BSSW091',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Muhammad Ahmed Hassan',
    rollNo: '24BSSW045',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Shubair Ali ',
    rollNo: '24BSSW063',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Syed Mujtaba Ali',
    rollNo: '24BSSW069',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Vinod Kumar',
    rollNo: '24BSSW087',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Mutahir Raza',
    rollNo: '24BSSW101',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Muhammad Ahmed Raza',
    rollNo: '24BSSW047',
    imageUrl: '../../../public/avatar.jpeg',
  },
  {
    name: 'Syed Ahmer Shah',
    rollNo: '24BSSW065',
    imageUrl: '../../../public/avatar.jpeg',
  },
];



const Team = () => {
  return (
    <Layout>
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl gap-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-xl">
            <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-4xl">
              Our Team
            </h2>
            <p className="mt-6 text-lg/8 text-gray-600">
              We, Group Seerat, are a dynamic team of passionate individuals dedicated to delivering the best results. This project is submitted to Sir Sufiyan.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img alt="" src={person.imageUrl} className="size-16 rounded-full" />
                  <div>
                    <h3 className="text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm/6 font-semibold text-indigo-600">{person.role}</p>
                    <p className="text-sm text-gray-500">Roll No: {person.rollNo}</p> {/* Added Roll No */}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default Team