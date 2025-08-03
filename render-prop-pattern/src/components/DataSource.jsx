import React, { useState, useEffect } from "react";

const DataSource = ({ render, getData = () => {} }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getData();
      setData(result);
    };

    fetchData();
  }, [getData]);

  return render(data);
};

export default DataSource;
