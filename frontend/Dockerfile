FROM node:18-alpine as build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
# We don't set VITE_API_URL here as it should be provided at build time or runtime if using a proxy, 
# but for Vite, it's baked at build time. For a real Cloud Run deployment, 
# you'd inject the build arg or use a runtime config approach.
# For simplicity, we just build it.
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/dist /usr/share/nginx/html
# Copy custom nginx config if needed for React Router (SPA)
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
