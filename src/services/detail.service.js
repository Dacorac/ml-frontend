const fetchItemDetail = async ( query ) => {
    console.log(query.queryKey[0])
    const url = `https://ml-api-test-dc.herokuapp.com/api/${query.queryKey[0]}`

    const response = await fetch(url)
    const results = await response.json();
    return results; 
  };