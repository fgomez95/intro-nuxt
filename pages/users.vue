<template>
  <div>
    <users-table :usersData="activeUsers" title="active" />
    <users-table :usersData="inactiveUsers" title="inactive" />
  </div>
</template>

<script>
import UsersTable from "~/components/UsersTable.vue";
import { getUsersApi } from "~/modules/api";

export default {
  components: {
    UsersTable
  },
  layout: "authenticated",
  async created() {
    const data = await getUsersApi();
    if (data.success) {
      this.$store.commit("users/setUsers", data.users);
    } else {
      console.log(data.message);
    }
  },
  computed: {
    activeUsers() {
      return this.users.filter(element => element.active);
    },
    inactiveUsers() {
      return this.users.filter(element => !element.active);
    },
    users() {
      return this.$store.state.users.users;
    }
  }
};
</script>