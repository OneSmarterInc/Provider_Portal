import React, { useState } from "react";
import {
  SlidersHorizontal,
  XCircle,
  Search,
  ChevronDown,
  ChevronUp,
  Info,
  FileText,
  DownloadIcon,
  Download,
  Upload,
} from "lucide-react";
import backgroundImage from "../assets/image.png";

const totalClaim = [
  {
    eob: "EOB",
    claim_no: "0001235",
    date: "09/11/2023",
    for: "DOE*JANE",
    type: "MED",
    provider: "TRI Health H LLC",
    total: "$361.00",
    total_paid: "$0.00",
    member_resp: "$36.00",
    status: "OPEN",
  },
  {
    eob: "EOB",
    claim_no: "0001235",
    date: "09/11/2023",
    for: "DOE*JANE",
    type: "MED",
    provider: "TRI Health H LLC",
    total: "$361.00",
    total_paid: "$0.00",
    member_resp: "$36.00",
    status: "OPEN",
  },
  {
    eob: "EOB",
    claim_no: "0001235",
    date: "09/11/2023",
    for: "DOE*JANE",
    type: "MED",
    provider: "TRI Health H LLC",
    total: "$361.00",
    total_paid: "$0.00",
    member_resp: "$36.00",
    status: "OPEN",
  },
  {
    eob: "EOB",
    claim_no: "0001235",
    date: "09/11/2023",
    for: "DOE*JANE",
    type: "MED",
    provider: "TRI Health H LLC",
    total: "$361.00",
    total_paid: "$0.00",
    member_resp: "$36.00",
    status: "OPEN",
  },
  {
    eob: "EOB",
    claim_no: "0001235",
    date: "09/11/2023",
    for: "DOE*JANE",
    type: "MED",
    provider: "TRI Health H LLC",
    total: "$361.00",
    total_paid: "$0.00",
    member_resp: "$36.00",
    status: "OPEN",
  },
  {
    eob: "EOB",
    claim_no: "0001235",
    date: "09/11/2023",
    for: "DOE*JANE",
    type: "MED",
    provider: "TRI Health H LLC",
    total: "$361.00",
    total_paid: "$0.00",
    member_resp: "$36.00",
    status: "OPEN",
  },
];

const data = [
  {
    eob: "EOB",
    id: "0001235",
    date: "09/11/2023",
    code: "MMP",
    description: "Masters, Mates & Pilots",
    amount: "$1200",
    status: "Approved",
    claim_no: "CLM-202402345",
    member_id: "HW0007605",
    ssn: "302-68-3284",
    diagnosis_code: "Diagnosis Code (ICD-10): M54.5 (Lower Back Pain)",
    claimed_amount: "$36.00",
    plan: "01",
    type: "MED",
    class: "D2",
    provider: "208814374",
    address: "Muskingum Valley Health Centers 716 Adair AVE Zanesville,",
    state: "OH",
    pin: "43701-2836",
    dob: "09/13/1961",
    primary_carrier: "NA",
    member_name: "John Doe",
    receipt_date: "02/09/2025",
    patient_id: "2025039BF2565000000",
    accident: "NA",
    status: "Approved",
    assign: "Y",
    prov_check: "NA",
    mem_check: "NA",
    subject: "NA",
    allowable: "NA",
    notes:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
  },
  {
    eob: "EOB",
    id: "0001235",
    date: "09/11/2023",
    code: "MMP",
    description: "Masters, Mates & Pilots",
    amount: "$1200",
    status: "Approved",
    claim_no: "CLM-202402345",
    member_id: "HW0007605",
    ssn: "302-68-3284",
    diagnosis_code: "Diagnosis Code (ICD-10): M54.5 (Lower Back Pain)",
    claimed_amount: "$36.00",
    plan: "01",
    type: "MED",
    class: "D2",
    provider: "208814374",
    address: "Muskingum Valley Health Centers 716 Adair AVE Zanesville,",
    state: "OH",
    pin: "43701-2836",
    dob: "09/13/1961",
    primary_carrier: "NA",
    member_name: "John Doe",
    receipt_date: "02/09/2025",
    patient_id: "2025039BF2565000000",
    accident: "NA",
    status: "Approved",
    assign: "Y",
    prov_check: "NA",
    mem_check: "NA",
    subject: "NA",
    allowable: "NA",
    notes:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
  },
  {
    eob: "EOB",
    id: "0001235",
    date: "09/11/2023",
    code: "MMP",
    description: "Masters, Mates & Pilots",
    amount: "$1200",
    status: "Approved",
    claim_no: "CLM-202402345",
    member_id: "HW0007605",
    ssn: "302-68-3284",
    diagnosis_code: "Diagnosis Code (ICD-10): M54.5 (Lower Back Pain)",
    claimed_amount: "$36.00",
    plan: "01",
    type: "MED",
    class: "D2",
    provider: "208814374",
    address: "Muskingum Valley Health Centers 716 Adair AVE Zanesville,",
    state: "OH",
    pin: "43701-2836",
    dob: "09/13/1961",
    primary_carrier: "NA",
    member_name: "John Doe",
    receipt_date: "02/09/2025",
    patient_id: "2025039BF2565000000",
    accident: "NA",
    status: "Approved",
    assign: "Y",
    prov_check: "NA",
    mem_check: "NA",
    subject: "NA",
    allowable: "NA",
    notes:
      "There is no one who loves pain itself, who seeks after it and wants to have it, simply because it is pain",
  },
];

