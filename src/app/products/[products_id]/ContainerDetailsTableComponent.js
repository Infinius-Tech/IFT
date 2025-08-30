

"use client";

import { Package, Box, Weight, Container, Download } from "lucide-react";
import { packagingData } from "@/Utils/ContainerPackageData";

export default function PackagingTable() {
  // const [activeTab, setActiveTab] = useState("boxes");

  // const downloadCSV = () => {
  //   const headers = "Pack Size,Dimension (mm),Gross Weight (Kgs),Net Weight (Kgs),Boxes/Carton (20ft),Trays (20ft),Boxes/Carton (40ft),Trays (40ft)\n";
  //   const csvContent = packagingData.map(row => 
  //     `"${row.packSize}","${row.dimension}","${row.grossWeight}","${row.netWeight}","${row.boxes20ft}","${row.trays20ft}","${row.boxes40ft}","${row.trays40ft}"`
  //   ).join("\n");
    
  //   const blob = new Blob([headers + csvContent], { type: 'text/csv;charset=utf-8;' });
  //   const url = URL.createObjectURL(blob);
  //   const link = document.createElement("a");
  //   link.setAttribute("href", url);
  //   link.setAttribute("download", "packaging_details.csv");
  //   link.style.visibility = 'hidden';
  //   document.body.appendChild(link);
  //   link.click();
  //   document.body.removeChild(link);
  // };

  return (
    <section className="py-12 bg-gradient-to-b mt-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#8B4513] mb-4 flex items-center justify-center">
            <Package className="mr-3" size={36} />
            Packaging Details
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Complete specifications for our carton and tray packaging options, including dimensions, weights, and container capacity.
          </p>
        </div>

        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Table Container */}
          <div className="overflow-x-auto">
            <table className="w-full table-fixed">
              <colgroup>
                <col className="w-[150px]" /> {/* Pack Size */}
                <col className="w-[140px]" /> {/* Dimension */}
                <col className="w-[120px]" /> {/* Gross Weight */}
                <col className="w-[120px]" /> {/* Net Weight */}
                <col className="w-[120px]" /> {/* 20ft Boxes */}
                <col className="w-[120px]" /> {/* 20ft Trays */}
                <col className="w-[120px]" /> {/* 40ft Boxes */}
                <col className="w-[120px]" /> {/* 40ft Trays */}
              </colgroup>
              <thead>
                <tr className="bg-amber-50">
                  <th className="px-4 py-4 font-semibold text-[#8B4513]">
                    Pack Sizes
                  </th>
                  <th className="px-4 py-4 font-semibold text-[#8B4513] text-wrap text-center">
                    Dimension L x W x H (mm)
                  </th>
                  <th className="px-4 py-4 font-semibold text-[#8B4513] text-wrap text-center">
                    <div className="flex items-center">
                      <Weight className="mr-2" size={18} />
                      Gross Weight (Kgs)
                    </div>
                  </th>
                  <th className="px-4 py-4 font-semibold text-[#8B4513] text-wrap text-center">
                    <div className="flex items-center">
                      <Weight className="mr-2" size={18} />
                      Net Weight (Kgs)
                    </div>
                  </th>
                  <th className="px-4 py-4 font-semibold text-[#8B4513] text-wrap text-center">
                    20ft Container Boxes
                  </th>
                  <th className="px-4 py-4 font-semibold text-[#8B4513] text-wrap text-center">
                    20ft Container Trays
                  </th>
                  <th className="px-4 py-4 font-semibold text-[#8B4513] text-wrap text-center">
                    40ft Container Boxes
                  </th>
                  <th className="px-4 py-4 font-semibold text-[#8B4513] text-wrap text-center">
                    40ft Container Trays
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {packagingData.map((item, index) => (
                  <tr 
                    key={index} 
                    className={index % 2 === 0 ? "bg-white" : "bg-amber-50/50"}
                  >
                    <td className="px-4 py-4 font-medium text-gray-900">
                      {item.packSize}
                    </td>
                    <td className="px-4 py-4 text-gray-700">
                      {item.dimension}
                    </td>
                    <td className="px-4 py-4 text-gray-700">
                      {item.grossWeight}
                    </td>
                    <td className="px-4 py-4 text-gray-700">
                      {item.netWeight}
                    </td>
                    <td className="px-4 py-4 text-gray-700">
                      {item.boxes20ft}
                    </td>
                    <td className="px-4 py-4 text-gray-700">
                      {item.trays20ft}
                    </td>
                    <td className="px-4 py-4 text-gray-700">
                      {item.boxes40ft}
                    </td>
                    <td className="px-4 py-4 text-gray-700">
                      {item.trays40ft}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Table Footer */}
          <div className="bg-amber-50 px-6 py-4 text-sm text-gray-600">
            <p>All dimensions and weights are approximate and may vary slightly based on production specifications.</p>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-[#8B4513] mb-3 flex items-center">
              <Box className="mr-2" size={20} />
              Packaging Specifications
            </h3>
            <p className="text-gray-700">
              Our packaging is designed to ensure product safety during transit while maximizing container space efficiency.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-[#8B4513] mb-3 flex items-center">
              <Container className="mr-2" size={20} />
              Container Loading
            </h3>
            <p className="text-gray-700">
              Optimized loading patterns ensure maximum efficiency for both 20ft and 40ft container shipments.
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-md">
            <h3 className="text-lg font-semibold text-[#8B4513] mb-3 flex items-center">
              <Weight className="mr-2" size={20} />
              Weight Considerations
            </h3>
            <p className="text-gray-700">
              Gross weight includes packaging materials. Net weight represents the actual product weight.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}