const users = [
  {
    name: "Guillermo",
    email: "tuputamadre@gmail.com", // Replace this with a placeholder if sensitive
  }
];

type User = {
  name: string,
  email: string,
  age: number
};

const userArray: User[] = [];



const handler = async (req: Request): Promise<Response> => {
  const url = new URL(req.url);
  const method = req.method;
  const path = url.pathname;

  // Log request details for debugging
  console.log(`Received ${method} request at ${path}`);

  try {
    if (method === "GET") {
      if (path === "/users") {
        return new Response(JSON.stringify(userArray), { status: 200 });
      }
      return new Response("GET: Not found", { status: 404 });
    }

    // Handle POST requests
    else if (method === "POST") {
      const payload = await req.json(); 
      addUsers(payload); 
      console.log(userArray);      
      return new Response(`POST request successful`, { status: 200 });
    }

    // Handle PUT requests
    else if (method === "PUT") {
      const payload = await req.json(); 
      console.log("PUT payload:", payload);
      return new Response(`PUT request successful`, { status: 200 });
    }

    // Handle DELETE requests
    else if (method === "DELETE") {

      return new Response("DELETE request successful", { status: 200 });
    }

    // Method not implemented
    return new Response("Method not implemented yet", { status: 404 });
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response("Server error", { status: 500 });
  }
};

// Start the server
Deno.serve({ port: 3000 }, handler);



function addUsers(payload: User[]): void {
  payload.forEach((user:User) => {
    userArray.push(user);
  });
}

