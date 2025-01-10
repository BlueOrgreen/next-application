import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    // 启用react严格模式(可选)
    reactStrictMode: true,
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
};

export default nextConfig;
