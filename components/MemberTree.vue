<template>
  <section class="relative">
    <div class="max-w-10xl mx-auto px-4 sm:px-6">
      <div class="pt-12 pb-12 md:pb-20">
        <div id="app">
          <client-only>
            <CustomFamilyTree :tree="tree" @card-click="cardClick">
              <template v-if="true" v-slot:card="{ item }">
                <div class="flex flex-col items-center">
                  <div>
                    <img
                      class="custom-card__image mb-4"
                      style="width: 120px; height: 120px"
                      v-bind:src="item.image"
                    />
                  </div>
                  <div class="custom-card__info">
                    <div class="custom-card__name text-xl font-medium mb-1">
                      {{ item.name }}
                    </div>
                    <div v-show="item.birthdate" class="custom-card__age">
                      ( {{ item.birthdate | formatDateGetYear }} )
                    </div>
                  </div>
                </div>
              </template>
            </CustomFamilyTree>
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import treeData from "../assets/family-tree-data/tree.json";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "MemberTree",
  components: {},
  data() {
    return {
      tree: [],
      seqData: [],
      rawData: [],
    };
  },
  async mounted() {
    this.getTreeData().then((data) => {
      this.rawData = data;
      this.processData();
    });
  },
  methods: {
    cardClick(item) {},
    async getTreeData() {
      return this.fetchTreeData();
    },
    async fetchTreeData() {
      return this.$content("family-tree-members")
        .fetch()
        .catch((err) => console.error(err) || []);
    },

    getChildren(slug) {
      let children = this.rawData.filter((data) => {
        return data.father == slug;
      });
      let childData = [];

      children.forEach((data) => {
        this.seqData.push(data);
        let secondPersonIndex = this.rawData.findIndex(
          (tmp) => tmp.husband == data.slug
        );
        this.seqData.push(this.rawData[secondPersonIndex]);
      });

      children.forEach((data) => {
        let secondPersonIndex = this.rawData.findIndex(
          (tmp) => tmp.husband == data.slug
        );
        childData.push({
          firstPerson: data,
          secondPerson: this.rawData[secondPersonIndex],
          children: this.getChildren(data.slug),
        });
      });

      return childData;
    },

    processData() {
      let firstPersonIndex = this.rawData.findIndex(
        (data) => data.father == ""
      );
      let firstPerson = this.rawData[firstPersonIndex];
      //this.rawData.splice(firstPersonIndex, 1);
      this.seqData.push(firstPerson);
      let secondPersonIndex = this.rawData.findIndex(
        (data) => data.husband == firstPerson.slug
      );
      let secondPerson = this.rawData[secondPersonIndex];
      //this.rawData.splice(secondPersonIndex, 1);
      this.seqData.push(secondPerson);
      this.tree.push({
        firstPerson: firstPerson,
        secondPerson: secondPerson,
        children: this.getChildren(firstPerson.slug),
      });

      console.log("seqData", this.seqData);

      // if(rawData.length > 0){

      // }
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

.text-center {
  text-align: center;
  margin-bottom: 32px;
}

.custom-card {
  display: flex;
  align-items: center;
  width: 220px;
  padding: 16px;
  border: 1px solid #ddd;
  border-radius: 10px;
  box-sizing: border-box;
  background-color: #fff;
  cursor: pointer;
  box-shadow: 0 0 6px 2px rgba(#000, 0);
  transition: box-shadow 0.2s ease;
  &:hover {
    box-shadow: 0 0 6px 2px rgba(#000, 0.1);
  }
  &__image {
    flex: 0 0 auto;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #dedede;
    background-size: cover;
    background-position: 50%;
  }
  &__info {
    padding-left: 0px;
  }
  &__name {
    font-weight: 600;
  }
  &__age {
    margin-top: 4px;
    font-size: 12px;
    text-align: center;
  }
}
</style>