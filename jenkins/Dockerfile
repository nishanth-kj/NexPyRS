FROM jenkins/jenkins:lts
USER root

# Install basic prerequisites and npm
RUN apt-get update && apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg2 \
    software-properties-common \
    npm

# Install Docker CLI so Jenkins can run docker commands in pipelines
RUN curl -fsSL https://download.docker.com/linux/debian/gpg | apt-key add - \
    && add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/debian $(lsb_release -cs) stable" \
    && apt-get update && apt-get install -y docker-ce-cli

# Install Buf (for gRPC generation, as configured earlier)
RUN npm install -g @bufbuild/buf

# Drop back to regular jenkins user
USER jenkins
