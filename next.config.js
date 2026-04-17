module.exports = {
    reactStrictMode: true,
    swcMinify: true,
    compress: true,
    images: {
        formats: ["image/avif", "image/webp"],
        deviceSizes: [320, 500, 750, 1080, 1920],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "**",
            },
        ],
    },
    headers: async () => {
        return [
            {
                source: "/:path*",
                headers: [
                    { key: "X-DNS-Prefetch-Control", value: "on" },
                    { key: "X-Frame-Options", value: "SAMEORIGIN" },
                    { key: "X-Content-Type-Options", value: "nosniff" },
                    {
                        key: "Referrer-Policy",
                        value: "strict-origin-when-cross-origin",
                    },
                ],
            },
        ];
    },
};
