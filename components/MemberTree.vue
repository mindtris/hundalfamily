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
                    <div v-show="item.age" class="custom-card__age">
                      ( {{ item.age }} )
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
            relation: "Husband",
          },
          secondPerson: {
            name: "Jannet Grem",
            image: "/images/team-member-02.jpg",
            age: 1970,
            relation: "Wife",
          },
          children: [
            {
              firstPerson: {
                name: "John Walker",
                image: "/images/team-member-01.jpg",
                age: 1963,
                relation: "Wife",
              },
              secondPerson: {
                name: "John Walker",
                image: "/images/team-member-01.jpg",
                age: 1963,
                relation: "Wife",
              },
              children: [
                {
                  firstPerson: {
                    name: "John Walker",
                    image: "/images/team-member-01.jpg",
                    age: 1963,
                  },
                  secondPerson: {
                    name: "John Walker",
                    image: "/images/team-member-01.jpg",
                    age: 1963,
                  },
                  children: [
                    {
                      firstPerson: {
                        name: "John Walker",
                        image: "/images/team-member-01.jpg",
                        age: 1963,
                      },
                      secondPerson: {
                        name: "John Walker",
                        image: "/images/team-member-01.jpg",
                        age: 1963,
                      },
                    },
                    {
                      firstPerson: {
                        name: "John Walker",
                        image: "/images/team-member-01.jpg",
                        age: 1963,
                      },
                    },
                  ],
                },
                {
                  firstPerson: {
                    name: "John Walker",
                    image: "/images/team-member-01.jpg",
                    age: 1963,
                  },
                  secondPerson: {
                    name: "John Walker",
                    image: "/images/team-member-01.jpg",
                    age: 1963,
                  },
                },
              ],
            },
            {
              firstPerson: {
                name: "John Walker",
                image: "/images/team-member-01.jpg",
                age: 1963,
              },
              secondPerson: {
                name: "John Walker",
                image: "/images/team-member-01.jpg",
                age: 1963,
              },
            },
          ],
        },
      ],
    };
  },
  methods: {
    cardClick(item) {},
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