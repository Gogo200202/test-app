/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
    output: "export",
    images: {
      loader: "akamai",
      path: "",
    },
    base:"/test-app"
   // assetPrefix: "./",
  };
  
  export default nextConfig;