// We should handle the API calls here. These functions should send a HTTP
// request to the API and return the response.

export async function login(data) {
  return {
    errors: [],
    success: true,
    data: {
      id: 1,
      name: 'Jon Snow',
      email: 'jon@snow.com',
      image: 'https://robohash.org/jonsnow.png',
      phone: '+90 555 555 55 55',
      company: "Night's Watch",
    },
  };
}

export async function addUser(data) {
  return {
    errors: [],
    success: true,
    data,
  };
}

export async function updateUser(data) {
  return {
    errors: [],
    success: true,
    data,
  };
}

export async function deleteUser(data) {
  return {
    errors: [],
    success: true,
    data,
  };
}
