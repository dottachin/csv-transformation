import React from 'react';
import { useDrop } from 'react-dnd';

const FileDropzone = ({ onFileDrop }) => {
  const [{ isOver }, drop] = useDrop({
    accept: '.csv',
    drop: (item) => {
      onFileDrop(item.file);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div
      ref={drop}
      style={{
        border: isOver ? '2px dashed #333' : '2px dashed #ccc',
        padding: '20px',
        textAlign: 'center',
      }}
    >
      <p>Drag & drop a CSV file here</p>
    </div>
  );
};

export default FileDropzone;
