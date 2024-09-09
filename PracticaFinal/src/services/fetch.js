const url =  "http://localhost:3002/"


const get = async (endpoint, id = "") => {
  try {
    const response = await fetch(url + endpoint + "/" + id, {
      method: "GET",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();  // Asegúrate de usar await aquí
    return data;
  } catch (e) {
    console.error(e);
    return null;  // Asegúrate de retornar algo en caso de error
  }
};

const post = async (endpoint, body) => {
  try {
    const response = await fetch(url + endpoint, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();  // Asegúrate de usar await aquí
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const put = async (endpoint, id, body) => {
  try {
    const response = await fetch(url + endpoint + id, {
      method: "PUT",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();  // Asegúrate de usar await aquí
    return data;
  } catch (e) {
    console.error(e);
    return null;
  }
};

const Delete = async (endpoint, id) => {
  try {
    const response = await fetch(url + endpoint + id, {
      method: "DELETE",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();  // Asegúrate de usar await aquí
    return data;
  } catch (e) {
    console.error(e);
    return null;  // Asegúrate de retornar algo en caso de error
  }
};


export { get, post, put, Delete};