const fetchItemDetail = async ( query ) => {
  try {
    const url = `https://ml-api-test-dc.herokuapp.com/api/items/${query.queryKey[0]}`
  
    return await fetch(url)
      .then(res => res.json())
      .then(response => {
        const data = response.item
        if(data) {
          return data
        }
      });
  } catch(error) {
    console.error(error);
    throw new Error(`Error occurred while fetching: ${error}`);
  }
};

export default fetchItemDetail;