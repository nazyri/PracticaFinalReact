const url =  "http://localhost:3001/"


  const get = async (endpoint, id = "") => {
    try {
      const response = await fetch(url+endpoint+"/"+id, {
        method: "GET",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        }
      });
      const data  = response.json()
    return data
     
    } catch (e) {
      console.error(e);
         
    } 
};


  const post = async (endpoint, body) => {  
    try {
      const response = await fetch(url+endpoint, {
        method: "POST",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      });
      
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
    
      return null;
    } 
  

}

   const put = async (endpoint,id, body) => {

    try {
      const response = await fetch(url+endpoint+id, {
        method: "PUT",
        mode: "cors",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body)
      });
     
      const data = await response.json();
      return data;
    } catch (e) {
      console.error(e);
      
      return null;
    } 
 
}

const Delete = async (endpoint, id ) => {
  try {
    console.log('llega al delete');
    const response = await fetch(url+endpoint+id, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      }
    });
    const data  = response.json()
  return data
   
  } catch (e) {
    console.error(e);
  
  } 
};

export { get, post, put, Delete};