/** @type {import('next').NextConfig} */
const nextConfig = {
    images : {
        remotePatterns : [
            {
                protocol: "https",
                hostname: "randouser.me",
            },
        ],
    },
};

export default nextConfig;
