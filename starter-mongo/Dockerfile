# Use the official MongoDB image
FROM mongo:latest

# Expose the MongoDB default port
EXPOSE 27017

# Start the MongoDB server
CMD ["mongod", "--bind_ip_all"]

# docker build -t payload-mongodb-starter .
# docker run --name starter-site-mongo -p 27017:27017 -d payload-mongodb-starter