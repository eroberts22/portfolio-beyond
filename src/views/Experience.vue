<template>
  <ScrollUpButton />
  <PageTitle :Title="experienceTitle" />
  <div class="central-box">
    <div style="width: 100%;">
      <div>
        <ListBuilder :listObject="experienceItems.professionalExperience1" />
      </div>
      <div>
        <ListBuilder :listObject="experienceItems.professionalExperience2" />
      </div>
      <div>
        <ListBuilder :listObject="experienceItems.professionalExperience3" />
      </div>
    </div>
    <hr class="line-break" />
  </div>
  <PageTitle :Title="technicalSkillsTitle" />
  <div class="central-box">


    <div style="width: 100%">
      <div class="inner-wrap-half">
        <ListBuilder :listObject="experienceItems.programmingLanguages" />
        <ListBuilder :listObject="experienceItems.frameworks" />
        <ListBuilder :listObject="experienceItems.containerTechnologies" />
        <ListBuilder :listObject="experienceItems.ciCd"/>

      </div>
      <div class="inner-wrap-half">
        <ListBuilder :listObject="experienceItems.amazonWebServices" />
        <ListBuilder :listObject="experienceItems.tools" />
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
      technicalSkillsTitle: {
        text: "Technical Skills",
        span: ".",
      },
      experienceItems: {
        programmingLanguages: {
          title: "Programming Languages",
          items: [
            {
              text: "TypeScript/HTML/CSS",
            },
            {
              text: "Ruby",
            },
            {
              text: "Java",
            },
            {
              text: "C/C++",
            },
            {
              text: "Python",
            },
          ],
        },
        frameworks: {
          title: "Frameworks/Libraries",
          items: [
            {
              text: "React",
            },
            {
              text: "Angular",
            },
            {
              text: "Vue",
            },
            {
              text: "Ruby on Rails",
            },
            {
              text: "Spring",
            },
            {
              text: "Node.js",
            },
          ],
        },
        containerTechnologies: {
          title: "Container Technologies",
          items: [
            {
              text: "Docker",
            },
            {
              text: "Kubernetes",
            },
            {
              text: "KEDA (Kubernetes Event Driven Autoscaling)",
            },
          ],
        },
        ciCd: {
          title: "CI/CD",
          items: [
            {
              text: "GitLab",
            },
            {
              text: "Drone CI",
            },
          ],
        },
        amazonWebServices: {
          title: "Amazon Web Services",
          items: [
            {
              text: "Elastic Kubernetes Service (EKS)",
            },
            {
              text: "Elastic Container Service (ECS)",
            },
            {
              text: "Elastic Compute Cloud (EC2)",
            },
            {
              text: "Elastic Container Registry (ECR)",
            },
            {
              text: "Lambda",
            },
            {
              text: "DynamoDB"
            },
            {
              text: "API Gateway"
            },
            {
              text: "Cloud Map",
            },
            {
              text: "Cloudwatch Alarms"
            },
            {
              text: "Route 53"
            },
            {
              text: "Simple Storage Service (S3)"
            }
          ],
        },
        tools: {
          title: "Tools",
          items: [
            {
              text: "Git",
            },
            {
              text: "Linux",
            },
            {
              text: "Jira",
            },
            {
              text: "GitLab",
            },
            {
              text: "Bitbucket",
            },
          ],
        },
        professionalExperience1: {
          title: "Software Engineer",
          items: [
            { text: "Commerce Architects" },
            {
              text: "October 2023 - Present",
              subInfo: [
                { text: "Developed ecommerce frontend applications using React, TypeScript, and Next.js. Implemented state management solutions using Jotai and query management with React Query." },
                { text: "Built and maintained backend APIs using Java and Spring Boot." },
                { text: "Integrated and managed third-party APIs to extend application functionality." },
                { text: "Managed AWS infrastructure using Terraform, provisioning and configuring AWS resources such as API Gateway, ECS, Cloud Map, Cloudwatch Alarms, Route 53, and Lambda" },
                { text: "Deployed and managed containerized Java/Spring Boot applications with ECS (Elastic Container Service) and ECR (Elastic Container Registry)." },
                { text: "Deployed and managed TypeScript/Node.js applications on Lambda and API Gateway." },
                { text: "Collaborated with cross-functional teams in fast-paced environments, ensuring timely project delivery and clear communication." },
                { text: "Authored comprehensive documentation on core features and integrations for both internal and external stakeholders." },
                { text: "Designed architecture diagrams to visualize system designs and feature flows." },
                { text: "Provided support to team members through pair programming sessions, performing thorough code reviews, and active communication." },
                { text: "Revamped the onboarding process for new software engineers." },
              ]
            }
          ]
        },
        professionalExperience2: {
          title: "Software Engineer",
          items: [
            { text: "Two Barrels LLC" },
            {
              text: "May 2022 - September 2023",
              subInfo: [
                { text: "Used JavaScript, Node.js, and Puppeteer to automate tasks such as form submissions, data scraping, and document processing." },
                { text: "Built components for web applications using Vue.js, managing state with Vuex and integrating with an internal REST API." },
                { text: "Developed and maintained scalable and robust Ruby on Rails applications." },
                { text: "Deployed Ruby on Rails applications EKS-backed Kubernetes clusters, leveraging Docker for containerization, and ECR for secure Docker container image storage." },
                { text: "Experience utilizing Kubernetes features such as deployments, services, and ingress controllers to manage application resources effectively." },
                { text: "Optimized Sidekiq job processing using KEDA (Kubernetes Event-Driven Autoscaling) to scale applications in Kubernetes based on Redis queue job volume." },
                { text: "anaged other AWS infrastructure such as S3 for file storage and Route 53 for DNS routing." },
                { text: "Designed CI/CD pipelines with Drone CI and GitLab to automate build, test, and deploy processes." },
              ]
            }
          ]
        },
        professionalExperience3: {
          title: "Computer Science Tutor",
          items: [
            { text: "Whitworth University" },
            {
              text: "September 2021 - February 2022",
              subInfo: [
                { text: "Assisted the computer science department at Whitworth University by communicating with professors about classes and working with first- and second-year computer science students, helping with various questions and problems regarding assignments and projects." }
              ]
            }
          ]
        }
      },
    }
  }
}
</script>

<style scoped></style>