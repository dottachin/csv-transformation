import React from 'react';
import { useDrag } from 'react-dnd';

const TransformationBlock = ({ operation }) => {
  const [{ isDragging }, drag] = useDrag({
    type: 'transformation',
    item: { operation },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '10px',
        border: '1px solid #333',
        cursor: 'move',
      }}
    >
      {operation}
    </div>
  );
};

export default TransformationBlock;
