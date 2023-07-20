/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    images: {
        unoptimized: true,
        domains: ['reqres.in']
    },
    
}

module.exports = nextConfig
