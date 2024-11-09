<script setup>
import { reactive } from "vue";
import { useRouter } from "vue-router";
//import db connection class.
import dbConnection from "../assets/database/dbConnection";

const routePush = useRouter();
let allContactsData = reactive({ data: {} });
let allGroupData = reactive({ data: [] });  // Initialize it as an array

//define props
const props = defineProps({
   pageName: {
      type: String,
      required: true,
   },
   id: {
      type: Number,
   },
});

// Fetch all group data
async function getAllGroup() {
   try {
      const result = await dbConnection.getAllGroup();
      allGroupData.data = result.data;
   } catch (error) {
      console.log(error);
   }
}

// Fetch single contact for editing, if page is in edit mode
if (props.pageName === "editPage" && props.id) {
   async function getSingleContactsForEdit(id) {
      try {
         const result = await dbConnection.getSingleContacts(id);
         allContactsData.data = result.data;
      } catch (error) {
         console.log(error);
      }
   }
   getSingleContactsForEdit(props.id);
}

// Add new contact
async function addNewContact() {
   try {
      const result = await dbConnection.addNewContact(allContactsData.data);
      routePush.push("/");
   } catch (error) {
      console.log(error);
   }
}

// Update contact
async function updateData() {
   try {
      const result = await dbConnection.updateContacts(
         props.id,
         allContactsData.data
      );
      routePush.push("/");
   } catch (error) {
      console.log(error);
   }
}

// Fetch groups on component mount
getAllGroup();
</script>

<template>
   <div class="container">
      <div class="row mb-3">
         <div class="col">
            <h3 v-if="pageName == 'addPage'">Add Contact</h3>
            <h3 v-if="pageName == 'editPage'">Edit Contact</h3>
         </div>
         <hr class="mt-3" />
      </div>
      <div class="row">
         <div class="col d-flex justify-content-between bg-success bg-opacity-25 p-3">
            <div class="col-6">
               <form @submit.prevent="pageName === 'addPage' ? addNewContact() : updateData()">
                  <div class="mt-1">
                     <input
                        type="text"
                        v-model="allContactsData.data.name"
                        class="form-control bg-transparent border-dark"
                        placeholder="Name"
                        required
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="email"
                        v-model="allContactsData.data.email"
                        class="form-control bg-transparent border-dark"
                        placeholder="Email"
                        required
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="number"
                        v-model="allContactsData.data.phone"
                        class="form-control bg-transparent border-dark"
                        placeholder="Phone"
                        required
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="text"
                        v-model="allContactsData.data.company"
                        class="form-control bg-transparent border-dark"
                        placeholder="Company"
                        required
                     />
                  </div>
                  <div class="mt-1">
                     <input
                        type="text"
                        v-model="allContactsData.data.title"
                        class="form-control bg-transparent border-dark"
                        placeholder="Title"
                        required
                     />
                  </div>
                  <div class="mt-1">
                     <select
                        v-model="allContactsData.data.groupId"
                        class="form-select bg-transparent border-dark"
                        required
                     >
                        <option :value="null">Select group</option>
                        <option v-for="group in allGroupData.data" :key="group.id" :value="group.id">
                           {{ group.name }}
                        </option>
                     </select>
                  </div>
                  <div class="mt-1">
                     <input
                        type="text"
                        v-model="allContactsData.data.photo"
                        class="form-control bg-transparent border-dark"
                        placeholder="Paste your image link"
                        required
                     />
                  </div>

                  <button type="submit" class="btn btn-success float-end mt-3">
                     {{ pageName === 'editPage' ? 'Update Contact' : 'Save Contact' }}
                  </button>
               </form>
            </div>

            <div class="col-6 rounded-circle m-auto w-auto">
               <img
                  :src="allContactsData.data.photo"
                  alt="Please upload your picture"
                  class="img-fluid rounded-circle img-height"
               />
            </div>
         </div>
      </div>
   </div>
</template>

<style scoped>
.img-height {
   height: 250px;
}
</style>
