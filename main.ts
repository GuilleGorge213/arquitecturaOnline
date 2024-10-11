
const users = [
  {
    name: "Guillermo",
    email: "tuputamadre@gmail.com"
  }
];


const handler = (req: Request) : Response =>{
  const url = new URL(req.url);
  console.log("La url del host es: " + url.host)
  const path = url.pathname;
  if(path.length > 1 ) {
    console.log("Has llamado correctamente")
    if(path == "/users")
      return new Response(JSON.stringify(users), {status : 200});
  }
  else{
    console.log("Has llamado incorrectamente")
    return new Response("La ruta que has llamado: " + path + " no existe" , {status : 404});
  } 
  return new Response("Bienvenido",  {status : 200})
} 
Deno.serve({port:3000}, handler); 