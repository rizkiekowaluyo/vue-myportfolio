<template>
  <div class="content portfolio">
    <h1>Portfolio</h1>

    <div class="projects">
      <h2>Dribble Projects</h2>
        <div id="vuebbble">
            <div v-for="shot in shots" v-bind:key="shot">
                <img v-bind:src="shot" height="300" width="400"/>
                {{ images }}
            </div>
        </div>
    </div>

  </div>
</template>

<script>

import axios from 'axios';
export default {
    name: 'vuebbble',
    props: {
        count: {
            type: Number,
            default: 3,
            required: false,
        },
    },
    data() {
        return {
            shots: [],
            url: '',
            error: '',
        };
    },
    mounted() {
        this.get();
    },
    methods: {
        get() {
            this.url = 'https://api.dribbble.com/v2/user/shots?access_token=b88a2b96c0c801165e012d6e21f79c1d9b75dd7166e52521c18812fe4d6278f8' + '&per_page=' + this.count;
            axios.get(this.url)
                .then(response => {
                    console.log(response.data);
                    this.shots = response.data;
                })
                .catch(error => {
                    this.error = error.response.data.message + ' (' + error.response.status + ')';
                });
        },
    },
};
</script>

<style lang="scss" scoped>
  // .projects div {
  //   margin: 50px 0;
  //   &:first-of-type {
  //     margin-top: 0;
  //   }
  // }
  h2 {
    text-decoration: underline;
    margin-top: 50px;
  }
  i:after {
    content: '';
    margin-right: 10px;
  }
</style>