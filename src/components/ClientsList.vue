<template>
  <div>
    <h2>Clients</h2>
    <ul>
      <li v-for="client in clients" :key="client.id">
  {{ client.givenName }} {{ client.familyName }} – {{ client.email }}<br />
  <strong>Company ID:</strong> {{ client.companyId }}<br><br />
</li>
    </ul>
  </div>
</template>

<script>
import { getClients } from '../services/copilotApi.js';

export default {
  data() {
    return {
      clients: [],
    };
  },
async mounted() {
  try {
    const response = await getClients();
    this.clients = response.data.data; // ✅ correct extraction
  } catch (error) {
    console.error('Error fetching clients:', error);
  }
},
};
</script>


<style scoped>
h2 {
  color: #42b983;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}
</style>
