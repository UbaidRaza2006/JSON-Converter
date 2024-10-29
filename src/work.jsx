import React, { useState } from 'react';
import Papa from 'papaparse'; // Import the PapaParse library

const CsvToJsonConverter = () => {
  const [jsonData, setJsonData] = useState([]);

  // Function to handle file upload and convert CSV to JSON
  const handleFileUpload = (event) => {
    const file = event.target.files[0];

    // Parse CSV file using PapaParse
    Papa.parse(file, {
      header: true, // Automatically converts the CSV to JSON with keys as headers
      skipEmptyLines: true, // Skip empty lines in the CSV
      complete: (result) => {
        setJsonData(result.data); // Store the converted JSON data in the state
      },
      error: (error) => {
        console.error('Error parsing CSV:', error);
      },
    });
  };

  return (
    <div>
      <h1>CSV to JSON Converter</h1>
      {/* File input to upload CSV */}
      <input type="file" accept=".csv" onChange={handleFileUpload} />

      {/* Display the JSON data */}
      <h2>Converted JSON Data</h2>
      <pre>{JSON.stringify(jsonData, null, 2)}</pre>
    </div>
  );
};

export default CsvToJsonConverter;
