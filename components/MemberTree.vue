<template>
  <section class="relative">
    <div class="hidden md:block max-w-10xl mx-auto px-4 sm:px-6">
      <div class="pt-12 pb-12 md:pb-20">
        <div id="app">
          <client-only>
            <CustomFamilyTree :tree="tree" @card-click="cardClick">
              <template v-if="true" v-slot:card="{ item }">
                <div class="flex flex-col items-center">
                  <div class="relative inline-block">
                    <img
                      class="
                        inline-block
                        object-cover
                        w-12
                        h-12
                        rounded-full
                        bg-amber-400
                      "
                      style="width: 120px; height: 120px"
                      v-bind:src="item.image"
                    />
                    <!-- <span
                      class="
                        absolute
                        bottom-0
                        right-0
                        inline-block
                        w-10
                        h-10
                        bg-green-600
                        border-4 border-white
                        rounded-full
                      "
                      >Hello</span
                    > -->
                  </div>
                  <div>
                    <h6>
                      <span class="badge badge-secondary">
                        {{ item.relation }}
                      </span>
                    </h6>
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
    <div class="block md:hidden max-w-10xl mx-auto px-4 sm:px-6">
      <div class="pt-36 pb-12 md:pb-20">
        <div
          v-if="showTreeDataInMobile"
          class="sm:flex sm:flex-wrap sm:justify-center -my-4 sm:-my-8 sm:-mx-3"
        >
          <div
            v-for="(data, index) in seqData"
            :key="index"
            class="sm:w-1/2 md:w-1/3 lg:w-1/4 py-4 sm:py-8 sm:px-3"
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-anchor="[data-aos-id-team]"
          >
            <div v-if="data" class="flex flex-col items-center">
              <img
                class="rounded-full mb-4"
                :src="data ? data.image : null"
                width="120"
                height="120"
                alt="Team member 02"
              />
              <div>
                <h6>
                  <span class="badge badge-secondary">
                    {{ data ? data.relation : null }}
                  </span>
                </h6>
              </div>
              <h4 class="text-xl font-medium mb-1">
                {{ data ? data.name : null }}
              </h4>
              <div class="text-gray-500 mb-1">
                ({{ (data ? data.birthdate : null) | formatDateGetYear }})
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import treeData from "../assets/family-tree-data/tree.json";
export default {
  name: "MemberTree",
  components: {},
  data() {
    return {
      tree: [],
      seqData: [],
      rawData: [],
      showTreeDataInMobile: false,
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
        let firstPerson = { ...data, relation: "Husband" };
        this.seqData.push(firstPerson);
        let secondPerson;
        let secondPersonIndex = this.rawData.findIndex(
          (tmp) => tmp.husband == data.slug
        );
        if (this.rawData[secondPersonIndex]) {
          secondPerson = {
            ...this.rawData[secondPersonIndex],
            relation: "Wife",
          };
        }
        this.seqData.push(secondPerson);
      });

      children.forEach((data) => {
        let secondPersonIndex = this.rawData.findIndex(
          (tmp) => tmp.husband == data.slug
        );
        let firstPerson = { ...data, relation: "Husband" };
        let secondPerson;
        if (this.rawData[secondPersonIndex]) {
          secondPerson = {
            ...this.rawData[secondPersonIndex],
            relation: "Wife",
          };
        }

        childData.push({
          firstPerson: firstPerson,
          secondPerson: secondPerson,
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
      firstPerson = { ...firstPerson, relation: "Husband" };

      this.seqData.push(firstPerson);
      let secondPersonIndex = this.rawData.findIndex(
        (data) => data.husband == firstPerson.slug
      );
      let secondPerson = this.rawData[secondPersonIndex];
      secondPerson = { ...secondPerson, relation: "Wife" };

      this.seqData.push(secondPerson);
      this.tree.push({
        firstPerson: firstPerson,
        secondPerson: secondPerson,
        children: this.getChildren(firstPerson.slug),
      });

      console.log("seqData", this.seqData);

      this.showTreeDataInMobile = true;

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
.badge-secondary {
  color: #fff;
  background-color: #fb8500;
}
.badge {
  display: inline-block;
  padding: 0.25em 0.4em;
  font-size: 75%;
  font-weight: 700;
  line-height: 1;
  text-align: center;
  white-space: nowrap;
  vertical-align: baseline;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
}
</style>