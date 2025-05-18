import { useState } from "react";
import { FiChevronDown, FiChevronUp, FiFileText } from "react-icons/fi";

const reportsData = [
  { id: 1, title: "Monthly Report - April", content: "Detailed monthly data for April." },
  { id: 2, title: "Weekly Activity - Week 18", content: "Summary of activities during week 18." },
  { id: 3, title: "User Engagement Stats", content: "Analysis of user engagement metrics." },
];

const Reports = () => {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <div className="max-w-3xl mx-auto p-4 sm:p-6 bg-white shadow-md rounded-md">
      <h1 className="text-4xl font-extrabold mb-6 text-center text-gray-900">
        Reports
      </h1>
      <ul className="space-y-4">
        {reportsData.map(({ id, title, content }) => (
          <li
            key={id}
            className="border rounded-lg p-4 flex flex-col sm:flex-row sm:items-center sm:justify-between cursor-pointer hover:bg-gray-50 transition"
            onClick={() => toggleExpand(id)}
          >
            <div className="flex items-center space-x-3">
              <FiFileText className="text-indigo-600 w-6 h-6" />
              <span className="text-lg font-semibold text-gray-800">{title}</span>
            </div>
            <div className="flex items-center mt-2 sm:mt-0">
              {expandedId === id ? (
                <FiChevronUp className="w-6 h-6 text-indigo-600" />
              ) : (
                <FiChevronDown className="w-6 h-6 text-indigo-600" />
              )}
            </div>
            {expandedId === id && (
              <p className="mt-3 text-gray-600 sm:mt-2 sm:pl-10">{content}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reports;
