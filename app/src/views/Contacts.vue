<template>
  <div class="contacts">
    <h2>Contacts</h2>
    <div class="contact-list">
      <router-link
        tag="div"
        class="item"
        :to="`/contacts/${contact.id}`"
        v-for="contact in contacts"
        :key="contact.id"
      >
        <strong>{{contact.name}}</strong>
        <br />
        <span>{{contact.jobTitle}}</span>
      </router-link>
    </div>

    <div v-if="showModal" class="modal-route">
      <div class="modal-content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/db.js";
export default {
  watch: {
    $route: {
      immediate: true,
      handler: function(newVal, oldVal) {
        this.showModal = newVal.meta && newVal.meta.showModal;
      }
    }
  },
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    contacts() {
      return Object.values(db.contacts);
    }
  }
};
</script>

<style lang="scss" scoped>
.contact-list {
  .item {
    &:not(:last-child) {
      margin-bottom: 8px;
    }
    padding: 16px;
    border-radius: 4px;
    border: solid 1px #efefef;
  }
}
.modal-route {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba($color: #000000, $alpha: 0.5);
  .modal-content {
    width: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: white;
  }
}
</style>