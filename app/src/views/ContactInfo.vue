<template>
  <div class="contact-info">
    <router-link to="../">X</router-link>
    <h3>{{contact.name}}</h3>

    <h4>Job Title</h4>
    <span>{{contact.jobTitle}}</span>
    3
    <h4>Email</h4>
    <span>{{contact.email}}</span>

    <h4>Phone</h4>
    <span>{{contact.phone}}</span>
  </div>
</template>

<script>
import db from "@/db.js";
export default {
  props: ["contactId"],
  data() {
    return {
      contact: ""
    };
  },
  created() {
    this.contact = db.contacts[this.contactId];
  }
};
</script>

<style lang="scss" scoped>
.contact-info {
    padding: 16px;
}
</style>