/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // AVIF encoding in this sharp build hangs for many seconds per image —
    // WebP gives nearly the same compression with none of that risk.
    formats: ["image/webp"],
  },
};

export default nextConfig;
