# Set base image
FROM node:15.6.0-alpine 

# use app as the working directory
WORKDIR /app 

# copy the files from the current directory . to /app
COPY . /app 

# Install Dependencies 
RUN npm ci

# Build production app
RUN npm run build

# Listen on the specified port 
EXPOSE 3000

# set node server
ENTRYPOINT [ "npm run start" ]
