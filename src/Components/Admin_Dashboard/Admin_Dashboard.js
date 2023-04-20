import image1 from "../../Pictures/IMG_20220319_164602.jpg";
import image2 from "../../Pictures/Screenshot 2023-04-02 202438.png";
import image3 from "../../Pictures/download1.jpg";
import image4 from "../../Pictures/download33.jpg";
import image5 from "../../Pictures/download.jpg";
import React from "react";
import Header from "../../routing/header";
import Main from "../../routing/main";
import Footer from "../../routing/footer";

const AdminDashboard = () => {
  return (
    <>
<Header/>
    <section
      className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4"
      style={{ background: "inherit" }}
    >
      <div className="h-full">
        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
          <header className="px-5 py-4 border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Customers</h2>
          </header>
          <div className="p-3">
            <div className="overflow-x-auto">
              <table className="table-auto w-full">
                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                  <tr>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Name</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Email</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-left">Borrow</div>
                    </th>
                    <th className="p-2 whitespace-nowrap">
                      <div className="font-semibold text-center">Buy</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="text-sm divide-y divide-gray-100">
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={image1}
                            style={{ width: 40 + "px", height: 40 + "px" }}
                            alt="Alex Shatov"
                          ></img>
                        </div>
                        <div className="font-medium text-gray-800">shifoo</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">fre4@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        Book1
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-center">
                        Book2
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={image2}
                            style={{ width: 40 + "px", height: 40 + "px" }}
                            alt="Philip Harbach"
                          ></img>
                        </div>
                        <div className="font-medium text-gray-800">Ammar</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">Ammar@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        Book3
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left text-center">Book4</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={image3}
                            style={{ width: 40 + "px", height: 40 + "px" }}
                            alt="Mirko Fisuk"
                          ></img>
                        </div>
                        <div className="font-medium text-gray-800">Messi</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">TheGOAT@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        Book5
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left text-center">Book6</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={image4}
                            width="40"
                            height="40"
                            alt="Olga Semklo"
                          ></img>
                        </div>
                        <div className="font-medium text-gray-800">MSalah</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">MOsalah@cool.design</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        Book7
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left text-center">Book8</div>
                    </td>
                  </tr>
                  <tr>
                    <td className="p-2 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                          <img
                            className="rounded-full"
                            src={image5}
                            width="40"
                            height="40"
                            alt="Burak Long"
                          ></img>
                        </div>
                        <div className="font-medium text-gray-800">CR7</div>
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left">Ronaldo@gmail.com</div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left font-medium text-green-500">
                        Book9
                      </div>
                    </td>
                    <td className="p-2 whitespace-nowrap">
                      <div className="text-left text-center">Book10</div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
   <Main pagename="admin dashboard"/>
  <Footer/>  
  </>
  );
};
export default AdminDashboard;
