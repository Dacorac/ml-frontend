const fetchItemDetail = async ( query ) => {
  console.log(query.queryKey[0])
  const url = `https://ml-api-test-dc.herokuapp.com/api/items/${query.queryKey[0]}`

  return await fetch(url)
    .then(res => res.json())
    .then(response => {
      const data = response.item
      if(data) {
        return data
      }
    });
};

export default fetchItemDetail;