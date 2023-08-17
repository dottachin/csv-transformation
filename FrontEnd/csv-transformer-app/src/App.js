import React, { useState } from 'react';
import FileDropzone from './FileDropzone';
import TransformationBlock from './TransformedDataTable';
import TransformedDataTable from './TransformedDataTable';

const App = () => {
// eslint-disable-next-line
  const [uploadedFile, setUploadedFile] = useState(null);
  // eslint-disable-next-line
  const [transformedData, setTransformedData] = useState([]);

  const handleFileDrop = (file) => {
    setUploadedFile(file);
  };

  const handleTransformationDrop = (operation) => {
    // Implement transformation logic here
    // Update transformedData state
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>CSV Transformer App</h1>
      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h2>File Upload</h2>
          <FileDropzone onFileDrop={handleFileDrop} />
        </div>
        <div style={{ flex: 1 }}>
          <h2>Transformation Blocks</h2>
          <TransformationBlock operation="Addition" onDrop={handleTransformationDrop} />
          
        </div>
      </div>
      <h2>Transformed Data</h2>
      <TransformedDataTable data={transformedData} />
    </div>
  );
};

export default App;
