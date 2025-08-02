import React, { useState, useEffect } from 'react'

const Container = ({ children, getData, resourceName }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            const result = await getData();
            setData(result);
        };
        fetchData();
    }, [getData]);

  return (
    <>
        {React.Children.map(children, (child) => {
          if (React.isValidElement(child)) {
            return React.cloneElement(child, { [resourceName]: data })
          }
          return child
        })}
    </>
  )
}

export default Container