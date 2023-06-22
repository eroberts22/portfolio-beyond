<template>
  <ScrollUpButton />
  <PageTitle :Title="experienceTitle" />
  <div class="central-box">
    <div style="width: 100%">
      <div >
        <ListBuilder :listObject="experienceItems.skills" />
      </div>
    </div>
    <hr class="line-break" />
    
    <div style="width: 100%">
      <div class="inner-wrap-half">
        <ListBuilder :listObject="experienceItems.programming" />
      </div>
      <div class="inner-wrap-half">
        <ListBuilder :listObject="experienceItems.containerDeployment" />
      </div>
    </div>
    <div style="width: 100%">
      <div class="inner-wrap-half">
        <ListBuilder :listObject="experienceItems.cloudService" />
      </div>
      <div class="inner-wrap-half">
        <ListBuilder :listObject="experienceItems.versionTools" />
      </div>
    </div>
  </div>
</template>

<script>
import ScrollUpButton from "../components/ScrollUpButton.vue";
import PageTitle from "../components/PageTitle.vue";
import ListBuilder from '@/components/ListBuilder.vue';
export default {
  name: "ExperienceView",
  components: {
    ScrollUpButton,
    PageTitle,
    ListBuilder
  },
  data() {
    return {
      experienceTitle: {
        text: "Professional Experience",
        span: "."
      },
      experienceItems: {
        programming: {
          title: "Programming",
          items: [
            { text: "Utilized JavaScript and frontend frameworks to create responsive and user-friendly interfaces." },
            { text: "Developed and maintained Ruby on Rails applications, implementing robust and scalable backend functionality. " },
            { text: "Experience monitoring Redis queues and dynamically scaling a Sidekiq application in Kubernetes based on the number of jobs in the queues, optimizing resource utilization and responsiveness." },
          ]
        },
        cloudService: { 
          title: "AWS Cloud Services",
          items: [
            { text: "Managed cloud infrastructure on AWS, deploying applications on EKS." },
            { text: "Utilized ECR for creating and managing private container registries, enabling secure storage and distribution of Docker container images." },
            { text: "Leveraged S3 for scalable and cost-effective storage of files and assets." },
            { text: "Implemented asynchronous communication between systems using SQS for reliable message queuing." },
            { text: "Managed DNS records and routing using Route 53 for seamless access to applications." }
          ]
        },
        containerDeployment: {
          title: "Container Technologies",
          items: [
            { text: "Hosted Ruby on Rails applications on Kubernetes clusters, ensuring seamless deployment and scalability via Keda (Kubernetes event-driven autoscaling)." },
            { text: "Managed cloud infrastructure on AWS, deploying applications on EKS." },
            { text: "Experience utilizing Kubernetes features such as deployments, services, and ingress controllers to manage application resources effectively." },
            { text: "Utilized Docker for containerization, ensuring consistency and portability of applications across environments, as well as facilitating efficient deployment and orchestration of Ruby on Rails applications."}
          ]
        },
        versionTools: {
          title: "Versioning Tools and Deployment",
          items: [
            { text: "Collaborated with cross-functional teams using GitLab and Bitbucket for version control and code collaboration." },
            { text: "Implemented CI/CD pipelines with Drone CI, automating build, test, and deployment processes." },
            { text: "Utilized Jira for project management, tracking tasks, and ensuring project milestones and deadlines were met."}
          ]
        },
        skills: {
          title: "Skills",
          items: [
            { text: "Programming Languages: Ruby on Rails, JavaScript, C/C++, Python" },
            { text: "Job Processing: Sidekiq, Redis" },
            { text: "Container Technologies: Docker, Kubernetes (EKS), Keda (Kubernetes Event-Driven Autoscaling)" },
            { text: "AWS Cloud Services: EKS, EC2, ECR, Lambda, S3, SQS, Route 53" },
            { text: "Data Formats: YAML, JSON, SQL" },
            { text: "Version Control: GitLab, Bitbucket, Github" },
            { text: "CI/CD: Drone CI, GitLab" },
            { text: "Project Management: Jira" },
          ]
        },
      },
    }
  }
}
</script>

<style scoped>
</style>