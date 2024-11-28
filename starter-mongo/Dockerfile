# Use the official MongoDB image
FROM mongo:latest

# Expose the MongoDB default port
EXPOSE 27017

# Start the MongoDB server
CMD ["mongod", "--bind_ip_all"]

# docker build -t custom-mongodb .
# docker run --name mongodb -p 27017:27017 -d custom-mongodb
