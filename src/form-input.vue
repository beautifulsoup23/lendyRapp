<template>
  <div id="form" style="padding-left: 80px;
    padding-right: 80px;
    padding-top: 20px;">
  <b-container fluid>
    <b-row class="my-1" v-for="type in types" :key="type">
      <b-col sm="3"><label :for="`type-${type}`">{{ type.name }}:</label></b-col>
       <b-form-feedback id="input-feedback">
        <!-- This will only be shown if the preceeding input has an invalid state -->
        Enter at least 3 letters
    </b-form-feedback>
      <b-col sm="9"><b-form-input :id="`type-${type.type}`" :type="type.type"></b-form-input></b-col>
    </b-row>
  </b-container>
</div>
</template>

<script>
export default {
  data () {
    return {
    types:[
        {name: "Subject worked on" ,type: "text"},
        {name: "Date" ,type: "date"},
        {name: "Reference (Optional)" ,type: "text"},
        ]
    }
  }
}
</script>



