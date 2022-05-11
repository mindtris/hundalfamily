<template>
  <section class="relative">
    <div class="max-w-10xl mx-auto px-4 sm:px-6">
      <div class="pt-12 pb-12 md:pb-20">
        <div id="app">
          <client-only>
            <VueFamilyTree :tree="tree" @card-click="cardClick">
              <template v-if="true" v-slot:card="{ item }">
                <div class="custom-card">
                  <div>
                    <img class="custom-card__image" v-bind:src="item.image" />
                  </div>
                  <div class="custom-card__info">
                    <div class="custom-card__name">
                      {{ item.name }}
                    </div>
                    <div v-show="item.age" class="custom-card__age">
                      ( {{ item.age }} )
                    </div>
                  </div>
                </div>
              </template>
            </VueFamilyTree>
          </client-only>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "MemberTree",
  components: {},
  data() {
    return {
      tree: [
        {
          firstPerson: {
            name: "John Walker",
            image: "/images/team-member-01.jpg",
            age: 1963,
          },
          secondPerson: {
            name: "Jannet Grem",
            image: "/images/team-member-02.jpg",
            age: 1970,
          },
          children: [
            {
              firstPerson: {
                name: "Katia",
              },
              secondPerson: {
                name: "Oleg",
              },
              children: [
                {
                  firstPerson: {
                    name: "Gleb",
                  },
                  secondPerson: {
                    name: "Viktoriya",
                  },
                  children: [
                    {
                      firstPerson: {
                        name: "Rim",
                      },
                      secondPerson: {
                        name: "Natasha",
                      },
                    },
                    {
                      firstPerson: {
                        name: "Leonid",
                      },
                    },
                  ],
                },
                {
                  firstPerson: {
                    name: "Olga",
                  },
                  secondPerson: {
                    name: "Nikita",
                  },
                },
              ],
            },
            {
              firstPerson: {
                name: "Vitia",
              },
              secondPerson: {
                name: "Dasha",
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    cardClick(item) {
      console.log(item);
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
    padding-left: 16px;
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