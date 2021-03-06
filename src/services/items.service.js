const fetchItems = async ( keyword ) => {
    try {
        const url = `https://ml-api-test-dc.herokuapp.com/api/items?q=${keyword.queryKey[0]}`
    
        return await fetch(url)
            .then(res => res.json())
            .then(response => {
              const data = response.items
              if (Array.isArray(data)) {
                  const items = data.map(item => {
                      const { condition, free_shiping, picture, title, price, id } = item
                      return { condition, free_shiping, picture, title, price, id }
                  });
                  return items
              }
            }
          );
    } catch(error) {
        console.error(error)
        throw new Error(`Error occured while fetching: ${error}`);
    }
  };

  export default fetchItems;