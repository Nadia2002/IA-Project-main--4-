import image1 from "../../Pictures/ff.jpg"
import React from "react"
import Header from '../../routing/header';
import Main from '../../routing/main';
import Footer from '../../routing/footer';

 const EditBooks = () => {
    return(
      <>
      <Header/>
        <section className="flex flex-col justify-center antialiased bg-gray-100 text-gray-600 min-h-screen p-4">

            <div className="h-full">

                <div id="all" className=" w-full  mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-800">Books</h2>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Book Name</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Book Code</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Category</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Author</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">PDF</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Pages</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Description</div>
                                    </th>

                                </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                <img className="rounded-full"
                                                     src={image1}
                                                     style={{width: 40 + "px", height: 40 + "px"}} alt="Alex Shatov"></img>
                                            </div>
                                            <div className="font-medium text-gray-800">BOOK NAME</div>
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">nde754hb</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-green-500">Physics</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-center">A7MOOS</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <a href="">BOOK
                                            pdf</a>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-center">398</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left font-medium text-center"></div>
                                    </td>
                                    <th className="text-center align-middle px-0"><a href="#" id="x" className="shop-tooltip close float-none text-danger" title="" data-original-title="Remove">×</a></th>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <Main/>
        <Footer/>
        </>
    )
}
export default EditBooks;