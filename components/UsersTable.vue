<template>
  <div>
    <h3 id="title">{{title}}</h3>
    <table>
      <tr>
        <th>Username</th>
        <th>Email</th>
      </tr>
      <tr v-for="(user, id) in usersData" :key="id">
        <td>{{user.username}}</td>
        <td>{{user.email}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ["usersData", "title"]
};
</script>

<style scoped>
table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
</style>