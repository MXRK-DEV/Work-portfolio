/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    output: 'export',
    images: {
        loader: 'custom',
        loaderFile: './loader.js',
        remotePatterns: [
            {
                protocol:"https",
                hostname: "images.pexels.com"
            }
        ]
    }
};

export default nextConfig;
