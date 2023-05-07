<template>
  <ScrollUpButton />
  <PageTitle :Title="experienceTitle" />
  <div class="central-box">
    <div style="width: 100%">
      <div class="inner-wrap-third">
        <ListBuilder :listObject="experienceItems.programming" />
      </div>
      <div class="inner-wrap-third">
        <ListBuilder :listObject="experienceItems.cloudService" />
      </div>
      <div class="inner-wrap-third">
        <ListBuilder :listObject="experienceItems.containerDeployment" />
      </div>
    </div>
    <div style="width: 100%">
      <div class="inner-wrap-third">
        <ListBuilder :listObject="experienceItems.versionTools" />
      </div>
      <div class="inner-wrap-third">
        <ListBuilder :listObject="experienceItems.ticketAndMonitor" />
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
            { text: "Ruby on Rails" },
            { text: "Javascript" },
            { text: "C/C++" },
            { text: "Python" },
            { text: "YAML" },
            { text: "JSON" },
            { text: "SQL" }
          ]
        },
        cloudService: { 
          title: "AWS Cloud Services",
          items: [
            { text: "EKS" },
            { text: "EC2" },
            { text: "ECR" },
            { text: "Lambda" },
            { text: "RDS" },
            { text: "S3" },
            { text: "SQS" },
            { text: "Route 53" }
          ]
        },
        containerDeployment: {
          title: "Container Technologies",
          items: [
            { text: "Docker" },
            { text: "Kubernetes" },
            { text: "EKS" },
            { text: "Keda (Kubernetes Event-Driven Autoscaling)"}
          ]
        },
        versionTools: {
          title: "Versioning Tools and Deployment",
          items: [
            { text: "Git" },
            { text: "Bitbucket" },
            { text: "Github" },
            { text: "Drone CI"}
          ]
        },
        ticketAndMonitor: {
          title: "Ticketing and Monitoring",
          items: [
            { text: "Jira" },
            { text: "Grafana"},
            { text: "CloudWatch"}
          ]
        }
      },
    }
  }
}
</script>

<style scoped>
</style>