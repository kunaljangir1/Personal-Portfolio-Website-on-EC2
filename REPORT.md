# Project Report: Personal Portfolio Deployment on AWS EC2

**Project Name**: Personal Portfolio Website on EC2  
**Level**: Beginner / Student Mini-Project  
**Technologies**: AWS EC2, Nginx, React, Vite, Framer Motion

---

## 1. Project Overview
This project involves the development and deployment of a modern, responsive personal portfolio website on the Amazon Web Services (AWS) cloud platform. The primary objective was to understand the lifecycle of a web application—from local development to cloud hosting and server configuration.

## 2. Objectives
- To design and build a responsive user interface using **React** and **Vite**.
- To understand **Infrastructure as a Service (IaaS)** by launching and managing an **AWS EC2** instance.
- To configure a production-grade web server using **Nginx**.
- To implement security best practices using **AWS Security Groups** and **Elastic IPs**.

## 3. Technology Stack
- **Frontend**: React (UI Library), Vite (Build Tool), Framer Motion (Animations), Lucide React (Icons).
- **Environment**: Node.js (Local development).
- **Cloud Provider**: AWS (Amazon Web Services).
- **Service**: EC2 (Elastic Compute Cloud - Ubuntu 22.04 LTS).
- **Web Server**: Nginx (Reverse Proxy & Static Hosting).

## 4. Implementation Steps

### Phase 1: Frontend Development
The portfolio was built using a component-based architecture. Key sections include:
- **Hero**: Introduction and CTA.
- **About**: Project background and goal.
- **Skills**: Technical proficiency categorization.
- **Projects**: Demonstration of work with visual mockups.
- **Contact**: User interaction form.

### Phase 2: AWS Infrastructure Setup
1. **EC2 Instance Launch**: Launched a `t2.micro` instance with Ubuntu 22.04.
2. **Security Group Configuration**: Opened ports 22 (SSH), 80 (HTTP), and 443 (HTTPS).
3. **Elastic IP Allocation**: Assigned a static IP to ensure accessibility after restarts.

### Phase 3: Server Configuration
1. **System Update**: `sudo apt update && sudo apt upgrade`.
2. **Web Server Installation**: `sudo apt install nginx`.
3. **Site Configuration**: Created a custom Nginx configuration to serve static files from `/var/www/portfolio` and handle client-side routing.

### Phase 4: Deployment
1. **Local Build**: Generated the production bundle using `npm run build`.
2. **File Transfer**: Used `scp` or `git clone` to move files to the server.
3. **Permission Management**: Set correct ownership (`www-data`) and permissions (755) for the web directory.

## 5. Challenges & Learnings
- **Challenge**: Configuring Nginx to handle React's client-side routing.
- **Solution**: Implemented `try_files $uri $uri/ /index.html;` in the Nginx config.
- **Learning**: Gained hands-on experience with Linux command line, cloud networking, and server-side optimization.

## 6. Conclusion
The project successfully demonstrates the integration of modern frontend technologies with established cloud infrastructure patterns. The resulting portfolio is not only a showcase of skills but also a testament to understanding the full-stack deployment process.
