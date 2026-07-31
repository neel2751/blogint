import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Pure marketing frontend: no server data layer, it only calls the backend
  // marketing API (see NEXT_PUBLIC_API_BASE_URL).
};

export default nextConfig;
