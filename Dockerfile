# Set base image
FROM node:15.6.0-alpine 

# use app as the working directory
WORKDIR /app 

ARG REACT_APP_API_SECRET
ARG REACT_APP_SENTRY_DSN

ENV REACT_APP_API_SECRET=$REACT_APP_API_SECRET
ENV REACT_APP_SENTRY_DSN=$REACT_APP_SENTRY_DSN

# copy the files from the current directory . to /app
COPY . /app 

# Install Dependencies 
RUN npm install

# Build production app
RUN npm run build

# Listen on the specified port 
EXPOSE 3000

# set node server
ENTRYPOINT [ "npm run start" ]
