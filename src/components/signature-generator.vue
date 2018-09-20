<template>
  <v-container>
    <v-slide-y-transition mode="out-in">
      <v-layout row wrap justify-center align-center>
        <v-flex xs12 md5 offset-md1>
          <h2>Information</h2>
          <v-tabs color="indigo" centered v-model="tabs" slider-color="pink lighten-2">
            <v-tab class="white--text">Main</v-tab>
            <v-tab class="white--text">Social</v-tab>
            <v-tab class="white--text">Style</v-tab>
          </v-tabs>
          <v-tabs-items v-model="tabs" class="white elevation-1">
            <v-tab-item class="elevation-1">
              <v-card>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout row wrap>
                      <v-flex xs6>
                        <v-text-field v-model="firstName" label="First name"></v-text-field>
                      </v-flex>
                      <v-flex xs6>
                        <v-text-field v-model="lastName" label="Last name"></v-text-field>
                      </v-flex>
                      <v-flex xs6>
                        <v-text-field v-model="phoneNumber" label="Phone number"></v-text-field>
                      </v-flex>
                      <!-- <v-flex xs6>
                        <v-text-field v-model="email" label="Email"></v-text-field>
                      </v-flex> -->
                      <v-flex xs6>
                        <v-text-field v-model="jobTitle" label="Job Title"></v-text-field>
                      </v-flex>
                      <!-- <v-flex xs6>
                        <v-text-field v-model="companyName" label="Company Name"></v-text-field>
                      </v-flex> -->
                      <!-- <v-flex xs6>
                        <v-text-field v-model="website" label="Website"></v-text-field>
                      </v-flex> -->
                      <v-flex xs6>
                        <v-text-field v-model="address1" label="Address 1"></v-text-field>
                      </v-flex>
                      <v-flex xs6>
                        <v-text-field v-model="address2" label="Address 2"></v-text-field>
                      </v-flex>
                      <!-- <v-flex xs12>
                        <v-text-field v-model="image" placeholder="https://example.com/images/myphoto.jpg" label="Logo / Photo / Avatar URL"></v-text-field>
                      </v-flex> -->
                    </v-layout>
                  </v-container>
                </v-card-text>
              </v-card>
            </v-tab-item>
            <v-tab-item></v-tab-item>
            <v-tab-item></v-tab-item>
          </v-tabs-items>
        </v-flex>
        <v-flex xs6 md5 offset-md1>
          <h2 class="mt-3">Preview</h2>
          <v-card>
          <v-toolbar class="elevation-3" color="indigo" dark>
            <v-icon color="white">arrow_back</v-icon>
            <v-toolbar-title>Compose</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-icon color="white">send</v-icon>
          </v-toolbar>
          <v-container fluid class="pa-0 mt-2">
            <v-layout wrap>
              <v-flex xs2>
                <v-subheader>To</v-subheader>
              </v-flex>
              <v-flex xs10 class="text-xs-right">
                <v-chip>
                  <v-avatar>
                    <img src="https://randomuser.me/api/portraits/men/92.jpg" >
                  </v-avatar>
                  Trevor Hansen
                </v-chip>
                <v-chip>
                  <v-avatar>
                    <img src="https://randomuser.me/api/portraits/men/91.jpg" >
                  </v-avatar>
                  Alex Nelson
                </v-chip>
              </v-flex>
              <v-flex xs12>
                <v-divider></v-divider>
                <v-text-field
                  label="Subject"
                  value="Plans for the weekend"
                  single-line
                  full-width
                  hide-details
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-divider></v-divider>
                <v-text-field
                  label="Message"
                  v-model="message"
                  full-width
                  multi-line
                  single-line
                  class="pb-0"
                ></v-text-field>
                <table cellspacing="0" cellpadding="0" style="margin-top: 15px; margin-bottom: 5px;">
                    <tr>
                      <td class="table-border-right">
                        <img
                          src="https://server.app.trovisio.com/static/trovisio-logo.png"
                          style="width: 50px; height: 68px;"
                          height="68"
                          width="50"
                        >
                      </td>
                      <td>
                        <table cellspacing="0" cellpadding="0">
                        <tr><div><img style="width: 96px; height: 19px;" height="19" width="96" src="https://server.app.trovisio.com/static/trovisio-header.png"></div></tr>
                        <tr v-if="firstName || lastName"><div style="font-weight: bold; line-height: 25px; font-size: 15px;">{{ firstName }} {{ lastName }}</div></tr>
                        <tr v-if="jobTitle"><div style="line-height: 24px; font-size: 14px;">{{ jobTitle }}</div></tr>
                        <tr v-if="phoneNumber"><div style="line-height: 24px; font-size: 14px;">{{ phoneNumber }}</div></tr>
                        <tr v-if="address1 || address2" ><div style="line-height: 24px; font-size: 14px;">{{ address1 }}, {{ address2 }}</div></tr>
                      </table>
                        <!-- <div>{{ website }}</div> -->
                      </td>
                    </tr>
                  </table>
                <!-- <table cellspacing="0" cellpadding="0" style="margin-top: 15px; margin-bottom: 5px;">
                  <tr>
                    <td style="padding: 0px;" valign="top" class="table-border-right">
                      <img
                        src="https://server.app.trovisio.com/static/trovisio-logo.png"
                        style="width: 50px; height: 68px;"
                        height="68"
                        width="50"
                      >
                    </td>
                    <td>
                      <table cellspacing="0" cellpadding="0">
                      <tr><div><img style="width: 96px; height: 19px;" height="19" width="96" src="https://server.app.trovisio.com/static/trovisio-header.png"></div></tr>
                      <tr><div style="font-weight: bold; line-height: 25px; font-size: 15px;">{{ firstName }} {{ lastName }}</div></tr>
                      <tr><div style="line-height: 24px; font-size: 14px;">{{ jobTitle }}</div></tr>
                      <tr><div style="line-height: 24px; font-size: 14px;">{{ phoneNumber }}</div></tr>
                      <tr><div style="line-height: 24px; font-size: 14px;">{{ address1 }}, {{ address2 }}</div></tr>
                    </table>
                    </td>
                  </tr>
                </table> -->
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
        </v-flex>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.user-name {
  font-weight: bold;
}
.table-border-right {
  padding-right: 0.1rem;
}
/* .image-text {
  max-width: 60%;
  height: auto;
}
.image-logo {
  max-width: 50px;
  height: auto;
  /* margin-bottom: 8px;
} */
.text {
  margin-top: 2px;
}
</style>

<script>
export default {
  data () {
    return {
      tabs: null,
      firstName: 'John',
      lastName: 'Doe',
      phoneNumber: '+46 70 - 123 45 67',
      email: 'john.doe@example.com',
      jobTitle: 'Software Engineer',
      companyName: 'John Doe Ltd',
      website: 'www.example.com',
      address1: 'Anders Carlssons gata 7',
      address2: 'SE-417 55, Gothenburg, Sweden',
      image: '',
      message: 'Hi,\nI just wanted to check in and see if you had any plans the upcoming weekend. We are thinking of heading up to Napa. \n\nRegards,'
    }
  },
  name: 'Signature-Generator'
}
</script>