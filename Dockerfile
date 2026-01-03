# Multi-stage Dockerfile for building and serving the Vite React app with nginx

FROM node:18-alpine AS builder

WORKDIR /app

# Copy package files first to leverage Docker layer caching
COPY package.json pnpm-lock.yaml ./

# Install pnpm and project dependencies
RUN npm install -g pnpm@latest
RUN pnpm install --frozen-lockfile

# Copy the rest of the sources
COPY . .

# Allow setting the API base URL at build time. Vite reads import.meta.env at build.
ARG VITE_API_BASE_URL
ENV VITE_API_BASE_URL=${VITE_API_BASE_URL:-http://frontend:3000}
ENV NODE_ENV=production

# Build the app
RUN pnpm run build


FROM nginx:stable-alpine AS runner

# Remove default nginx website
RUN rm -rf /usr/share/nginx/html/*

# Copy built files from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Copy custom nginx config to serve SPA
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