const MemberScreen = () => {
  const [expandedRow, setExpandedRow] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleRow = (index) => {
    console.log("Toggling row:", index); // Debugging
    setExpandedRow(expandedRow === index ? null : index);
  };

  const [isOpen, setIsOpen] = useState(false);
  const [isOpenDetails, setIsOpenDetails] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(false);

  const [isOpenList, setIsOpenList] = useState(false);
  const [showW9Form, setShowW9Form] = useState(false);
  const [status, setStatus] = useState("not_submitted"); // Tracking status
  const [filew9, setFilew9] = useState(null);

  const handleFileUploade9 = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      setStatus("in_progress");
    }
  };

  const handleSubmite9 = () => {
    if (file) {
      setStatus("submitted");
    }
  };

  const [file, setFile] = useState(null);
  const [fileURL, setFileURL] = useState("");

  // Handle file selection
  const handleFileUpload = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);

      // Create a URL for the uploaded file
      const url = URL.createObjectURL(selectedFile);
      setFileURL(url);
    }
  };

  // Handle download
  const handleDownload = () => {
    if (fileURL) {
      const a = document.createElement("a");
      a.href = fileURL;
      a.download = file.name;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    }
  };

  const pdfUrl = "/EOB_1717.pdf";

  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="min-h-screen flex flex-col  items-center pt-8 gap-4"
    >
      <div className="w-full bg-transparent">
        <div className="flex items-center justify-between pl-4 pr-4 pb-0 gap-4">
          {/* Search Bar - Responsive */}
          <div className="flex items-center w-full max-w-[500px] pb-2">
            {/* Search Input */}
            <div className="relative flex items-center w-full h-8 border border-[#0486A5] rounded-full bg-white font-sans">
              <button className="bg-[#65C9E1] font-inter text-[#005164] px-4 h-8 rounded-full border-[#0486A5] text-xs font-medium whitespace-nowrap flex items-center justify-center min-w-[120px] md:w-auto">
                Search Member
              </button>
              <input
                type="text"
                placeholder="Enter Member ID or Date of Service (MM/DD/YYYY)"
                className=" border-none outline-none text-[12px] pl-2 pr-0 text-gray-200 placeholder-gray-200"
              />
              <Search className="w-6 h-6 text-[#0486A5] rounded-tr-xl rounded-br-xl font-bold absolute right-4 cursor-pointer border-l border-[#0486A5] pl-2 bg-white" />
            </div>
          </div>

          {/* Profile Section - Responsive */}
          <div className="flex items-center gap-4">
            <h3 className="font-inter text-sm text-black-700">
              Welcome, Mike!
            </h3>
            <img
              src="/images/Header/img-11.png"
              alt="Profile"
              className="w-10 cursor-pointer"
              aria-label="User profile"
              onClick={() => setIsOpenList(!isOpenList)}
            />
            {/* Dropdown List */}
            {isOpenList && (
              <div className="absolute right-4 mt-32 w-42 bg-white border border-gray-200 shadow-lg rounded-md">
                <div className="flex flex-col">
                  <button
                    className="text-[15px] px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    onClick={() => setShowW9Form(true)}
                  >
                    W9 Form
                  </button>
                  <button className="text-[15px] px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Logout
                  </button>
                </div>
              </div>
            )}

            {/* W9 Form Section */}
            {showW9Form && (
              <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
                <div className="bg-white items-center justify-center rounded-lg w-[580px] h-[240px] shadow-lg relative p-4">
                  <h3 className="text-lg font-semibold text-center mt-6 mb-8">
                    W9 Form Submission
                  </h3>
                  <span
                    className="absolute transition-all duration-500"
                    style={{
                      left:
                        status === "not_submitted"
                          ? "4%"
                          : status === "in_progress"
                          ? "33%"
                          : "68%",
                      top:
                        status === "not_submitted"
                          ? "40%"
                          : status === "in_progress"
                          ? "40%"
                          : "40%",
                    }}
                  >
                    {status === "not_submitted"
                      ? "Not Submitted"
                      : status === "in_progress"
                      ? "Verification In Progress"
                      : "Uploaded Successfully"}
                  </span>

                  {/* Tracking Bar */}
                  <div className="w-full h-1 mt-16 bg-gray-200 rounded-lg overflow-hidden">
                    <div
                      className="h-full transition-all duration-500"
                      style={{
                        width:
                          status === "not_submitted"
                            ? "33%"
                            : status === "in_progress"
                            ? "66%"
                            : "100%",
                        backgroundColor:
                          status === "not_submitted"
                            ? "#6495ed"
                            : status === "in_progress"
                            ? "#6495ed"
                            : "#6495ed",
                      }}
                    ></div>

                    <div className="absolute top-[56%] left-[33%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-red-500"></div>

                    <div className="absolute top-[56%]  left-[66%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-yellow-500"></div>
                    <div className="absolute top-[56%]  left-[97%] transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-green-500"></div>
                  </div>

                  {/* Upload and Submit Buttons */}
                  {status !== "submitted" && (
                    <div className="mt-12 flex flex-row gap-4 items-center justify-center">
                      <label className="px-4 py-2 w-25 bg-gray-300 text-black rounded cursor-pointer">
                        Upload File
                        <input
                          type="file"
                          className="hidden"
                          onChange={handleFileUpload}
                        />
                      </label>

                      <button
                        className={`px-4 py-2 w-25 rounded ${
                          file
                            ? "bg-blue-500 text-white"
                            : "bg-gray-300 text-black cursor-not-allowed"
                        }`}
                        onClick={handleSubmite9}
                        disabled={!file}
                      >
                        Submit
                      </button>
                    </div>
                  )}

                  {/* Close Button */}
                  <button
                    className="absolute top-2 right-5 text-gray-500 text-xl"
                    onClick={() => setShowW9Form(false)}
                  >
                    ×
                  </button>
                </div>
              </div>
            )}

            <img
              className="w-6"
              src="/images/Header/Vector.png"
              alt="Dropdown"
              aria-hidden="true"
            />
          </div>
        </div>

        {/* Search Hint */}
        <p className="font-inter text-black-300 text-[11px] pl-10 pt-2 md:text-left">
          Search By: Member ID / Date of Service (MM/DD/YYYY format)
        </p>
      </div>

      <div className="flex flex-row w-[70vw] md:flex-row px-8">
        {/* February Table */}
        <div className="border rounded-tl-lg rounded-bl-lg border-gray-300 pt-2 bg-white w-full md:w-1/2">
          <h2 className="font-inter text-[14px] font-medium mb-2 pl-2">
            February 2025 (Last Month)
          </h2>
          <div className="border overflow-hidden rounded-bl-lg border-white">
            <table className="w-full rounded-full">
              <thead>
                <tr className="bg-gray-100">
                  <th className="p-1 font-inter text-left text-[#000000] text-sm font-normal border-r">
                    Total Claims: 3
                  </th>
                  <th className="p-1 font-inter text-left text-[#00CA07] text-sm font-normal border-r">
                    Paid Claims: 2
                  </th>
                  <th className="p-1 font-inter text-left text-[#FF0000] text-sm font-normal">
                    Pending Claims: 1
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t">
                  <td className="p-1 font-inter text-[11px] bg-white border-b-0 border-r">
                    0001234
                  </td>
                  <td className="p-1 bg-white  border-r font-inter text-[11px]">
                    $ 500
                  </td>
                  <td className="p-1 bg-white font-inter text-[11px]">$ 800</td>
                </tr>
                <tr className="">
                  <td className="p-1 bg-white border-r font-inter text-[11px]">
                    0001234
                  </td>
                  <td className="p-1 bg-white  border-r font-inter text-[11px]">
                    $ 1200
                  </td>
                  <td className="p-1 bg-white font-inter text-[11px]"></td>
                </tr>
                <tr className="">
                  <td className="p-1 bg-white border-r font-inter text-[11px]">
                    0001234
                  </td>
                  <td className="p-1 bg-white  border-r font-inter text-[11px]"></td>
                  <td className="p-1 bg-white  font-inter text-[11px]"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* March Table */}
        <div className="border rounded-lg border-sky-400 pt-2 ml-[-4px]  w-full md:w-1/2 bg-blue-50">
          <h2 className="font-inter font-medium text-[14px] mb-2 pl-2 text-[#0486A5]">
            March 2025 (Current Month)
          </h2>
          <div className="border overflow-hidden border-white rounder-bl-full">
            <table className="w-full">
              <thead>
                <tr className="border">
                  <th className="p-1 font-inter text-left text-[#000000] text-sm font-normal border-r">
                    Total Claims: 3
                  </th>
                  <th className="p-1 font-inter text-left text-[#00CA07] text-sm font-normal border-r">
                    Paid Claims: 2
                  </th>
                  <th className="p-1 font-inter text-left text-[#FF0000] text-sm font-normal">
                    Pending Claims: 1
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="">
                  <td className="p-1 border-r font-inter text-[11px] bg-blue-50">
                    0001234
                  </td>
                  <td className="p-1 border-r font-inter text-[11px] bg-blue-50">
                    $ 500
                  </td>
                  <td className="p-1 border-r font-inter text-[11px] bg-blue-50">
                    $ 800
                  </td>
                </tr>
                <tr className="">
                  <td className="p-1 border-r font-inter text-[11px] bg-blue-50 ">
                    0001234
                  </td>
                  <td className="p-1 border-r font-inter text-[11px] bg-blue-50 ">
                    $ 1200
                  </td>
                  <td className="p-1 font-inter text-[11px] bg-blue-50 "></td>
                </tr>
                <tr className="">
                  <td className="p-1 font-inter text-[11px] border-r border-rounded bg-blue-50 ">
                    0001234
                  </td>
                  <td className="p-1 border-r font-inter text-[11px] bg-blue-50"></td>
                  <td className="p-1 font-inter text-[11px] bg-blue-50"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Claims Table Section */}
      <div className="max-h-screen border border-gray-300 rounded mb-12">
        {/* Header */}
        <div className="flex justify-between pl-2 pt-4 pb-4 items-center border-b border-sky-300 bg-white">
          <div className="flex">
            <h2 className="text-[16px] font-inter font-medium p-2">
              Total Claim Found (3)
            </h2>
            <img
              className="w-8 h-9"
              src="/images/Header/read-more.png"
              alt="Dropdown"
              aria-hidden="true"
            />
          </div>
          <div className="mr-4 relative z-10 flex items-center w-[150px] md:w-[250px] lg:w-[300px] h-8 border border-gray-400 rounded-full px-4 bg-white">
            <input
              type="text"
              placeholder="Search Claim"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-none text-xs font-inter"
            />
            <Search className="w-5 h-5 pl-2 border-l border-gray-300 text-[#0486A5] absolute right-4" />
          </div>
        </div>

        {/* Table */}
        <div className=" overflow-hidden">
          <table className="w-[90vw] border-collapse ">
            <thead>
              <tr className="bg-white p-4">
                <th className="w-[100px] p-2 text-center font-inter text-[13px]">
                  EOB
                </th>
                <th className="w-[100px] p-2 text-left font-inter text-[13px]">
                  Claim No.
                </th>
                <th className="w-[90px] p-2 text-left font-inter text-[13px]">
                  Date
                </th>
                <th className="w-[60px] p-2 text-left font-inter text-[13px]">
                  Type
                </th>
                <th className="p-2 text-left font-inter text-[13px] w-[800px]">
                  Provider
                </th>
                <th className="w-[80px] p-2 text-left  font-inter text-[13px]">
                  Amount
                </th>
                <th className="w-[120px] p-2 text-left  font-inter text-[13px]">
                  Status
                </th>
                <th className="w-[50px] p-2 text-left  font-inter text-[13px]">
                  {" "}
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <>
                  <tr className="">
                    <td
                      className="p-2 text-center text-xs font-inter bg-gray-100 border-b text-[#0486A5] cursor-pointer"
                      onClick={() => setSelectedPdf(true)}
                    >
                      {row.eob}
                    </td>

                    {/* Modal for PDF */}
                    {selectedPdf && (
                      <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-50 backdrop-blur-sm z-50">
                        <div className="bg-white max-w-100 p-6 rounded-lg shadow-lg w-[60%]">
                          {/* Header */}
                          <div className="flex flex-row justify-between">
                            <h3 className="mb-4 text-gray-800">EOB Files</h3>
                            <div className="flex justify-end gap-4 items-center border-b">
                              <button
                                onClick={() => setSelectedPdf(false)} // Close modal
                                className="text-teal-600 hover:text-teal-800"
                              >
                                <XCircle className="w-6 h-6" />
                              </button>
                            </div>
                          </div>

                          {/* Display PDF File */}
                          <div className="mt-2 p-2">
                            <iframe
                              src={pdfUrl}
                              width="100%"
                              height="500px"
                              title="PDF Preview"
                            />
                          </div>
                        </div>
                      </div>
                    )}
                    <td className="p-2 text-left text-xs font-inter bg-gray-100 border-b">
                      {row.id}
                    </td>
                    <td className="p-2 text-left text-xs font-inter bg-gray-100 border-b">
                      {row.date}
                    </td>
                    <td className="p-2 text-left text-xs font-inter bg-gray-100 border-b">
                      {row.type}
                    </td>
                    <td className="p-2 text-left text-xs font-inter bg-gray-100 border-b">
                      {row.provider}
                    </td>
                    <td className="p-2 text-left text-xs font-inter bg-gray-100 border-b">
                      {row.amount}
                    </td>
                    <td className="text-green-500 p-2 text-left text-xs font-inter bg-gray-100 border-b">
                      {row.status}
                    </td>
                    <td className="bg-gray-100 border-b">
                      <button onClick={() => setIsOpenDetails((prev) => !prev)}>
                        <ChevronDown className="w-4 h-4 text-black" />
                      </button>
                    </td>
                  </tr>
                  {isOpenDetails && (
                    <tr>
                      <td colSpan={7}>
                        <div className="flex flex-row bg-white border-b border-sky-300">
                          <div className=" p-2 overflow-hidden">
                            <p className=" pt-2 pl-4 font-inter text-[12px] text-gray-900 font-normal">
                              Claim Number: {row.claim_no} <br />
                              Member Id: {row.member_id}
                            </p>
                            <p className="pt-2 pl-4 font-inter text-[12px] text-[#0486A5] font-normal">
                              <button onClick={() => setIsOpen(true)}>
                                {row.diagnosis_code}
                              </button>

                              {/* Modal */}
                              {isOpen && (
                                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
                                  <div className="bg-white p-6 rounded-lg shadow-lg w-[70%]">
                                    {/* Header */}
                                    <div className="flex justify-between items-center border-b pb-3">
                                      <h3 className="text-teal-600 text-lg font-inter">
                                        Total Claims
                                      </h3>
                                      <button
                                        onClick={() => setIsOpen(false)}
                                        className="text-teal-600 hover:text-teal-800"
                                      >
                                        <XCircle className="w-6 h-6" />
                                      </button>
                                    </div>

                                    {/* Table */}
                                    <table className="w-full border-collapse border border-gray-300 mt-4">
                                      <thead>
                                        <tr className="bg-gray-200 text-black">
                                          <th className="p-2 border font-inter text-[12px]">
                                            EOB
                                          </th>
                                          <th className="p-2 border font-inter text-[12px]">
                                            Claim No.
                                          </th>
                                          <th className="p-2 border font-inter text-[12px]">
                                            Date
                                          </th>
                                          <th className="p-2 border font-inter text-[12px]">
                                            For
                                          </th>
                                          <th className="p-2 border font-inter text-[12px]">
                                            Type
                                          </th>
                                          <th className="p-2 border font-inter text-[12px]">
                                            Provider
                                          </th>
                                          <th className="p-2 border font-inter text-[12px]">
                                            Total
                                          </th>
                                          <th className="p-2 border font-inter text-[12px]">
                                            Total Paid
                                          </th>
                                          <th className="p-2 border font-inter text-[12px]">
                                            Member Resp
                                          </th>
                                          <th className="p-2 border font-inter text-[12px]">
                                            Status
                                          </th>
                                          {/* <th></th> */}
                                        </tr>
                                      </thead>

                                      <tbody>
                                        {totalClaim.map((row, index) => (
                                          <tr
                                            key={index}
                                            className="text-center border"
                                          >
                                            <td className="p-2 border text-xs text-black">
                                              {row.eob}
                                            </td>
                                            <td className="p-2 border text-xs text-black">
                                              {row.claim_no}
                                            </td>
                                            <td className="p-2 border text-xs text-black">
                                              {row.date}
                                            </td>
                                            <td className="p-2 border text-xs text-black">
                                              {row.for}
                                            </td>
                                            <td className="p-2 border text-xs text-black">
                                              {row.type}
                                            </td>
                                            <td className="p-2 border text-xs text-black">
                                              {row.provider}
                                            </td>
                                            <td className="p-2 border text-xs text-black">
                                              {row.total}
                                            </td>
                                            <td className="p-2 border text-xs text-black">
                                              {row.total_paid}
                                            </td>
                                            <td className="p-2 border text-xs text-black">
                                              {row.member_resp}
                                            </td>
                                            <td className="p-2 border text-xs text-[#00CA07]">
                                              {row.status}
                                            </td>
                                            {/* <td className="border w-8">
                                    <ChevronDown className="w-4 h-4 text-black" />
                                  </td> */}
                                          </tr>
                                        ))}
                                      </tbody>
                                    </table>
                                  </div>
                                </div>
                              )}
                            </p>
                            <p className="pt-2 pl-4 font-inter text-[12px] text-gray-900 font-normal">
                              <span className="font-medium font-inter">
                                {" "}
                                Claimed Amount:
                              </span>{" "}
                              {row.claimed_amount} <br />
                              Plan: {row.plan} | Type: {row.type} | Class:{" "}
                              {row.class}
                            </p>
                            <p className="max-w-60 pt-2 pl-4 font-inter text-[12px] text-gray-900 font-normal">
                              <span className="font-medium"> Provider:</span>{" "}
                              {row.provider} <br />
                              {row.address} {row.state} {row.pin}
                            </p>
                          </div>
                          <div className="ml-auto mt-auto b-2 r-2 p-4 mb-0">
                            <button
                              onClick={() => setShowModal(true)}
                              className="flex items-center gap-2 border border-gray-400 text-gray-700 px-2 py-1 rounded-full hover:bg-gray-100 transition"
                            >
                              <Info className="w-5 h-5 text-gray-700" />
                              <span className="text-sm font-medium">
                                View Detail
                              </span>
                            </button>
                            {/* Modal Popup */}
                            {showModal && (
                              <div className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50">
                                <div className="bg-white shadow-lg rounded-lg p-6 w-[700px] relative border border-gray-200">
                                  {/* Header */}
                                  <div className="flex justify-between items-start border-b pb-3">
                                    <h3 className="text-sky-500 font-inter font-semibold">
                                      CLAIM NUMBER: {row.claim_no}
                                      <br />
                                      <span className="text-xs text-gray-600 ">
                                        {row.diagnosis_code}
                                      </span>
                                    </h3>
                                    <button
                                      onClick={() => setShowModal(false)}
                                      className="text-teal-600 hover:text-teal-800 transition font-inter"
                                    >
                                      <XCircle className="w-6 h-6" />
                                    </button>
                                  </div>

                                  {/* Claim Details */}
                                  <p className="text-sm text-gray-700 mt-2 font-inter">
                                    <strong>Receipt Date:</strong>{" "}
                                    {row.receipt_date} |{" "}
                                    <strong>Patient Id:</strong>{" "}
                                    {row.patient_id}
                                  </p>

                                  <div className="flex flex-row gap-6 mt-4 font-inter">
                                    {/* Left Section */}
                                    <div className="w-1/3 border-r pr-4 text-sm font-inter text-gray-700">
                                      <p>
                                        <strong>Member Name:</strong>{" "}
                                        {row.member_name}
                                      </p>
                                      <p>
                                        <strong>SSN:</strong> {row.ssn}
                                      </p>
                                      <p>
                                        <strong>Member Id:</strong>{" "}
                                        {row.member_id}
                                      </p>
                                      <p>
                                        <strong>DOB:</strong> {row.dob}
                                      </p>

                                      <p className="mt-2">
                                        <strong>Claimed Amount:</strong>{" "}
                                        {row.claimed_amount}
                                      </p>
                                      <p>
                                        <strong>Plan:</strong> {row.plan} |{" "}
                                        <strong>Type:</strong> {row.type} |{" "}
                                        <strong>Class:</strong> {row.class}
                                      </p>

                                      <p className="mt-2">
                                        <strong>Provider:</strong>{" "}
                                        {row.provider}
                                      </p>
                                      <p>{row.address}</p>

                                      <p>
                                        {" "}
                                        {row.state} {row.pin}
                                      </p>
                                    </div>

                                    {/* Middle Section */}
                                    <div className="w-1/3 border-r pr-4 text-sm font-inter text-gray-700">
                                      <p>
                                        <strong>Primary Carrier:</strong>{" "}
                                        {row.primary_carrier}
                                      </p>
                                      <p>
                                        <strong>Accident:</strong>{" "}
                                        {row.accident}
                                      </p>
                                      <p>
                                        <strong>Status:</strong> {row.status}
                                      </p>
                                      <p>
                                        <strong>Assign:</strong> {row.assign}
                                      </p>
                                      <p>
                                        <strong>Prov Check#:</strong>{" "}
                                        {row.prov_check}
                                      </p>
                                      <p>
                                        <strong>Mem Check#:</strong>{" "}
                                        {row.mem_check}
                                      </p>
                                      <p>
                                        <strong>Subject:</strong> {row.subject}
                                      </p>
                                      <p>
                                        <strong>Allowable:</strong>{" "}
                                        {row.allowable}
                                      </p>
                                    </div>

                                    {/* Right Section - Notes */}
                                    <div className="w-1/3 text-sm text-gray-700">
                                      <div className="flex items-center gap-2">
                                        <FileText className="w-5 h-5 text-gray-600" />
                                        <h3 className="text-[#0486A5] font-semibold">
                                          Notes / Comments
                                        </h3>
                                      </div>
                                      <p className="mt-2 text-gray-600">
                                        {row.notes}
                                      </p>

                                      <textarea
                                        className="w-full p-2 mt-3 border border-gray-300 rounded-md text-xs focus:outline-none focus:ring-2 focus:ring-teal-500"
                                        rows="3"
                                        placeholder="Add Note (Max 100 characters)"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            )}
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MemberScreen;
